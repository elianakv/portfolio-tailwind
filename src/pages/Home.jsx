import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-cornflower text-darkbrown p-6">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Eliana Villanueva</h1>

        <div>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <h3 className="text-xl mt-2 font-medium">Internship</h3>
          <p>Abilities Workshop</p>
          <p>Harris Media LLC.</p>
          <p>Winter Park Chamber of Commerce</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="mt-2">
            <h4 className="font-semibold">The University of Central Florida</h4>
            <p>BS Digital Media: Web Programming (Aug 2021 – May 2025)</p>
            <p>Associate Degree, Emerging Media of Graphic Design (Aug 2021 – May 2023)</p>
          </div>

          <div className="mt-2">
            <h4 className="font-semibold">Southeastern University</h4>
            <p>Graphic Design Bachelor of Science (Aug 2020 – Apr 2021)</p>
          </div>

          <div className="mt-2">
            <h4 className="font-semibold">The Master’s Academy</h4>
            <p>HS Diploma & Diploma of Biliteracy in Spanish (2014 – 2020)</p>
          </div>
        </div>

        <p className="text-lg mt-6">
          Let’s Connect! If you’re looking for a creative and results-driven professional to support your marketing and design needs, I’d love to collaborate with you on your next project.
        </p>
      </div>
    </div>
  );
}

export default Home;
