import DesignBuilder from "@/components/design/DesignBuilder";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";

const CustomCharmPage = () => {
  return (
    <section className="bg-white">
      <DesignBuilder mode="charm" />
      <StepSection category="customCharm" />
      <CTASection />
    </section>
  );
};

export default CustomCharmPage;
