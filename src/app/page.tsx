import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Products from "@/components/Products";


export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-700/5">
      <Header />
      <Hero />
      <main className="container mx-auto px-2 py-10">
        <div className="max-w-7xl mx-auto">
          <Info/>
          <Products/>
          <About/>
          <Contact/>
          <Info/>
          <Footer/>
        </div>
      </main>
  </div>
  );
}
