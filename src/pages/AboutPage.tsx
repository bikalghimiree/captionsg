import PageBackground from '../components/Common/PageBackground';
import PageTitle from '../components/Common/PageTitle';
import { Users, Video, Globe, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageBackground>
      <PageTitle 
        title="About CaptionsG" 
        subtitle="Making video captioning accessible to everyone"
      />
      
      <div className="dark-glass rounded-xl p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark-text-primary">Our Mission</h2>
            <p className="text-dark-text-secondary">
              At CaptionsG, we believe in making content accessible to everyone. Our mission is to provide high-quality, accurate video captions that break down language barriers and improve content accessibility worldwide.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark-text-primary">Our Vision</h2>
            <p className="text-dark-text-secondary">
              We envision a world where every video is accessible to all viewers, regardless of language or hearing ability. Through innovative AI technology, we're making this vision a reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Users,
              stat: "18M+",
              label: "Active Users"
            },
            {
              icon: Video,
              stat: "300K+",
              label: "Videos Captioned"
            },
            {
              icon: Globe,
              stat: "50+",
              label: "Languages"
            },
            {
              icon: Star,
              stat: "99.9%",
              label: "Accuracy"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 dark-glass rounded-xl">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-dark-accent/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <item.icon className="h-6 w-6 text-dark-accent" />
              </div>
              <div className="text-2xl font-bold text-dark-text-primary mb-1">{item.stat}</div>
              <div className="text-sm text-dark-text-secondary">{item.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-dark-text-primary">Our Technology</h2>
          <p className="text-dark-text-secondary mb-4">
            CaptionsG uses state-of-the-art AI technology to provide accurate, real-time video captioning. Our system is constantly learning and improving, ensuring the highest quality captions for your content.
          </p>
          <p className="text-dark-text-secondary">
            We support multiple languages and formats, making it easy to reach a global audience with your content. Our platform is designed to be user-friendly while delivering professional-grade results.
          </p>
        </div>
      </div>
    </PageBackground>
  );
};

export default AboutPage;