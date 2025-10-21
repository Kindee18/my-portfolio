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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-3 sm:py-4">
					<a
						href="#home"
						title="Go to Home"
						className="flex-shrink-0"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("home");
						}}>
						<Logo />
					</a>

					{/* Desktop Menu */}
					<nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
						{menuItems.map((item) => (
							<motion.a
								key={item.title}
								href={item.href}
								className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
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

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center space-x-2">
						<ThemeToggle />
						<button
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							title="Toggle menu"
							aria-label="Toggle menu">
							<svg
								className="w-5 h-5 text-gray-600 dark:text-gray-300"
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
					</div>
				</div>{" "}
				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="md:hidden border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
						{menuItems.map((item, index) => (
							<motion.a
								key={item.title}
								href={item.href}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
								className="block py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg font-medium"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href.substring(1));
									setIsMenuOpen(false);
								}}>
								{item.title}
							</motion.a>
						))}
					</motion.nav>
				)}
			</div>
		</header>
	);
};

export default Header;
