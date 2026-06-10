import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import LjubljanaClock from "@/components/LjubljanaClock";

export default function SiteShell({ children }) {
  return (
    <>
      <header className="site-head">
        <div className="head-inner">
          <Link className="brand" href="/#about">
            Jan Košutnik
          </Link>
          <HeaderNav />
        </div>
      </header>
      <main className="wrap">{children}</main>
      <LjubljanaClock />
    </>
  );
}
