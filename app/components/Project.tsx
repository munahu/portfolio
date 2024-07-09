import Image from "next/image";
import { Project as ProjectInterface } from "../projects";

export default function Project({
  project,
  index,
}: {
  project: ProjectInterface;
  index: number;
}) {
  const { image, title, description, links } = project;
  return (
    <li className="mb-16 sm:mb-24 flex flex-col lg:flex-row lg:justify-between">
      <Image
        className="object-cover mt-5 h-64 md:h-[700px] md:w-full lg:w-1/2 brightness-90"
        src={image}
        alt={title}
      />
      <div className="order-first lg:order-last lg:flex flex-col justify-center lg:w-1/2 lg:pl-20 xl:pl-32">
        <h2 className="relative text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-2 lg:mb-4 tracking-tight font-bold uppercase flex">
          <span className="mr-2 text-sm font-light tracking-normal hidden lg:block absolute top-2 -left-8">
            00{index + 1}
          </span>
          <span>{title}</span>
        </h2>
        <p className="font-light md:text-lg mb-6 lg:mb-14 lg:pl-2 lg:max-w-[450px]">
          {description}
        </p>
        <div className="lg:pl-2">
          <a
            target="_blank"
            className="uppercase text-xs mr-3 border-b border-current"
            href={links.live}
          >
            Live project
          </a>
          <a
            target="_blank"
            className="uppercase text-xs border-b border-current"
            href={links.code}
          >
            View code
          </a>
        </div>
      </div>
    </li>
  );
}
