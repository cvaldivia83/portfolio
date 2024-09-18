import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Main from "./Main";

export default function Layout() {
  return (
    <div className="layout">
      <LeftSideBar />

      <Main />
      <RightSideBar />
    </div>
  );
}
