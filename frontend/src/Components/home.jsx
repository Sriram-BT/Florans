import Header from "./header";
import Footer from "./footer";
import FounderSection from "./founder";
import LatestUpdates from "./LatestUpdate";
import ProgramsSection from "./programs";
// import ProjectsDone from "./projectsDone";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <FounderSection />
      <LatestUpdates />
      <ProgramsSection />
      {/* <ProjectsDone /> */}
      <Footer />
    </div>
  );
}
