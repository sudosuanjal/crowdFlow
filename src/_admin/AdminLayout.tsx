import AdBottomBar from "@/components/shared/AdBottomBar";
import AdLeftbar from "@/components/shared/AdLeftbar";
import AdTopBar from "@/components/shared/AdTopBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-full md:flex">
      <AdTopBar />
      <AdLeftbar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <AdBottomBar />
    </div>
  );
};

export default AdminLayout;
