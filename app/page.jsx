import GardenIcons from "@/components/GardenIcons";
import LjubljanaClock from "@/components/LjubljanaClock";

export default function Home() {
  return (
    <>
      <GardenIcons />
      <div className="g-page">

        <header className="g-masthead" id="top">
          <a className="g-wordmark" href="#top">Jan Ko&#353;utnik</a>
          <nav aria-label="Sections">
            <a href="#tending">Tending</a>
            <a href="#seedlings">Seedlings</a>
            <a href="#growing">Growing</a>
            <a href="#evergreen">Evergreen</a>
            <a href="#inputs">Inputs</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <footer className="g-colophon">
          <span>&copy; 2026 Jan Ko&#353;utnik</span>
          <span className="g-t">Ljubljana &middot; <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  );
}
