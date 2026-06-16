import Nav from "@/components/Nav";
import Clock from "@/components/Clock";

export default function SiteShell({ children }) {
  return (
    <>
      <header className="site-head">
        <div className="head-inner">
          <a className="brand" href="/#about">Jan Košutnik</a>
          <Nav />
        </div>
      </header>
      <main className="wrap">{children}</main>
      <Clock />
    </>
  );
}
