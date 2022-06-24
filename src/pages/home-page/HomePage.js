import React from 'react'
import { heroImg2 } from '../../assets'

export const HomePage = () => {
  return (
   <>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center      text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Get connected socially with neos tweet
          </h1>
          <p className="mb-14 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-4xl">Explore</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/4 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={heroImg2} />
        </div>
      </div>
    </section>
   </>
  )
}
