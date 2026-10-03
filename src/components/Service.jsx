import React from 'react'
import { Link } from 'react-router-dom'

import {
  Home,
  Building2,
  Building,
  Hospital,
  Sparkles,
  ArrowRight
} from 'lucide-react'

import residential from '../assets/living_room.jpg'
import commercial from '../assets/commercial.jpg'
import malls from '../assets/mall.jpg'
import healthcare from '../assets/hospital.jpg'
import specialized from '../assets/cleaning.png'


const services = [

  {
    title: 'Residential Cleaning',
    description:
      'Professional cleaning services for homes, apartments and residential properties.',
    image: residential,
    icon: Home,
    link: '/services/residential'
  },

  {
    title: 'Commercial Cleaning',
    description:
      'Reliable cleaning solutions for offices, businesses and commercial buildings.',
    image: commercial,
    icon: Building2,
    link: '/services/commercial'
  },

  {
    title: 'Malls & Public Facilities',
    description:
      'Complete cleaning services for malls, public spaces and high-traffic facilities.',
    image: malls,
    icon: Building,
    link: '/services/malls'
  },

  {
    title: 'Healthcare & Institutions',
    description:
      'Professional cleaning for hospitals, clinics and institutional facilities.',
    image: healthcare,
    icon: Hospital,
    link: '/services/healthcare'
  },

  {
    title: 'Specialized Cleaning',
    description:
      'Specialized cleaning solutions for unique environments and demanding requirements.',
    image: specialized,
    icon: Sparkles,
    link: '/services/specialized'
  }

]


const Service = () => {

  return (

    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* ================= SECTION HEADING ================= */}

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-blue-700 font-bold text-4xl uppercase tracking-wide">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Professional Cleaning Solutions
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            We provide reliable and professional cleaning services
            designed to keep your home, office and facilities clean,
            safe and comfortable.
          </p>

        </div>


        {/* ================= SERVICES CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">

          {services.map((service) => {

            const Icon = service.icon

            return (

              <div
                key={service.title}
                className="
                  bg-white
                  rounded-xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition
                  duration-300
                "
              >

                {/* Image */}

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />


                {/* Content */}

                <div className="p-6">


                  {/* Icon */}

                  <div
                    className="
                      w-12
                      h-12
                      bg-blue-100
                      text-blue-700
                      rounded-lg
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon size={24} />

                  </div>


                  {/* Title */}

                  <h3 className="text-xl font-bold text-slate-900 mt-5">
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p className="text-slate-600 mt-3 leading-6">
                    {service.description}
                  </p>


                  {/* Learn More */}

                  <Link
                    to={service.link}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-5
                      text-blue-700
                      font-semibold
                      hover:text-blue-900
                      transition
                    "
                  >

                    Learn More

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            )

          })}

        </div>


        {/* ================= VIEW ALL SERVICES ================= */}

        <div className="text-center mt-10">

          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-700
              text-white
              px-6
              py-3
              rounded-md
              font-semibold
              hover:bg-blue-800
              transition
            "
          >

            View All Services

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>

  )

}


export default Service