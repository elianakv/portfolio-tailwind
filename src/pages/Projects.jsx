import React from "react";
import drawingExample from "../assets/VillanuevaElianaDrawingExample2.jpg";
import portraitImage from "../assets/IMG_2272.png";
import socialMediaMockup from "../assets/ElianaVillanueva_SocialMediaMockup.jpg";
import socialVideo from "../assets/Searchable Sept.mp4";
import sidewalkVideo from "../assets/Untitled video - Made with Clipchamp.mp4";

function Projects() {
  return (
    <div className="bg-cornflower min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-xl max-w-2xl mx-auto text-darkbrown mb-8">
        A showcase of my latest design, development, and branding projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Project 1 - Still Life Drawing */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={drawingExample}
            alt="Still Life Drawing"
            className="rounded-md mb-4 w-full"
          />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Still Life Study</h2>
          <p className="text-darkbrown">
            A graphite and white charcoal rendering focused on light, reflection, and form.
          </p>
        </div>

        {/* Project 2 - Portrait in Acrylic */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={portraitImage}
            alt="Portrait in Acrylic"
            className="rounded-md mb-4 w-full"
          />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Portrait in Acrylic</h2>
          <p className="text-darkbrown">
            Acrylic painting on canvas exploring shadows and expression with pink/blue tones.
          </p>
        </div>

        {/* Project 3 - Social Media Mockup */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={socialMediaMockup}
            alt="Social Media Campaign"
            className="rounded-md mb-4 w-full"
          />
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Social Awareness Campaign</h2>
          <p className="text-darkbrown">
            A series of social media graphics created for an autism awareness campaign using Canva and Instagram mockups.
          </p>
        </div>

        {/* Project 4 - Video: Social Media Walkthrough */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <video controls className="rounded-md mb-4 w-full">
            <source src={socialVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Walkthrough Video</h2>
          <p className="text-darkbrown">
            A brief video walkthrough created for a social media accessibility project during my internship.
          </p>
        </div>

        {/* Project 5 - Video: Sidewalk Sale Campaign */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <video controls className="rounded-md mb-4 w-full">
            <source src={sidewalkVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-2xl font-bold text-darkbrown mb-2">Sidewalk Sale Campaign</h2>
          <p className="text-darkbrown">
            Promotional content for the Winter Park Chamber of Commerce sidewalk sale, created as part of a multi-post campaign.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
