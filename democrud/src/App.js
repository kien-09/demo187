import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./CRUD/Home";
import List from "./CRUD/List";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";

function App() {
  return (
    <Routes>
      <Route path={'products'} element={<Home/>}>
          <Route path={'list'} element={<List/>}/>
          <Route path={'create'} element={<Create/>}/>
          <Route path={'update/:id'} element={<Update/>}/>
      </Route>
    </Routes>
  );
}

export default App;
