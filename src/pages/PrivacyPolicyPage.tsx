import PageBackground from '../components/Common/PageBackground';
import PageTitle from '../components/Common/PageTitle';

const PrivacyPolicyPage = () => {
  return (
    <PageBackground>
      <PageTitle 
        title="Privacy Policy" 
        subtitle="Last updated: March 2024"
      />
      
      <div className="dark-glass rounded-xl p-8 max-w-4xl mx-auto prose prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account</li>
            <li>Upload videos for captioning</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletter</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Process your video captioning requests</li>
            <li>Send you technical notices and updates</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>
      </div>
    </PageBackground>
  );
};

export default PrivacyPolicyPage;