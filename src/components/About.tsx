/**
 * File: src/components/About.tsx
 * Description: About section with grouped skills and show-more toggle.
 * Author: Kindee18
 * Date: 2025-10-28
 */
import { motion } from "framer-motion";
import { useState } from "react";

const groupedSkills: Record<string, string[]> = {
	"Cloud & Infrastructure": [
		"AWS EC2",
		"AWS S3",
		"AWS VPC",
		"Load Balancer",
		"AWS IAM",
	],
	"DevOps & Automation": [
		"Terraform",
		"Ansible",
		"CI/CD Pipeline",
		"AWS CodeBuild",
		"AWS CodeDeploy",
		"CloudFormation",
		"Bash Scripting",
	],
	"Containers & Orchestration": [
		"Docker",
		"Kubernetes",
		"Container Orchestration",
	],
	"Tools & Languages": ["Git/GitHub", "HTML/CSS", "Linux", "Vibe Coding"],
};

// Skills to highlight up-front (keeps list short for first view)
const primarySkills = [
	"Terraform",
	"Docker",
	"Kubernetes",
	"AWS EC2",
	"Ansible",
	"Git/GitHub",
];

const SkillsGrouped = () => {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h4 className="text-lg font-semibold">All skills</h4>
				<button
					onClick={() => setShowAll((s) => !s)}
					className="text-sm text-primary hover:underline">
					{showAll ? "Show less" : "Show all"}
				</button>
			</div>

			{showAll ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{Object.entries(groupedSkills).map(([group, items]) => (
						<div key={group} className="space-y-2">
							<div className="text-sm font-medium text-gray-700 dark:text-gray-300">
								{group}
							</div>
							<div className="flex flex-wrap gap-2">
								{items.map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Showing top skills — expand to view all.
				</p>
			)}
		</div>
	);
};
/**
 * About component
 * Shows a short bio and grouped skills with an expandable view.
 * @returns JSX.Element
 */

const About = () => {
	return (
		<section id="about" className="section-padding">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-primary">
							About Me
						</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							I'm a Cloud Engineering student at ALT School Africa, passionate
							about designing scalable, efficient cloud solutions. I've gained
							hands-on experience with AWS infrastructure and modern DevOps
							practices, working with containerization technologies like Docker
							and Kubernetes, and building automated deployment pipelines to
							streamline workflows.
						</p>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							My expertise spans Infrastructure as Code with Terraform and
							CloudFormation, container orchestration with Kubernetes, Linux
							system administration, and CI/CD pipeline development. I'm
							proficient in AWS services including EC2, S3, VPC, and IAM, and
							skilled in AI-assisted development using Vibe Coding for efficient
							project creation and modern web development.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-6">
						<h3 className="text-2xl font-bold text-primary">Skills</h3>
						{/* Primary highlights */}
						<div className="flex flex-wrap gap-3">
							{primarySkills.map((skill) => (
								<motion.div
									key={skill}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary">
									{skill}
								</motion.div>
							))}
						</div>

						{/* Show more toggle and grouped skills */}
						<SkillsGrouped />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
