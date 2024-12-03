import PageBackground from '../components/Common/PageBackground';
import PageTitle from '../components/Common/PageTitle';

const TermsPage = () => {
  return (
    <PageBackground>
      <PageTitle 
        title="Terms & Conditions" 
        subtitle="Last updated: March 2024"
      />
      
      <div className="dark-glass rounded-xl p-8 max-w-4xl mx-auto prose prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using GCaptions, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on GCaptions for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on GCaptions are provided on an 'as is' basis. GCaptions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>
      </div>
    </PageBackground>
  );
};

export default TermsPage;