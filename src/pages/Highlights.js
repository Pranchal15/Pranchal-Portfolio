import React from "react";

const highlights = [
  {
    title: "Presenting my Adobe project at UMass",
    img: "/images/adobePres.jpg",
  },
  {
    title: "Leading a Workshop at c.S(); (2021)",
    img: "/images/codingStudio.jpg",
  },
  {
    title: "At SS&C Intralinks Office",
    img: "/images/ssnc.jpg",
  },
  {
    title: "Let's just say I lived",
    img: "/images/skiing.jpg",
  },
  
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">In Action</h2>

      <div className="flex overflow-x-auto gap-6 pb-4 px-1">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="w-80 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"

          >
            <img
              src={item.img}
              alt={item.title}
            className="w-full h-52 object-cover"

            />
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
