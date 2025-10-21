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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left Column - Text Content */}
					<div className="text-center lg:text-left lg:order-1 order-2">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
							Hi, I'm{" "}
							<span className="text-primary block sm:inline">
								Kindson Nathaniel Egbule
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
							className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-medium">
							ALT School Africa Student | Aspiring Cloud Engineer
						</motion.p>

						<motion.p
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
							className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
							Specializing in cloud infrastructure, DevOps, and scalable
							solutions
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}>
							<motion.a
								href="#contact"
								className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block font-medium"
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}>
								Get in Touch
							</motion.a>
						</motion.div>
					</div>

					{/* Right Column - Profile Picture */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex justify-center lg:justify-center lg:order-2 order-1 mb-8 lg:mb-0">
						<div className="relative">
							<motion.div
								className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}>
								<img
									src="/My picture.jpg"
									alt="Kindson Nathaniel Egbule"
									className="w-full h-full object-cover object-top"
									onError={(e) => {
										// Fallback if image doesn't exist
										e.currentTarget.src = `https://ui-avatars.com/api/?name=Kindson+Egbule&size=320&background=3b82f6&color=ffffff&format=svg`;
									}}
								/>
							</motion.div>

							{/* Decorative elements */}
							<motion.div
								className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/20 rounded-full blur-xl"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
							<motion.div
								className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-secondary/30 rounded-full blur-lg"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.3, 0.6, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									repeatType: "reverse",
									delay: 1,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
