import AuthSection from "./AuthSection";
import SiteLogo from "./UI/SiteLogo";
import SiteNavLinks from "./UI/SiteNavLinks";

function Header() {
  return (
    <header className="w-full bg-slate-800">
      <nav className="container px-1 sm:px-0 py-3 sm:flex sm:gap-5 sm:items-center text-white min-w-[360px]">
        <SiteLogo />
        <div className="flex flex-1">
          <SiteNavLinks />
          <AuthSection />
        </div>
      </nav>
    </header>
  );
}

export default Header;
