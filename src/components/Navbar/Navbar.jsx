import './Navbar.css'; // Importa el archivo de estilos CSS


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img alt="logo47street" src={'./imagenes/street.png'}/> 
                <h1>47STREET!</h1>
            </div>

            <div>
                <ul className="List-container">
                    <li><button>remeras</button></li>
                    <li><button>jeans</button></li> 
                    <li><button>bolsos</button></li>
                </ul>
            </div>

            
        </div>


    )
}

export default Navbar;