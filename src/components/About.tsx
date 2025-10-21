import { motion } from "framer-motion";

const skills = [
	"Git/GitHub",
	"HTML/CSS",
	"Vibe Coding",
	"AWS S3",
	"Ansible",
	"AWS EC2",
	"Linux",
	"Load Balancer",
	"AWS VPC",
	"CI/CD Pipeline",
	"AWS CodeBuild",
	"AWS CodeDeploy",
	"CloudFormation",
	"AWS IAM",
	"JavaScript",
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
						<div className="grid grid-cols-2 gap-3">
							{skills.map((skill, index) => (
								<motion.div
									key={skill}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-center">
									<span className="text-gray-700 dark:text-gray-300 font-medium">
										{skill}
									</span>
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
