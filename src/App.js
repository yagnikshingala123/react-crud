import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './components/Table';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form />}/>
          <Route exact path="/table" element={<Table/>} />
          <Route exact path="/edit/:id" element={<Form/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
