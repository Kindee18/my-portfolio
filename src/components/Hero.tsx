import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section
			id="home"
			className="section-padding min-h-screen flex items-center relative overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 2 }}
				className="absolute inset-0 grid grid-cols-4 gap-4 pointer-events-none">
				{[...Array(16)].map((_, i) => (
					<motion.div
						key={i}
						className="bg-primary/10 dark:bg-primary/5 h-full w-full"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 2,
							delay: i * 0.1,
						}}
					/>
				))}
			</motion.div>
			<div className="container mx-auto px-4 relative">
				<div className="max-w-4xl">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
						Hi, I'm{" "}
						<span className="text-primary">Kindson Nathaniel Egbule</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
						className="text-xl text-gray-600 dark:text-gray-300 mb-4">
						Cloud Engineering Professional
					</motion.p>

					<motion.p
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
						className="text-lg text-gray-600 dark:text-gray-300 mb-8">
						Specializing in cloud infrastructure, DevOps, and scalable solutions
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}>
						<motion.a
							href="#contact"
							className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
							}}
							whileTap={{ scale: 0.95 }}>
							Get in Touch
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
