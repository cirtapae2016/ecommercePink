import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda Pink Floyd</h3>
            <div>
                <button>Poleras</button>
                <button>Discos</button>
                <button>Instrumentos</button>
            </div>
            <CartWidget />
        </nav>

    )

}
export default NavBar;
