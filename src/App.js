import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi'
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer position='bottom-right' limit={5} autoClose={2000}/>
      <Navi />
      <Container className='main'>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
