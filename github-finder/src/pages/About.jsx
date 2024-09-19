import React from "react";

function About() {
  return (
    <div className="text-white">
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search Github profiles and see profile details. This
        project is part of my learn-react projects.
      </p>
      <p className="text-gray-400">
        Course:{" "}
        <a href="" className="text-white">
          Learn React Front to Back
        </a>
      </p>
    </div>
  );
}

export default About;
