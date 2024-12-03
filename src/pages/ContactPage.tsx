import PageBackground from '../components/Common/PageBackground';
import PageTitle from '../components/Common/PageTitle';
import AuthButton from '../components/auth/AuthButton';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageBackground>
      <PageTitle 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
      />
      
      <div className="dark-glass rounded-xl p-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary mb-2">
              Name
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Your message"
                required
              />
            </div>
          </div>

          <AuthButton type="submit">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </AuthButton>
        </form>
      </div>
    </PageBackground>
  );
};

export default ContactPage;