import { 
    Instagram, 
    Linkedin, 
    Mail, 
    MapPin, 
    Phone, 
    Send, 
    Twitch, 
    Twitter 
} from "lucide-react"
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting,  setIsSubmitting] = useState(false);

    // Initialize EmailJS when component mounts
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // EmailJS configuration from environment variables
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const notificationTemplateID = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID;
            const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            const formData = new FormData(e.target);
            const currentTime = new Date().toLocaleString('zh-TW', {
                timeZone: 'Asia/Taipei',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });

            // Check if all required config exists
            if (!serviceID || !notificationTemplateID || !autoReplyTemplateID || !publicKey) {
                const missingKeys = [];
                if (!serviceID) missingKeys.push('VITE_EMAILJS_SERVICE_ID');
                if (!notificationTemplateID) missingKeys.push('VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID');
                if (!autoReplyTemplateID) missingKeys.push('VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID');
                if (!publicKey) missingKeys.push('VITE_EMAILJS_PUBLIC_KEY');
                
                throw new Error(`Missing environment variables: ${missingKeys.join(', ')}. Please configure them in your deployment settings.`);
            }

            // Template params for notification email (to you)
            const notificationParams = {
                name: formData.get('name'),
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                email: formData.get('email'),
                message: formData.get('message'),
                to_email: 'markson0304@gmail.com',
                submission_time: currentTime,
                time: currentTime
            };

            // Template params for auto-reply email (to sender)
            const autoReplyParams = {
                name: formData.get('name'),
                from_name: formData.get('name'),
                from_email: 'markson0304@gmail.com', // Your email as sender
                email: 'markson0304@gmail.com',
                message: formData.get('message'),
                to_email: formData.get('email'), // Send to the person who filled the form
                to_name: formData.get('name'),
                submission_time: currentTime,
                time: currentTime
            };

            // Send notification email to you first
            await emailjs.send(serviceID, notificationTemplateID, notificationParams);
            
            // Send auto-reply email to the sender
            await emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams);
            
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            })
            
            // Reset form
            e.target.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            
            toast({
                title: "Failed to send message",
                description: `${error.message || error.text || 'Unknown error occurred'}. Please try again.`,
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl">

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="markson0304@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        markson0304@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="(886)918-010-790" className="text-muted-foreground hover:text-primary transition-colors">
                                        (886)918-010-790
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a href="Taipei" className="text-muted-foreground hover:text-primary transition-colors">
                                        Taipei, Taiwan
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch />
                                </a>
                            </div>       
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Markson Chen..."
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Markson0304@gmail.com"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled = {isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"

                                )}
                            > 
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size= {16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>            
        </section>
    )
}