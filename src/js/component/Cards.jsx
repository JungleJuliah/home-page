import React from "react"
import { Card } from "./Card.jsx"

export const Cards = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <Card 
            foto=""
            title="Broc OG"
            descrip="lo mejor de lo mejor"
            /> 
            <Card 
            foto=""
            title="Holistic Hoe"
            descrip="conecta con pachamama"
            /> 
            <Card 
            foto=""
            title="Lemons Skunk"
            descrip="simplemente un clásico"
            /> 
            <Card 
            foto=""
            title="Amnesia"
            descrip="un hibrido"
            /> 
        </div>
    )
}
