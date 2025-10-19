import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "../utils/scroll";
import Logo from "./Logo";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ title: "Home", href: "#home" },
		{ title: "About", href: "#about" },
		{ title: "Projects", href: "#projects" },
		{ title: "Contact", href: "#contact" },
	];

	return (
		<header className="fixed w-full bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm z-50 shadow-sm transition-colors duration-200">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{" "}
					<a
						href="#home"
						title="Go to Home"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("home");
						}}>
						<Logo />
					</a>{" "}
					{/* Desktop Menu */}
					<nav className="hidden md:flex space-x-8 items-center">
						{menuItems.map((item) => (
							<motion.a
								key={item.title}
								href={item.href}
								className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href.substring(1));
								}}
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.95 }}>
								{item.title}
							</motion.a>
						))}
						<ThemeToggle />
					</nav>
					{/* Mobile Menu Button */}{" "}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						title="Toggle menu"
						aria-label="Toggle menu">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>{" "}
				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="md:hidden pt-4 pb-2">
						{menuItems.map((item) => (
							<a
								key={item.title}
								href={item.href}
								className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
								onClick={() => setIsMenuOpen(false)}>
								{item.title}
							</a>
						))}
						<div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
							<ThemeToggle />
						</div>
					</motion.nav>
				)}
			</div>
		</header>
	);
};

export default Header;
