
import React from "react"


const GenerateNavBar = () => {
    return(
    <>
    <nav className="nav-menu">
        <div>
            <button className="nav-btn" aria-label="open navigation">
                <span className="hamburger"></span>
            </button>
        
            <a href="./index.html">
                <img src="./img/logo_outsiders.png" alt="logo {Ou}Siders" className="nav-logo"></img>
            </a>
        </div>
        
        <ul className="nav__list">
            <li><a href="./index.html">Accueil</a></li>
            <li><a href="./apropos.html">A propos</a></li>
            <li><a href="./equipe.html">L'équipe</a></li>
        </ul>
    </nav>
    </>
    )
}

export default GenerateNavBar;