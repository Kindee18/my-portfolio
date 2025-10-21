import { motion } from "framer-motion";

const skills = [
	{ name: "Git/GitHub", level: 85 },
	{ name: "HTML/CSS", level: 85 },
	{ name: "Vibe Coding", level: 85 },
	{ name: "AWS S3", level: 80 },
	{ name: "Ansible", level: 80 },
	{ name: "AWS EC2", level: 80 },
	{ name: "Linux", level: 80 },
	{ name: "Load Balancer", level: 75 },
	{ name: "AWS VPC", level: 75 },
	{ name: "CI/CD Pipeline", level: 70 },
	{ name: "AWS CodeBuild", level: 65 },
	{ name: "AWS CodeDeploy", level: 65 },
	{ name: "CloudFormation", level: 60 },
	{ name: "AWS IAM", level: 60 },
	{ name: "JavaScript", level: 50 },
];

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
							about designing scalable, efficient cloud solutions. I’ve gained
							hands-on experience with AWS infrastructure and DevOps practices,
							working with tools like EC2, S3, VPCs, and load balancers, and
							building automated deployment pipelines to streamline workflows.
						</p>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							My skills include Linux system administration, Ansible automation,
							and CI/CD pipeline development, along with Infrastructure as Code
							using CloudFormation. I’m also comfortable working with
							Git/GitHub, HTML, and CSS, and I’m actively expanding my knowledge
							in JavaScript and cloud security through practical projects and
							continuous learning.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-6">
						<h3 className="text-2xl font-bold text-primary">Skills</h3>
						<div className="space-y-4">
							{skills.map((skill, index) => (
								<motion.div
									key={skill.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}>
									<div className="flex justify-between mb-1">
										<span className="text-gray-700 dark:text-gray-300">
											{skill.name}
										</span>
										<span className="text-gray-600 dark:text-gray-400">
											{skill.level}%
										</span>
									</div>
									<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
										<motion.div
											className="h-full bg-primary rounded-full"
											initial={{ width: 0 }}
											whileInView={{ width: `${skill.level}%` }}
											viewport={{ once: true }}
											transition={{ duration: 1, delay: index * 0.1 }}
										/>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
