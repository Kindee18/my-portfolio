/**
 * File: src/components/ScrollReveal.tsx
 * Description: Utility components to animate children when they enter the viewport.
 * Author: Kindee18
 * Date: 2025-10-28
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	width?: "fit-content" | "100%";
}

/**
 * ScrollReveal
 * Animates children into view with a vertical reveal.
 * @param {ScrollRevealProps} props
 * @returns JSX.Element
 */
export const ScrollReveal = ({
	children,
	width = "fit-content",
}: ScrollRevealProps) => {
	return (
		<div className={`overflow-hidden ${width === "100%" ? "w-full" : "w-fit"}`}>
			<motion.div
				initial={{ y: 75, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true, margin: "-20px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}>
				{children}
			</motion.div>
		</div>
	);
};

export const FadeIn = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "-20px" }}
			transition={{ duration: 0.7 }}>
			{children}
		</motion.div>
	);
};

export const SlideIn = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ x: -50, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-20px" }}
			transition={{ duration: 0.5 }}>
			{children}
		</motion.div>
	);
};

export const ScaleIn = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true, margin: "-20px" }}
			transition={{ duration: 0.5 }}>
			{children}
		</motion.div>
	);
};
