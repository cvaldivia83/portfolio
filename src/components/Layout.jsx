import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Hero from "./Hero";

export default function Layout() {
  return (
    <div className="layout">
      <LeftSideBar />

      <Hero />
      <RightSideBar />
    </div>
  );
}
