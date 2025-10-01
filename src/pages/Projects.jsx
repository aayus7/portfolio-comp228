import React from "react";
import ProjectCard from "../components/ProjectCard";
const projects = [
	{
		title: "Website for cloud hosting company",
		image: "/project1.PNG",
		description:
			"A website for a cloud hosting company made with great UI and responsive design. Items with scroll effects are really good!",
		url: "https://aayus7.github.io/html-css-mosh/",
	},
	{
		title: "Simple StopWatch App",
		image: "/project2.PNG",
		description:
			"A simple stopwatch app made with JavaScript. The highlight of this project is the use of iOS/MacOS kinda UI. Feels like iOS 26 but I made it way early!",
		url: "https://aayus7.github.io/stopwatchJSpractice/",
	},
	{
		title: "Movie Info App (TMDB)",
		image: "/project3.PNG",
		description:
			"A movie info app made with JavaScript. The highlight of this project is the use of API to fetch movie data. I used TMDB API for this project. The UI for this is also great with the use of glass design and dynamic grainy background!",
		url: "https://aayus7.github.io/movie-info/",
	},
];
export default function Projects() {
	return (
		<section>
			<h2>Projects</h2>
			<div className="projects-grid">
				{projects.map((p) => (
					<ProjectCard key={p.title} {...p} />
				))}
			</div>
		</section>
	);
}
