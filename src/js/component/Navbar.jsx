import React from  "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { NavItem } from "./NavItem.jsx";


export const Navbar = (props) => {
    return (
        <nav className= "w-100 bg-dark d-flex justify-content-end" {...props}> 
        {/* aqui voy a empezar a poner los items de mi navbar que voy a crear en otro componente */}
            <h3 className="w-100 text-start text-light">Start Boostrap</h3>
            <NavItem title="Inicio" />
            <NavItem title="Conócenos" />
            <NavItem title="Nuestros Servicios" />
            <NavItem title="Contacto" />
        </nav>
    );
};