import React from "react";

const Card = () => {
  const array = [
    {
      title: "CUSTOMIZED SOLUTIONS",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.",
    },
    {
      title: "ROI-DRIVEN APPROACH",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.",
    },
    {
      title: "CREATIVE SOLUTION",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.",
    },
    {
      title: "EXPERT TEAM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.",
    },
  ];

  return (
    <div class="flex flex-wrap *:w-4/12`` justify-center mt-10">
      {array.map((item, ind) => (
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full  card   flex-col">
            <div class="flex flex-col items-start   mb-3">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-20 h-20  "
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <div class="w-8 h-8  items-center justify-center rounded-full  text-white flex-shrink-0"></div>
              <h2 class="text-white  dark:text-white text-3xl font-medium">
                {item.title}
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
