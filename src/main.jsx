import ReactDOM from 'react-dom/client'
import App from './App';
import { UserProvider } from './context/user';

const app = ReactDOM.createRoot(document.getElementById('root'));

app.render(
  <UserProvider>
   <App/>
  </UserProvider>
);
