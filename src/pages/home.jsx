import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Why_bilic from '../components/Why_bilic'
import Processcm from '../components/Processcm'
import CTA from '../components/CTA'


function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Service />
      <Why_bilic />
      <Processcm />
      <CTA />

      <Footer />
    </div>
  )
}

export default Home