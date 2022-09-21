import React from "react"

export const NavItem = ({href,icon,title}) => {
    return (
        <div className="me-3">
            <a href={href} className= "nav-item__tag d-flex justify-content-between align-items-center text-decoration-none">
                <i>{icon}</i>
                <h3 className= "fs-5 text-muted fw-normal">{title}</h3>
            </a>
    
        </div>
    );
};


// About -> Services -> Contact
// .nav-item__tag{
//     background-color= red
// };
// por algun lado aqui tengo definir el min-width, width y max-width de forma responsiva con una clase dentro del ancla o div que es .nav-item_tag
