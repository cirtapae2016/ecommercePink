import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />


    </div>

    );
}

export default App;
