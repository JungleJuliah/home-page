import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

export const Jumbotron = (props) => {
    return (
		 <div className="p-5 mb-5 bg-light rounded-3">
		 	<h1 className="display-4">{props.title}</h1>
		 	<p className="lead">{props.description}</p>
		 	<a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">
		 		{props.buttonLabel}
		 	</a>
		 </div>

    );
};

Jumbotron.PropTypes = {
    title: PropTypes.string,
 	description: PropTypes.string,
 	buttonUrl: PropTypes.string,
 	buttonLabel: PropTypes.string,
 }

