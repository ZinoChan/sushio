import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faHeart,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import React from "react"
import FormInput from "./ui/FormInput"

const Footer = () => {
  return (
    <section className="py-32" id="contact">
      <div className="max-w-screen-2xl mx-auto px-4 2xl:px-0">
        <div className="flex space-x-6 items-center justify-center mb-20">
          <span className="slide-left h-2 md:w-16 w-10 rounded bg-primary"></span>
          <h2 className="slide-up lg:text-6xl text-center md:text-5xl text-2xl text-primary capitalize font-bold font-main">
            Join Our News Letter
          </h2>
          <span className="slide-right h-2 md:w-16 w-10 rounded bg-primary"></span>
        </div>
        <form className="flex sm:space-x-6 sm:space-y-0 space-y-6 flex-wrap md:justify-center mb-20">
          <FormInput
            className="sm:w-96 w-75"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="slide-right rounded text-white font-bold text-xl px-6 py-2 bg-primary font-custom">
            Submit
          </button>
        </form>
        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-6">
            <div className="flex space-x-4">
              <FontAwesomeIcon
                className="text-2xl text-primary"
                icon={faPhone}
              />
              <p className="text-2xl text-gray-700 font-custom">
                +212 29872534
              </p>
            </div>
            <div className="flex space-x-4">
              <FontAwesomeIcon
                className="text-2xl text-primary"
                icon={faMapMarkerAlt}
              />
              <p className="text-2xl text-gray-700 font-custom">
                Mohammedia, Morocco
              </p>
            </div>
          </div>
          <div className="flex space-x-8 text-3xl text-primary">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="md:text-center  mt-10">
          <p className="text-2xl text-black font-custom font-medium">
            &copy; copyright 2021 made with
            <FontAwesomeIcon className="ml-2 text-red-700" icon={faHeart} /> by
            <a
              href="https://github.com/ZinoChan"
              className="ml-2 text-primary font-main"
            >
              Zinochan
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
