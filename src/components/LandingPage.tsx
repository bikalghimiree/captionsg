import { Link } from 'react-router-dom';
import { Sparkles, Zap, Users, Clock, Lock, Star, Globe, FileText, Brain, Video } from 'lucide-react';
import FAQSection from './FAQSection';
import StatsCarousel from './StatsCarousel';

const LandingPage = () => {
  return (
    <div className="pattern-bg pt-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-dark-accent/20 to-purple-600/20 border border-dark-accent/20 text-dark-accent rounded-full hover-glow">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">World's First Free Caption Generator AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text-primary mb-6 tracking-tight">
              Professional Video Captions
              <span className="gradient-text block mt-2">
                100% Free. Forever.
              </span>
            </h1>
            
            <p className="text-xl text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              No sign-up. No credit card. No watermark.
            </p>

            <Link
              to="/editor"
              className="cta-button inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-dark-accent to-purple-600 rounded-lg shadow-lg shadow-dark-accent/20 hover:shadow-xl hover:shadow-dark-accent/30 transition-all duration-300"
            >
              Start Captioning Now
              <Zap className="ml-2 h-5 w-5" />
            </Link>

            {/* Stats Section */}
            <div className="mt-12">
              <StatsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-text-primary mb-3">
          Everything You Need for Perfect Captions
        </h2>
        <p className="text-base md:text-lg text-dark-text-secondary text-center mb-8 max-w-2xl mx-auto">
          Professional-grade features designed for content creators of all sizes
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "50+ Languages",
              description: "Automatic language detection and translation support"
            },
            {
              icon: Brain,
              title: "AI-Powered",
              description: "State-of-the-art AI for precise timing and transcription"
            },
            {
              icon: FileText,
              title: "Multiple Formats",
              description: "Export to SRT, VTT, SCC, or plain text with one click"
            },
            {
              icon: Star,
              title: "Live Preview",
              description: "See your captions in real-time as you edit"
            },
            {
              icon: Video,
              title: "No Watermark",
              description: "Clean, professional videos without any watermarks"
            },
            {
              icon: Lock,
              title: "Secure & Private",
              description: "Your content is automatically deleted after processing"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card p-6 dark-glass rounded-xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-dark-accent/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-dark-accent feature-icon transition-all duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-text-primary mb-8">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom pb-8">
        <div className="dark-glass bg-gradient-to-r from-dark-accent/10 to-purple-600/10 rounded-2xl p-12 text-center border border-dark-accent/20 hover-glow">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-text-primary mb-4">
            Join 18M+ Users Creating Perfect Captions
          </h2>
          <p className="text-dark-text-secondary mb-8 max-w-xl mx-auto text-lg">
            No sign-up. No credit card. No watermark.
          </p>
          <Link
            to="/signup"
            className="cta-button inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-dark-accent to-purple-600 rounded-lg"
          >
            Start For Free
            <Zap className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;