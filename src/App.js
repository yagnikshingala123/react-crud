import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import FunctionCrud from "./components/FunctionCrud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import DynamicForm from "./components/DynamicForm";
import ApiGetData from "./components/ApiGetData";
// import DynamicSelectMenus from "./components/FunctionCrud";
// import GlobleState from "./context/GlobleState";
// import { createContext } from "react";

// const name = createContext()
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form />}/>
          <Route exact path="/table" element={<Table/>} />
          <Route exact path="/edit/:id" element={<Form/>} />
          <Route exact path="/dynamic-form" element={<DynamicForm/>} />
          <Route exact path="/function-crud" element={<ApiGetData/>} />
      </Routes>
    </BrowserRouter>
      <div className="App">
        {/* <GlobleState> */}
        {/* <name.Provider value={"xxxx"}>
          <FunctionCrud />
        </name.Provider> */}
        {/* </GlobleState> */}
          
      </div>
    </>
  );
}

export default App;
// export {name}
