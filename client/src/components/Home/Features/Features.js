import React from "react";
import Fade from "react-reveal/Fade";

const CheckCircle = () => {
  return (
    <span className="mr-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mt-px text-deep-orange-accent-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  );
};

const Features = () => {
  return (
    <section
      className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-24"
      id="features"
    >
      <Fade bottom>
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              We <span className="text-red-accent-700">Love</span> What We Do !{" "}
              <br />
              <span className="leading-loose ">
                We Do What We <span className="text-red-accent-700">Love</span>{" "}
                !
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="font-body text-base text-gray-700 md:text-lg">
              Shooting a wedding is our passion. As a professional we will be
              committed to you and your wedding day. We are guaranteed to show
              up on time on your wedding day. When you hire us, we are
              contractually obligated to carry out the duties that you hired us
              to perform !
            </p>
          </div>
        </div>
      </Fade>

      {/* Column 1 */}
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Fade bottom>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <svg
                className="w-7 h-7 text-deep-orange-accent-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-display text-xl font-bold leading-5">
              Wedding Gallery
            </h6>
            <p className="mb-3 font-body text-sm text-gray-700 leading-normal">
              We, at ‘What a Beginning’, are you ideal wedding photographers,
              based in Bangladesh.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 font-body text-base text-gray-800">
              <li className="flex items-start">
                <CheckCircle />
                Professional Photography Team
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Beautify Amazing Memories
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Happiness & Stylish Images
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-display font-semibold text-lg transition-colors duration-200 text-deep-orange-accent-700 hover:text-red-900"
            >
              Learn more
            </a>
          </div>
        </Fade>

        {/* Column 2 */}
        <Fade bottom>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <svg
                className="w-7 h-7 text-deep-orange-accent-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-display text-xl font-bold leading-5">
              Professional Photography
            </h6>
            <p className="mb-3 font-body text-sm text-gray-700 leading-normal">
              Apart from professional wedding we are one of the bottom wedding
              photographers in Dhaka.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 font-body text-base text-gray-800">
              <li className="flex items-start">
                <CheckCircle />
                Pre Wedding Photography
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Candid Wedding Photography
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Bridal Maternity Shoots
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-display font-semibold text-lg transition-colors duration-200 text-deep-orange-accent-700 hover:text-red-900"
            >
              Learn more
            </a>
          </div>
        </Fade>

        {/* Column 3 */}
        <Fade bottom>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <svg
                className="w-7 h-7 text-deep-orange-accent-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-display text-xl font-bold leading-5">
              Wedding Cinematography
            </h6>
            <p className="mb-3 font-body text-sm text-gray-700 leading-normal">
              We are a professional photography team with contemporary approach
              at capturing all wedding’s most amazing moments.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 font-body text-base text-gray-800">
              <li className="flex items-start">
                <CheckCircle />
                Professional Photography Team
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Beautify Amazing Memories
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Happiness & Stylish Images
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-display font-semibold text-lg transition-colors duration-200 text-deep-orange-accent-700 hover:text-red-900"
            >
              Learn more
            </a>
          </div>
        </Fade>

        {/* Column 4 */}
        <Fade bottom>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
              <svg
                className="w-7 h-7 text-deep-orange-accent-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-display text-xl font-bold leading-5">
              Unique. Powerful. Creative.
            </h6>
            <p className="mb-3 font-body text-sm text-gray-700 leading-normal">
              Our love for photography is our way capturing all the emotions and
              the happiness & stylish images.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 font-body text-base text-gray-800">
              <li className="flex items-start">
                <CheckCircle />
                High Quality Photography
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Cost Effective Photography
              </li>
              <li className="flex items-start">
                <CheckCircle />
                Cinematography Services
              </li>
            </ul>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-display font-semibold text-lg transition-colors duration-200 text-deep-orange-accent-700 hover:text-red-900"
            >
              Learn more
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Features;
