import GardenIcons from "@/components/GardenIcons";
import LjubljanaClock from "@/components/LjubljanaClock";

export default function Home() {
  return (
    <>
      <GardenIcons />
      <div className="g-page">

        <header className="g-masthead" id="top">
          <a className="g-wordmark" href="#top">Jan Košutnik</a>
          <nav aria-label="Sections">
            <a href="#tending">Tending</a>
            <a href="#seedlings">Seedlings</a>
            <a href="#growing">Growing</a>
            <a href="#evergreen">Evergreen</a>
            <a href="#inputs">Inputs</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main></main>

        <footer className="g-colophon">
          <span>© 2026 Jan Košutnik</span>
          <span className="g-t">Ljubljana · <LjubljanaClock /></span>
        </footer>

      </div>
    </>
  );
}
