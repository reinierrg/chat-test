import {useState, useEffect } from 'react'
import {channelsService} from '../services/channels.js'

export function useChannels () {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getChannels = async () => {
      try {
        setLoading(true)
        setTimeout(async () => {
          const {data} = await channelsService();
          setChannels(data);
        }, 1000);
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    getChannels();
  },[])
 
  return { channels, loading, error};
}
