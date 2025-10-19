declare module "@emailjs/browser" {
	export interface EmailJSResponseStatus {
		status: number;
		text: string;
	}

	const emailjs: {
		init(publicKey: string): void;
		send(
			serviceId: string,
			templateId: string,
			templateParams: Record<string, unknown>,
			publicKey: string
		): Promise<EmailJSResponseStatus>;
		sendForm(
			serviceId: string,
			templateId: string,
			form: HTMLFormElement,
			publicKey: string
		): Promise<EmailJSResponseStatus>;
	};

	export default emailjs;
}
