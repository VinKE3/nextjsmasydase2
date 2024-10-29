import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}

const Card1: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl = "#",
}) => {
  return (
    <div className="relative h-[300px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-slate-200"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex h-1/2 flex-col justify-center bg-black bg-opacity-60 p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>

      {/* Action Button */}
      <a
        href={linkUrl}
        rel="nofollow"
        className="absolute bottom-0 right-0 z-10 grid h-1/2 w-1/2 place-content-center bg-white text-black transition-colors hover:text-indigo-500"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-lg ml-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Card1;
