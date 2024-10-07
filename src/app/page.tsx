import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";


export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-700/5">
      
          <Header />
      <div className="">
          <Hero />
      </div>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <Products/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
      </main>
  </div>
  );
}
