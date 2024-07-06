"use client";

import Project from "./components/Project";
import { projects } from "./projects";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="flex flex-col justify-center text-center px-2">
        <h1 className="flex flex-col sm:flex-row justify-center mt-12 mb-2 py-4 lg:py-12 border-y border-white leading-[4.6rem] text-8xl sm:text-[110px] -tracking-[0.6rem] lg:text-[165px] lg:-tracking-[0.85rem] lg:text-center xl:text-[190px] font-bold sm:text-center">
          <span className="sm:mr-3">Muna</span>
          <span>Hussen</span>
        </h1>
        <div className="lg:flex justify-center">
          <p className="text-sm lg:text-base font-medium lg:mr-4 tracking-tight uppercase mb-1">
            Frontend developer
          </p>
          <p className="text-sm lg:text-base font-light tracking-tight uppercase italic">
            Based in Montreal
          </p>
        </div>
      </section>
      <section className="px-6 md:px-10 pt-10 sm:pt-20">
        <ul>
          {projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </ul>
      </section>
      <section className="h-svh flex items-center justify-center">
        <h2 className="text-4xl sm:text-7xl lg:text-9xl tracking-tighter font-semibold px-5 py-3 sm:px-10 sm:py-6 lg:px-14 lg:py-6 rounded-full border-2 sm:border-4 border-white flex items-center cursor-pointer">
          <a href="mailto:munaaahu@gmail.com">Let&apos;s talk!</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="size-8 sm:size-20 lg:size-28 ml-3 lg:ml-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </h2>
      </section>
    </main>
  );
}
