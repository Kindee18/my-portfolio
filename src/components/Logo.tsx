/**
 * File: src/components/Logo.tsx
 * Description: Site logo component (SVG or text) used in header and footer.
 * Author: Kindee18
 * Date: 2025-10-28
 */

import { motion } from "framer-motion";

/**
 * Logo component
 * @returns JSX.Element
 */
const Logo = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			className="flex items-center space-x-2">
			<div className="w-8 h-8 relative">
				<motion.div
					className="absolute inset-0 bg-primary rounded-lg"
					whileHover={{ rotate: 180 }}
					transition={{ duration: 0.3 }}
				/>
				<motion.div
					className="absolute inset-2 bg-white dark:bg-dark-secondary rounded-sm"
					whileHover={{ rotate: -180 }}
					transition={{ duration: 0.3 }}
				/>
				<motion.div
					className="absolute inset-3 flex items-center justify-center text-primary font-bold"
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.3 }}>
					K
				</motion.div>
			</div>
			<span className="text-xl font-bold text-gray-900 dark:text-white">
				Kindson Egbule
			</span>
		</motion.div>
	);
};

export default Logo;
