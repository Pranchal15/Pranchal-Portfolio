import React from "react";

const highlights = [
  {
    title: "Presenting my Adobe project at UMass",
    img: "/images/adobePres.JPG",
  },
  {
    title: "Leading a Workshop at c.S(); (2021)",
    img: "/images/codingStudio.jpg",
  },
  {
    title: "At SS&C Intralinks Office",
    img: "/images/ssnc.JPG",
  },
  {
    title: "Let's just say I lived",
    img: "/images/skiing.JPG",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">In Action</h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="w-full md:w-72 bg-white border border-gray-200 shadow rounded-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-800 font-medium text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
