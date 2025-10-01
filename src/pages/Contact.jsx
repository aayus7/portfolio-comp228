import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Contact() {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		message: "",
	});
	const navigate = useNavigate();
	function handleChange(e) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}
	function handleSubmit(e) {
		e.preventDefault();
		const saved = JSON.parse(localStorage.getItem("messages") || "[]");
		saved.push({ ...form, date: new Date().toISOString() });
		localStorage.setItem("messages", JSON.stringify(saved));
		navigate("/");
	}
	return (
		<section>
			<h2 style={{ textAlign: "center" }}>Contact Me</h2>
			<div className="contact-grid">
				<div
					className="contact-info"
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<h3>Get in Touch</h3>
					<p>
						<strong>📧 Email:</strong>
						<br />
						aayushxettri42@gmail.com
					</p>
					<p>
						<strong>📱 Phone:</strong>
						<br />
						+1 (437) 443-8699
					</p>
					<p>
						<strong>📍 Location:</strong>
						<br />
						Toronto, Ontario, Canada
					</p>
					<p>
						I'm always interested in new opportunities and
						collaborations. Feel free to reach out!
					</p>
				</div>
				<form onSubmit={handleSubmit} className="contact-form">
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							id="firstName"
							name="firstName"
							placeholder="Enter your first name"
							value={form.firstName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							id="lastName"
							name="lastName"
							placeholder="Enter your last name"
							value={form.lastName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone Number</label>
						<input
							id="phone"
							name="phone"
							placeholder="Enter your phone number"
							value={form.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							id="email"
							name="email"
							placeholder="Enter your email address"
							value={form.email}
							onChange={handleChange}
							type="email"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Tell me about your project or just say hello!"
							value={form.message}
							onChange={handleChange}
							rows="5"
						/>
					</div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
