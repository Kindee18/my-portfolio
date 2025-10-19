import { motion } from "framer-motion";

const AnimatedBackground = () => {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
			{Array.from({ length: 50 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute bg-primary/20 rounded-full"
					style={{
						width: Math.random() * 20 + 10,
						height: Math.random() * 20 + 10,
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						x: [0, Math.random() * 100 - 50],
						y: [0, Math.random() * 100 - 50],
					}}
					transition={{
						duration: Math.random() * 10 + 20,
						repeat: Infinity,
						repeatType: "reverse",
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
};

export default AnimatedBackground;
