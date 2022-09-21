import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

export const Card = ({foto,title,descrip}) => {
    return (
        <div className="me-3 card" style={{width: "18rem"}}>
            <img src={foto} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descrip}</p>
                <a href="#" className="btn btn-primary">Conóceme más</a>
             </div>
         </div>
    );
};