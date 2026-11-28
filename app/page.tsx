import Header from "./component/Header";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import ProblemOpportunitySection from "./component/ProblemOpportunitySection";
import WhyChooseUsSection from "./component/WhyChooseUsSection";
import HowItWorksSection from "./component/HowItWorksSection";
import PrivacySecuritySection from "./component/PrivacySecuritySection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main>
        <HeroSection />
        <ProblemOpportunitySection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <PrivacySecuritySection />
      </main>
      <Footer />
    </div>
  );
}
