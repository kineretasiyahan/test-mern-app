import logo from './logo.svg';
import './App.css';
import{useEffect} from 'react'
import GetApi from './Components/featurs/getApi';

function App() { 
useEffect((GetApi(),[]))
  return (
    <div className="App">
    </div>
  );
}

export default App;
