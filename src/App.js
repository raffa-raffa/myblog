import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;