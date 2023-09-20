import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1265px] m-auto flex">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <div className="flex-1 max-w-[600px] border-x border-[#2e3336]">
          <Outlet />
        </div>
      </main>
      <RightBar />
    </div>
  );
}
