import AuthLinks from "../UI/AuthLinks";
import SiteLogo from "../UI/SiteLogo";
import SiteNavLinks from "../UI/SiteNavLinks";

function Header() {
  return (
    <header className="w-screen md:px-4 bg-slate-800 py-3 sm:flex sm:items-center text-white font-semibold min-w-[360px]">
      <SiteLogo />
      <nav className="ml-7 flex grow justify-between">
        <SiteNavLinks />
        <AuthLinks />
      </nav>
    </header>
  );
}

export default Header;
