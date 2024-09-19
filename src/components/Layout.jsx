import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Hero from "./Hero";
import useMedia from '../hooks/useMedia';

export default function Layout() {
  const mobile = useMedia('(max-width: 40rem)');

  return (
    <div className="layout">
     { !mobile &&  <LeftSideBar /> }

      <Hero />
      { !mobile && <RightSideBar />}
    </div>
  );
}
