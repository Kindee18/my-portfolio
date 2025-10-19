import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const staggerContainer: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export const slideInFromLeft: Variants = {
	initial: { x: -100, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const slideInFromRight: Variants = {
	initial: { x: 100, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const scaleIn: Variants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const fadeIn: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const containerVariants: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
