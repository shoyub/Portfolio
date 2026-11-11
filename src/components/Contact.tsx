import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      info: 'vkapoor0112@gmail.com',
      link: 'mailto:vkapoor0112@gmail.com',
      linkText: 'Write Me'
    },
    {
      icon: MessageSquare,
      title: 'Twitter',
      info: '@v4nshhh',
      link: 'https://twitter.com/v4nshhh',
      linkText: 'Write Me'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      info: 'v4nsh#3688',
      link: 'https://discord.com/',
      linkText: 'Write Me'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Contact Me</p>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Talk To Me</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="skill-card flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 bg-button-dark rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-button-dark-foreground" />
                    </div>
                    <h4 className="font-bold text-text-primary mb-1">{method.title}</h4>
                    <p className="text-text-secondary mb-3">{method.info}</p>
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-text-secondary transition-colors flex items-center gap-1"
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
            <h3 className="text-2xl font-bold text-text-primary mb-8">Write me your thoughts</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
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
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
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
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
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

              <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;