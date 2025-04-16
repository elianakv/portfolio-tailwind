import React from "react";
import drawingExample from "../assets/VillanuevaElianaDrawingExample2.jpg";
import portraitImage from "../assets/IMG_2272.png";
import socialMediaMockup from "../assets/ElianaVillanueva_SocialMediaMockup.jpg";
import searchableVideo from "../assets/searchable.mp4";
import sidewalkVideo from "../assets/sidewalksale.mp4";

function Projects() {
  return (
    <div className="bg-cornflower min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-xl max-w-2xl mx-auto text-darkbrown mb-8">
        A showcase of my latest design, development, and branding projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Still Life Drawing */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={drawingExample} alt="Still Life Drawing" className="rounded-md mb-4 w-full" />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Still Life Study</h2>
          <p className="text-darkbrown">
            A graphite and white charcoal rendering focused on light, reflection, and form.
          </p>
        </div>

        {/* Acrylic Portrait */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={portraitImage} alt="Acrylic Portrait" className="rounded-md mb-4 w-full" />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Acrylic Portrait</h2>
          <p className="text-darkbrown">
            Acrylic paint on canvas emphasizing vibrant color contrast and expression.
          </p>
        </div>

        {/* Social Media Mockup */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={socialMediaMockup} alt="Social Media Mockup" className="rounded-md mb-4 w-full" />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Social Media Campaign</h2>
          <p className="text-darkbrown">
          A series of social media graphics created for an autism awareness campaign using Adobe Photoshop and Instagram mockups.
          </p>
        </div>

        {/* Searchable Campaign Video */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <video controls className="rounded-md mb-4 w-full">
            <source src={searchableVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Searchable Walkthrough</h2>
          <p className="text-darkbrown">
          A brief video walkthrough created for a social media accessibility project during my internship.
          </p>
        </div>

        {/* Winter Park Chamber Campaign Video */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <video controls className="rounded-md mb-4 w-full">
            <source src={sidewalkVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Sidewalk Sale Promo</h2>
          <p className="text-darkbrown">
          Promotional content for the Winter Park Chamber of Commerce sidewalk sale, created as part of a multi-post campaign.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;