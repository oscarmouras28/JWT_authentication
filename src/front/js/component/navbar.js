import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<Link to="/sign-up">
					<span className="navbar-brand mb-0 h1">Sign up</span>
				</Link>
				<Link to="/sign-in">
					<span className="navbar-brand mb-0 h1">Sign in</span>
				</Link>
				<Link to="/protected">
					<span className="navbar-brand mb-0 h1">😈No entrar😈</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
