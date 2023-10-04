import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Shop Tienda'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="*" element={<h1>404 NO HAY PAGINA ACA</h1>}/>
        </Routes>      
      </BrowserRouter>     

    </div>
    
  );
}

export default App;
