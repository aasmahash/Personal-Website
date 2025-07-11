'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Image from 'next/image' 
import Work from "./components/Work";
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <About/>
   <Work/>
   <Contact/>
   <Footer/>

   
   </>
  );
}
