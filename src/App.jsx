import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
export default function App() {
	return (
		<div className="app">
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/education" element={<Education />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
