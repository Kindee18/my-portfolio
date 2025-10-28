/**
 * File: src/utils/scroll.ts
 * Description: Small scroll helpers used to scroll to elements in the page.
 * Author: Kindee18
 * Date: 2025-10-28
 */

/**
 * Smoothly scrolls to a section by id taking header offset into account.
 * @param {string} sectionId - id of the target element
 */
export const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		const offset = 80; // Height of your fixed header
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
};
