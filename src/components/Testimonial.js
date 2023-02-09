import React, { useState } from "react";

const Testimonial = ({ id, text, title, author }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="md:w-1/3 px-2 py-1 text-sm md:text-base lg:text-lg">
      <div className="h-full border-x-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="p-3">
          <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-2 ">
            {title}
          </h2>
          <div className="flex items-center flex-wrap ">
            <p className="leading-relaxed mb-3">
              {readMore ? text : `${text.substring(0, 200)}... `}
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-purple-200 underline"
              >
                {readMore ? "  Show Less" : "  Read More"}
              </button>
            </p>

            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
              {author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
