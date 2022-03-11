import Head from "next/head";
import About from "../layout/Home/About/About";
import Contact from "../layout/Home/Contact/Contact";
import Header from "../layout/Home/Header/Header";
import Portfolio from "../layout/Home/Portfolio/Portfolio";
import Skill from "../layout/Home/Skill/Skill";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
