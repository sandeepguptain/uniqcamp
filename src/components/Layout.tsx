import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main" aria-label="UniqCamp student dispersal platform content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
