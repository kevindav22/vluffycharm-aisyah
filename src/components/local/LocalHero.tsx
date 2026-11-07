import LocalIntro from "@/components/local/LocalIntro";
import LocalInfo from "@/components/local/LocalInfo";

const LocalHero = () => (
  <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
    <LocalIntro />
    <LocalInfo />
  </div>
);

export default LocalHero;
