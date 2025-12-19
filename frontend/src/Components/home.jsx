import Footer from "./footer";
import FounderSection from "./founder";
import Header from "./header";
import LatestUpdates from "./LatestUpdate";
import ProgramsSection from "./programs";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <FounderSection />
      <LatestUpdates />
      <ProgramsSection />
      <Footer/>
    </div>
  );
}

