import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="p-6 bg-cornflower min-h-screen text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Eliana Villanueva
      </motion.h1>

      <h2 className="text-2xl font-semibold mb-6">Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Internship</h3>
        <p>Abilities Workshop</p>
        <p>Harris Media LLC.</p>
        <p>Winter Park Chamber of Commerce</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Education</h3>
        <h4 className="font-medium">The University of Central Florida</h4>
        <p>BS Digital Media: Web Programming (Aug 2021 – May 2025)</p>
        <p>AS, Emerging Media of Graphic Design (Aug 2021 – May 2023)</p>

        <h4 className="font-medium mt-2">Southeastern University</h4>
        <p>Graphic Design B.S. (Aug 2020 – Apr 2021)</p>

        <h4 className="font-medium mt-2">The Master’s Academy</h4>
        <p>HS Diploma & Diploma of Biliteracy in Spanish (2014 – 2020)</p>
      </div>

      <p className="max-w-2xl mx-auto text-lg text-darkbrown bg-white p-4 rounded shadow">
        Let’s Connect! If you’re looking for a creative and results-driven professional to support your marketing and design needs, I’d love to collaborate with you on your next project.
      </p>
    </div>
  );
}

export default Home;
