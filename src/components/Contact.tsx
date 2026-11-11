import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/emailjs"; // ✅ use the helper we created

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await sendEmail(formData); // ✅ use EmailJS

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "shoyub.khan01@gmail.com",
      link: "mailto:shoyub.khan01@gmail.com",
      linkText: "Write Me",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      info: "Shoyub Khan",
      link: "http://www.linkedin.com/in/shoyub-khan",
      linkText: "Connect",
    },
    {
      icon: MessageSquare,
      title: "Phone",
      info: "+91 7330734080",
      link: "tel:+917330734080",
      linkText: "Call Me",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Contact Me</p>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "hsl(var(--text-primary))" }}
            >
              Talk To Me
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="skill-card flex flex-col items-center text-center p-6"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "hsl(var(--button-dark))" }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: "hsl(var(--button-dark-foreground))" }}
                      />
                    </div>
                    <h4
                      className="font-bold mb-1"
                      style={{ color: "hsl(var(--text-primary))" }}
                    >
                      {method.title}
                    </h4>
                    <p
                      className="mb-3"
                      style={{ color: "hsl(var(--text-secondary))" }}
                    >
                      {method.info}
                    </p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 transition-colors"
                      style={{ color: "hsl(var(--text-primary))" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--text-secondary))")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--text-primary))")
                      }
                    >
                      {method.linkText}
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "hsl(var(--text-primary))" }}
            >
              Write me your thoughts
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-2"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-2"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  Mail
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium mb-2"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px]"
                  placeholder="Your message"
                  required
                />
              </div>

              <Button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-spin">⌛</span>
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
