import React, { useState, useEffect } from "react"
import Navigation from "./navigation"
import { Link } from "gatsby"
import Footer from "./footer"
import Card from "./card"

export default function Layout(props) {
  return (
    // <div className="dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen">
    <div className="container mx-auto px-4 my-8 mt-0 text-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* <Link to="/"><img className="h-14 w-14 md:h-20 md:w-20 ml-4 rounded-full mt-4 mb-8 shadow-2xl" src="/assets/avatar.jpg" alt="A portrait of Locksley" /></Link> */}
        <Link to="/"><div className="h-14 w-14 md:h-20 md:w-20 ml-4 rounded-full mt-4 mb-8 shadow-2xl" id="avatar" /></Link>

        <style>
          {`
        #avatar {
          background: url('/assets/avatar.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        #avatar:hover {
          background: url('/assets/avatar-bit.png');
          background-repeat: no-repeat;
          background-size: cover;
        }
        `}
        </style>

        <Navigation />
      </div>

      <div className="mt-10 justify-between mx-auto max-w-5xl flex-grow">
        <div className="flex">
          <div class="sm:w-2/3 px-4 text-lg">
            {props.children}
          </div>
          {/* sidebar */}
          <div className='hidden sm:block sm:w-1/3 px-4'>
            <Card>{props.sidebarContent}</Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}