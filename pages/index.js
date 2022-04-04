import styles from '../styles/Home.module.css';
import Navbar from '../Components/navbar';
import Hero from '../Components/hero';
import About from '../Components/about';
import Projects from '../Components/projects';
import Education from '../Components/education';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
    </div>
  )
}
