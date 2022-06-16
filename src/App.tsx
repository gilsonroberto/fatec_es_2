import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login';
import Principal from './Paginas/Principal';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/principal" element={<Principal />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
