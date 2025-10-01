import React from "react";

export default function Logo({ text = "आयुष", size = 40 }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "'Noto Sans Devanagari', sans-serif",
				fontWeight: "600",
				fontSize: size,
				color: "#FFFFFF",
				letterSpacing: "1px",
			}}
		>
			{text}
		</div>
	);
}
