import About from "../layout/Home/About/About";
import Contact from "../layout/Home/Contact/Contact";
import Header from "../layout/Home/Header/Header";
import Portfolio from "../layout/Home/Portfolio/Portfolio";
import Skill from "../layout/Home/Skill/Skill";
import Head from "next/head";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Javokhir</title>
        <meta name="description" content="Javokhir Bozorboyev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
