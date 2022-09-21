import React from "react";
import { Cards } from "./Cards.jsx";
import { Foorter } from "./Foorter.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

const Home = () => {
	return (
		<div className="w-100 text-center justify-content-between align-items-center container-fluid vh-100 d-flex flex-column">
			<Navbar style={{paddingRight:"3rem", paddingLeft:"3rem"}}/>
			<main className="contenedor">
				<Jumbotron 
				title="Bienvenide a Cannanena"
				description= "Esta es la primera aproximacion a un espacio de cultura cannabica para america latina."
				buttonUrl= "https://cannanenas.com/"
				buttonLabel= "Adéntrate en la comunidad"
				/>
				<Cards />
			</main>
			<Foorter />
		</ div> 
	);
};

export default Home;
