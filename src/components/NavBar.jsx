import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
export default function NavBar() {
	return (
		<header>
			<div className="nav-brand">
				<Logo initials="AT" />
			</div>
			<nav>
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/education">Education</NavLink>
				<NavLink to="/services">Services</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</nav>
		</header>
	);
}
