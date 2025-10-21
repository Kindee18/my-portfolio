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
		link: "https://github.com/Kindee18/my-portfolio.git",
	},
	{
		title: "Interactive Calculator Application",
		description:
			"A fully functional calculator web application built with modern web technologies. Features a clean, intuitive interface with support for basic arithmetic operations, decimal calculations, and keyboard input. Demonstrates proficiency in JavaScript logic, DOM manipulation, and responsive design principles.",
		tech: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"DOM Manipulation",
			"Responsive Design",
			"Event Handling",
			"Git/GitHub",
		],
		image:
			"https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/Calculator-App.git",
	},
	{
		title: "Create S3 Buckets with Terraform",
		description:
			"Infrastructure as Code project implementing AWS S3 bucket creation and management using Terraform. Features automated provisioning of S3 buckets with proper configuration, versioning, and security policies. Demonstrates proficiency in Terraform scripting, AWS resource management, and DevOps best practices for cloud infrastructure automation.",
		tech: [
			"Terraform",
			"AWS S3",
			"Infrastructure as Code",
			"AWS CLI",
			"DevOps",
			"Cloud Infrastructure",
			"Automation",
			"Git/GitHub",
		],
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/create-s3-buckets-terraform",
	},
	{
		title: "Deploy an App with Docker",
		description:
			"Containerization project demonstrating application deployment using Docker technology. Features complete containerization workflow including Dockerfile creation, image building, container management, and deployment strategies. Showcases modern DevOps practices with container orchestration, portability, and scalable application deployment across different environments.",
		tech: [
			"Docker",
			"Containerization",
			"Dockerfile",
			"Container Management",
			"DevOps",
			"Application Deployment",
			"Linux",
			"Git/GitHub",
		],
		image:
			"https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/deploy-app-docker",
	},
	{
		title: "Complete Kubernetes Learning Journey",
		description:
			"Comprehensive 4-part Kubernetes mastery project covering the entire container orchestration ecosystem. From launching Kubernetes clusters and setting up deployments to creating manifests and deploying backend applications. Demonstrates advanced DevOps skills in container orchestration, cluster management, service discovery, and production-ready Kubernetes deployments.",
		tech: [
			"Kubernetes",
			"Container Orchestration",
			"Cluster Management",
			"Kubernetes Manifests",
			"Service Discovery",
			"Pod Management",
			"DevOps",
			"YAML Configuration",
			"kubectl",
			"Linux",
		],
		image:
			"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		link: "https://github.com/Kindee18/kubernetes-learning-journey",
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
