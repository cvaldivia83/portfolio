import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Hero from "./Hero";
import About from './About';
import useMedia from '../hooks/useMedia';
import WorkExperience from "./WorkExperience";
import Project from './Project';
import Contact from "./Contact";

export default function Layout() {
  const mobile = useMedia('(max-width: 40rem)');

  return (
    <div className="min-h-screen">
     { !mobile &&  <LeftSideBar /> }

     <div className="content">
      <Hero />
      <About />
      <WorkExperience />
      <Project />
      <Contact />
     </div>
      { !mobile && <RightSideBar />}
    </div>
  );
}
