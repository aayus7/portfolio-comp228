import React from "react";
export default function Education() {
	const edu = [
		{
			year: "2024 - Present",
			degree: "Diploma in Game Programming",
			institution: "Centennial College",
			details:
				"Focus on game development, database management, and software engineering principles",
		},
		{
			year: "2020-2022",
			degree: "High School Diploma (+2)",
			institution: "Kathmandu Model Secondary School",
			details:
				"Graduated with honors, strong foundation in mathematics and sciences",
		},
	];
	return (
		<section>
			<h2>Education</h2>
			{edu.map((e, idx) => (
				<div key={idx} className="education-item">
					<div className="education-degree">{e.degree}</div>
					<div className="education-school">{e.institution}</div>
					<div className="education-details">
						<strong>{e.year}</strong> — {e.details}
					</div>
				</div>
			))}
		</section>
	);
}
