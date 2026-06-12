import HeaderNav from "@/components/HeaderNav";
import LjubljanaClock from "@/components/LjubljanaClock";

export default function SiteShell({ children }) {
  return (
    <>
      <header className="site-head">
        <div className="head-inner">
          <a className="brand" href="/#about">
            Jan Košutnik
          </a>
          <HeaderNav />
        </div>
      </header>
      <main className="wrap">{children}</main>
      <LjubljanaClock />
    </>
  );
}
