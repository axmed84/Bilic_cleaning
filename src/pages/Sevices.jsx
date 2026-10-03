import React from 'react'
import { Link } from 'react-router-dom'

import {
  Home,
  Building2,
  Sparkles,
  HardHat,
  Glasses,
  Layers,
  Armchair,
  Bath,
  ClipboardList,
  Settings,
  ArrowRight
} from 'lucide-react'

import Navbar from '../components/navbar'
import CTA from '../components/CTA'
import Footer from '../components/footer'
import AdditionalServices from '../components/AdditionalServices'

import header from '../assets/header_2.png'

import residential from '../assets/living_room.jpg'
import commercial from '../assets/commercial.jpg'
import malls from '../assets/mall.jpg'
import healthcare from '../assets/hospital.jpg'
import specialized from '../assets/cleaning.png'

import services from '../Data/Service'


const icons = {
  residential: Home,
  commercial: Building2,
  deep: Sparkles,
  postConstruction: HardHat,
  windows: Glasses,
  floors: Layers,
  carpet: Armchair,
  restroom: Bath,
  janitorial: ClipboardList,
  customized: Settings
}


const images = {
  residential: residential,
  commercial: commercial,
  deep: specialized,
  postConstruction: specialized,
  windows: malls,
  floors: commercial,
  carpet: residential,
  restroom: healthcare,
  janitorial: commercial,
  customized: specialized
}


const Services = () => {

  return (

    <div>

      <Navbar />


      {/* ================= PAGE HEADER ================= */}

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${header})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>

            <p className="text-blue-100 mt-3">
              Home <span className="mx-2">›</span> Our Services
            </p>

          </div>

        </div>

      </section>



      {/* ================= SERVICES ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          {/* ================= HEADING ================= */}

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Tailored Cleaning Solutions for Every Need
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              At Bilic Cleaning Company, we provide professional
              cleaning and facility services designed to keep your
              spaces clean, safe and welcoming.
            </p>

          </div>



          {/* ================= SERVICE CARDS ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

            {Object.entries(services).map(([id, service]) => {

              const Icon = icons[id]

              return (

                <div
                  key={id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >

                  {/* Image */}

                  <img
                    src={images[id]}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />


                  <div className="p-6">

                    {/* Icon */}

                    <div className="w-12 h-12 mx-auto -mt-12 relative bg-blue-600 text-white rounded-full flex items-center justify-center border-4 border-white">

                      <Icon size={22} />

                    </div>


                    {/* Title */}

                    <h3 className="text-xl font-bold text-blue-950 mt-5 text-center">
                      {service.title}
                    </h3>


                    {/* Description */}

                    <p className="text-sm text-slate-600 mt-3 leading-6 text-center">

                      {service.description ||
                        'Professional cleaning service tailored to your specific needs.'}

                    </p>


                    {/* Learn More */}

                    <div className="text-center mt-5">

                      <Link
                        to={`/services/${id}`}
                        className="inline-flex items-center gap-1 text-blue-700 font-semibold text-sm hover:text-blue-900 transition"
                      >

                        Learn More

                        <ArrowRight size={15} />

                      </Link>

                    </div>

                  </div>

                </div>

              )

            })}

          </div>

        </div>

      </section>



      {/* ================= ADDITIONAL SERVICES ================= */}

      <AdditionalServices />


      {/* ================= CTA ================= */}

      <CTA />


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>

  )

}


export default Services