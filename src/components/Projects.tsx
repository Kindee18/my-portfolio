import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
	{
		title: "7 Day DevOps Challenge - Complete CI/CD Pipeline",
		description:
			"Comprehensive DevOps project series covering the entire software delivery lifecycle. Building end-to-end CI/CD pipeline including cloud web app deployment, GitHub integration, package security with CodeArtifact, continuous integration with CodeBuild, automated deployment with CodeDeploy, and Infrastructure as Code with CloudFormation. Complete modern DevOps practices implementation.",
		tech: [
			"AWS CodePipeline",
			"AWS CodeBuild",
			"AWS CodeDeploy",
			"AWS CodeArtifact",
			"AWS CloudFormation",
			"Infrastructure as Code",
			"GitHub Integration",
			"CI/CD Pipeline",
			"DevOps Automation",
		],
		image:
			"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-aws-projects",
	},
	{
		title: "Automated EC2 Website Deployment with Ansible",
		description:
			"Complete ALT School Africa second semester project: Automated deployment of a dynamic website across 2 EC2 instances using Ansible, NGINX, and Application Load Balancer. Features universal HTML file showing server IP detection, health checks, and load balancer traffic distribution. Successfully deployed with working ALB endpoint.",
		tech: [
			"Ansible",
			"AWS EC2",
			"Application Load Balancer",
			"NGINX",
			"Linux Administration",
			"HTML/CSS",
			"JavaScript",
			"AWS VPC",
		],
		image:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-ansible-project",
	},
	{
		title: "AWS Portfolio Infrastructure with Load Balancer",
		description:
			"Production-ready deployment of this portfolio using AWS EC2 instances with Application Load Balancer for high availability. Implementing Infrastructure as Code with Ansible for automated deployment, configuration management, and scaling across multiple availability zones.",
		tech: [
			"AWS EC2",
			"Application Load Balancer",
			"Ansible",
			"Infrastructure as Code",
			"Auto Scaling",
			"AWS VPC",
			"Security Groups",
			"Route 53",
		],
		image:
			"https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-aws-projects",
	},
	{
		title: "Static Website Hosting on Amazon S3",
		description:
			"Successfully hosted a static website on Amazon S3 as part of my AWS learning journey at ALT School Africa. Configured bucket policies, ACLs, and resolved 403 Forbidden errors through proper permission settings. Completed in 20 minutes with focus on security and access control.",
		tech: [
			"Amazon S3",
			"Static Website Hosting",
			"Bucket Policies",
			"ACLs",
			"AWS Management Console",
			"Ireland Region",
		],
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/Hosting-a-static-website-on-S3.git",
	},
	{
		title: "Data Visualization with Amazon QuickSight",
		description:
			"Upcoming personal project to expand into AWS analytics services. Will build interactive dashboards and visualizations using Amazon QuickSight to analyze business data, create insights, and enable data-driven decision making. Self-directed learning to strengthen data analytics skills.",
		tech: [
			"Amazon QuickSight",
			"Data Analytics",
			"Business Intelligence",
			"AWS S3",
			"Data Visualization",
			"Dashboard Design",
			"SQL Queries",
		],
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-aws-projects",
	},
	{
		title: "Cloud Security with AWS IAM",
		description:
			"Planned security-focused project to deepen cloud security expertise. Will implement comprehensive identity and access management using AWS IAM, including user policies, role-based access control, multi-factor authentication, and security best practices. Personal initiative to strengthen security skills.",
		tech: [
			"AWS IAM",
			"Identity Management",
			"Access Control",
			"Security Policies",
			"MFA Implementation",
			"Role-Based Access",
			"Cloud Security",
		],
		image:
			"https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-aws-projects",
	},
	{
		title: "Portfolio Website Development",
		description:
			"Built this responsive portfolio website using Vibe coding - an AI-powered development approach. Leveraged modern React, TypeScript, and Tailwind CSS through intelligent code generation and assistance. Features dark/light theme toggle, animated components, and responsive design. Demonstrates ability to work with AI tools for efficient development.",
		tech: [
			"Vibe Coding",
			"AI-Assisted Development",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Git/GitHub",
			"Modern Development",
		],
		image:
			"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/portfolio",
	},
	{
		title: "AWS Infrastructure Learning Journey",
		description:
			"Hands-on learning experience with core AWS services at ALT School Africa. Built practical skills with EC2 instance management, VPC networking, IAM security policies, and load balancer configuration. Focus on real-world infrastructure deployment scenarios.",
		tech: [
			"AWS EC2",
			"AWS VPC",
			"AWS IAM",
			"Load Balancer",
			"AWS S3",
			"Linux Administration",
		],
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/my-aws-projects",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="section-padding bg-gray-50 dark:bg-dark-secondary">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
					Featured Projects
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Tilt
							key={project.title}
							tiltMaxAngleX={8}
							tiltMaxAngleY={8}
							perspective={1000}
							scale={1.02}
							transitionSpeed={1500}
							className="h-full">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="bg-white dark:bg-dark-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image}
										alt={`Screenshot of ${project.title}`}
										className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
										{project.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-gray-100 dark:bg-dark-secondary text-sm rounded-full text-gray-700 dark:text-gray-300">
												{tech}
											</span>
										))}
									</div>
									<motion.a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors"
										whileHover={{ x: 5 }}
										whileTap={{ scale: 0.95 }}>
										View Project
										<svg
											className="w-4 h-4 ml-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</motion.a>
								</div>
							</motion.div>
						</Tilt>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
