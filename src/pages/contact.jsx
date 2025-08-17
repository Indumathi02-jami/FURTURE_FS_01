import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	// Reference for the form
	const form = useRef();

	// Send email using EmailJS
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_vbyc489", // Replace with EmailJS service ID
				"template_118khtj", // Replace with EmailJS template ID
				form.current,
				"qlFa4Lz4ZcRR1SdbE" // Replace with EmailJS public key
			)
			.then(
				(result) => {
					console.log("Success:", result.text);
					alert("Message sent successfully!");
					e.target.reset();
				},
				(error) => {
					console.error("Error:", error.text);
					alert("Failed to send message. Try again!");
				}
			);
			e.target.reset();
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with me.
							You can email me directly at{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>{" "}
							or use the form below 👇
						</div>

						{/* Contact Form */}
						<form ref={form} onSubmit={sendEmail} className="contact-form">
							<input type="text" name="user_name" placeholder="Your Name" required />
							<input type="email" name="user_email" placeholder="Your Email" required />
							<textarea name="message" placeholder="Your Message" required />
							<button type="submit">Send Message</button>
						</form>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
