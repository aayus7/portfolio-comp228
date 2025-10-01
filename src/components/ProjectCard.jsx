import React from "react";
export default function ProjectCard({ title, image, description, url }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="project-card-link"
		>
			<article className="project-card">
				<img src={image} alt={`${title} screenshot`} />
				<div className="project-card-content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</article>
		</a>
	);
}
