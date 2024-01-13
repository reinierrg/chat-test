const channelsService = async () => {
  const res = await fetch('http://localhost:5173/channels.json')
  const json = await res.json()
  return json
}

export {
  channelsService
}