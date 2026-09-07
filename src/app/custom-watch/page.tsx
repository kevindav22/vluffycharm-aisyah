import DesignBuilder from "@/components/design/DesignBuilder";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";

const CustomWatchPage = () => {
  return (
    <section className="bg-white">
      <DesignBuilder mode="watch" />
      <StepSection category="customWatch" />
      <CTASection />
    </section>
  );
};

export default CustomWatchPage;
