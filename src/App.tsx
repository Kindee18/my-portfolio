import Header from "./components/Header";
/**
 * File: src/App.tsx
 * Description: Root application component that composes the main sections.
 * Author: Kindee18
 * Date: 2025-10-28
 */
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
/**
 * App component
 * Composes the full page layout.
 * @returns JSX.Element
 */

function App() {
	return (
		<ThemeProvider>
			<main className="simple-bg text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
				<Header />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</ThemeProvider>
	);
}

export default App;
