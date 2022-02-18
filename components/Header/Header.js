import AuthLinks from "../UI/AuthLinks";
import SiteLogo from "../UI/SiteLogo";
import SiteNavLinks from "../UI/SiteNavLinks";

function Header() {
  return (
    <header className="w-full bg-slate-800 ">
      <nav className="container md:px-4 py-3 sm:flex sm:gap-5 sm:items-center text-white  min-w-[360px]">
        <SiteLogo />
        <div className="flex flex-1">
          <SiteNavLinks />
          <AuthLinks />
        </div>
      </nav>
    </header>
  );
}

export default Header;
