import React from "react"
import FormInput from "./ui/FormInput"

const Booking = () => {
  return (
    <section className="h-auto pb-28">
      <div className="max-w-screen-2xl w-full mx-auto 2xl:px-0 px-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 ">
          <div className="lg:col-span-2 row-start-2 lg:row-start-auto">
            <form className="py-16 px-8 bg-light-white border border-warm-gray-400 rounded">
              <div className="grid md:grid-cols-2 gap-8 grid-cols-1  ">
                <FormInput type="text" label="Name" />
                <FormInput type="email" label="Email" />

                <FormInput type="phone" label="Phone" />
                <FormInput type="number" label="Table" placeholder="1" />

                <FormInput type="date" label="Date" />
                <FormInput type="number" label="Person" placeholder="2" />
              </div>
            </form>
          </div>
          <div className="relative row-start-1 lg:row-start-auto  mb-10 lg:mb-0">
            <h2 className="lg:absolute lg:-left-10 lg:mb-0 mb-10 lg:leading-normal lg:text-7xl text-5xl capitalize font-main font-bold text-primary">
              Table <br />{" "}
              <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              Booking
            </h2>
            <h3
              //style={{ writingMode: "vertical-lr" }}
              className="lg:absolute lg:bottom-20 lg:left-10 xl:text-3xl text-2xl font-bold text-secondary font-custom capitalize"
            >
              Make A reservation
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
