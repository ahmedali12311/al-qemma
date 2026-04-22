import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f9f6f1_0%,#f3eee7_48%,#efe7dc_100%)] font-sans text-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-30 bg-[linear-gradient(rgba(24,36,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(24,36,45,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_85%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-24 top-24 -z-20 h-64 w-64 rounded-full bg-[#bf6a33]/15 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-20 top-96 -z-20 h-60 w-60 rounded-full bg-[#102933]/15 blur-3xl"
      ></div>
      <div className="relative z-10">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
