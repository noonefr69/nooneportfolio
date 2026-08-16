import NavLinks from "./mid/nav-links";
import LogoHeader from "./top/logo-header";
import GithubSetting from "./bottom/github-setting";

export default function AsideNav() {
  return (
    <div className="fixed top-0 bottom-0 flex flex-col items-center justify-between py-6">
      <LogoHeader />
      <NavLinks />
      <GithubSetting />
    </div>
  );
}
