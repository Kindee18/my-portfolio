import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<main className="bg-gray-50 dark:bg-dark-primary text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
				<AnimatedBackground />
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
