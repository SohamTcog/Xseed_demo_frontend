import './App.css';
import Display from './Components/Display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkPage from './Components/LinkPage';
function App() {
  return (
    <div className="App">
         <h1>React API Demo</h1>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<LinkPage/>}  />
      <Route path="/display" element={  <Display/>} />
     
  </Routes>
  </BrowserRouter>
      
        
    </div>
  );
}
export default App;
