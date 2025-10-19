import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("LWucEtrdGpr9jG6mw");

interface EmailData {
	from_name: string;
	from_email: string;
	message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
	try {
		await emailjs.send(
			"service_k9m7j4h", // Service ID
			"template_portfolio", // Template ID
			{
				from_name: data.from_name,
				from_email: data.from_email,
				message: data.message,
				to_email: "kindsonegbule15@gmail.com",
			},
			"LWucEtrdGpr9jG6mw" // Public Key
		);
	} catch (error) {
		console.error("Email send error:", error);
		throw error;
	}
};
