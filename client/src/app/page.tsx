import FAQ from "@/components/landing/FAQ";
import FeatureStack from "@/components/landing/FeatureStack";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Methodology from "@/components/landing/Methodology";
import Navbar from "@/components/landing/Navbar";
import Stats from "@/components/landing/Stats";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
        {/* --- PAGE-SPECIFIC CUSTOM SCROLLBAR --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Webkit Browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #020D0A; /* Matching your brandBg */
        }

        ::-webkit-scrollbar-thumb {
          background: #D4FF3F; /* Your brandNeon color */
          border-radius: 20px;
          border: 3px solid #020D0A; /* Creates a padding effect */
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e1ff80; /* Slightly lighter neon on hover */
        }

        /* Firefox Support */
        * {
          scrollbar-width: thin;
          scrollbar-color: #D4FF3F #020D0A;
        }
      `}} />
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureStack />
      <Stats />
      <Methodology />
      <FAQ />
      <Footer />
    </main>
  );
}