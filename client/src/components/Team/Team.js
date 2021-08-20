import React, { useEffect, useState } from "react";
import teamMembersData from "../../data/teamData.js";
import Members from "./Members";

const Team = () => {
  const [teamMembers, SetTeamMembers] = useState([]);

  // Get team members data
  useEffect(() => {
    SetTeamMembers(teamMembersData);
  }, [teamMembers]);

  return (
    <div className="px-4 pt-6 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-xl mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-red-100 lg:w-32 lg:-ml-28 lg:-mt-6 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-red-accent-700">
              Our Professional Team
            </span>
          </span>
          <br />
          Unique. Powerful. Creative.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We provide high quality and cost effective Photography and
          Cinematography services to make your dream come true.
        </p>
      </div>
      <div className="grid gap-10 mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {teamMembers &&
          teamMembers.map((members) => (
            <Members key={members._id} members={members} />
          ))}
      </div>
    </div>
  );
};

export default Team;
