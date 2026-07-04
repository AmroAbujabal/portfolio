import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { hero, siteUrl, socialLinks } from "@/data/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: hero.name,
  url: siteUrl,
  jobTitle: "Computer Science Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of British Columbia",
  },
  sameAs: socialLinks
    .map((l) => l.href)
    .filter((href) => !href.startsWith("mailto:")),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
