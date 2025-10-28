import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
/**
 * File: src/components/Footer.tsx
 * Description: Site footer with contact and copyright information.
 * Author: Kindee18
 * Date: 2025-10-28
 */

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Footer component
 * @returns JSX.Element
 */
const Footer = () => {
	const handleEmailClick = async (e: React.MouseEvent) => {
		e.preventDefault();
		const email = "kindsonegbule15@gmail.com";

		try {
			await navigator.clipboard.writeText(email);
			// Show a temporary notification or you could add a toast notification
			alert(`Email address copied to clipboard: ${email}`);
		} catch (err) {
			// Fallback if clipboard API fails
			console.log("Clipboard API failed, trying fallback");
			// Try opening mailto as last resort
			window.location.href = `mailto:${email}`;
		}
	};

	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/Kindee18",
			icon: <FaGithub className="text-2xl" />,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/kindson-egbule-6b5768308/",
			icon: <FaLinkedin className="text-2xl" />,
		},
		{
			name: "X (Twitter)",
			url: "https://x.com/n_kindson",
			icon: <FaXTwitter className="text-2xl" />,
		},
		{
			name: "Email",
			url: "mailto:kindsonegbule15@gmail.com",
			icon: <FaEnvelope className="text-2xl" />,
		},
	];

	return (
		<footer className="py-12 bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-800 pattern-overlay">
			<ScrollReveal width="100%">
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center justify-center space-y-6">
						<div className="flex items-center space-x-8">
							{socialLinks.map((link) => (
								<motion.a
									key={link.name}
									href={link.name === "Email" ? "#" : link.url}
									{...(link.name !== "Email" && {
										target: "_blank",
										rel: "noopener noreferrer",
									})}
									{...(link.name === "Email" && {
										onClick: handleEmailClick,
									})}
									className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 cursor-pointer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									aria-label={`Visit ${link.name}`}>
									{link.icon}
								</motion.a>
							))}
						</div>
						<div className="text-center">
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
								Connect with me on social media
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								© {new Date().getFullYear()} Kindson Nathaniel Egbule. All
								rights reserved.
							</p>
						</div>
					</div>
				</div>
			</ScrollReveal>
		</footer>
	);
};

export default Footer;
