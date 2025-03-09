import NavBar from "../nav/Nav"
import Header from "../header/Header";

export default function Layout ({ navbarPosition, title, children}) {
    return (
        <main className="container-fluid">
            {/*conditional renderting of navbar*/}
            {navbarPositoin === 'top' && <NavBar/>}

            <Header title={title}/>

            {/* Render the Navbar below the header if navbarPosition is 'bottom */}
            {navbarPosition === 'bottom' && <NavBar/>}

            {/* Render the childern (pafe content) */}
            {children}

        </main>
    );
}
