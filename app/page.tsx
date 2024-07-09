"use client";

import { MutableRefObject, useCallback, useRef } from "react";
import Nav from "./components/Nav";
import Project from "./components/Project";
import { projects } from "./projects";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type Section = "work" | "contact";

export default function Home() {
  const mainRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const workRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const contactRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const { ref: workInViewRef, inView: workInView } = useInView({
    threshold: 0.2,
  });

  const { ref: contactInViewRef, inView: contactInView } = useInView({
    threshold: 0.6,
  });

  const setRefs = useCallback(
    (section: Section) => (node: HTMLDivElement | null) => {
      const sectionRef = section === "work" ? workRef : contactRef;
      const sectionInViewRef =
        section === "work" ? workInViewRef : contactInViewRef;

      sectionRef.current = node;
      sectionInViewRef(node);
    },
    [workInViewRef, contactInViewRef]
  );

  const handleClick = (section: Section) => {
    const sectionRef = section === "work" ? workRef : contactRef;
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 1023px)",
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        let { isDesktop } = context.conditions as gsap.Conditions;
        gsap.to(mainRef.current, {
          backgroundColor: "white",
          color: "black",
          scrollTrigger: {
            trigger: workRef.current,
            start: "top top",
            end: "bottom center",
            onLeave: () => gsap.set(mainRef.current, { clearProps: true }),
            toggleActions: "play none restart reset",
            invalidateOnRefresh: true,
          },
        });

        const projects: HTMLLIElement[] = gsap.utils.toArray(".project");
        if (isDesktop) {
          projects.forEach((project) => {
            const projectSelector = gsap.utils.selector(project);

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: project,
                start: "-50px top",
                scrub: true,
              },
            });
            tl.to(projectSelector("img"), {
              scale: 1.1,
            });
          });
        }
      }
    );
  });

  return (
    <main ref={mainRef} className="bg-black text-white">
      <Nav
        handleClick={handleClick}
        workInView={workInView}
        contactInView={contactInView}
      />
      <section className="relative flex flex-col justify-center text-center px-2">
        <h1 className="flex flex-col sm:flex-row justify-center mt-12 mb-2 py-4 lg:py-12 border-y border-white leading-[4.6rem] text-8xl sm:text-[110px] -tracking-[0.6rem] lg:text-[165px] lg:-tracking-[0.85rem] lg:text-center xl:text-[190px] font-bold sm:text-center">
          <span className="sm:mr-3">Muna</span>
          <span>Hussen</span>
        </h1>
        <div className="lg:flex justify-center items-center">
          <p className="text-sm lg:text-base font-medium lg:mr-4 tracking-tight uppercase">
            Frontend developer
          </p>
          <p className="text-sm lg:text-base font-light tracking-tight uppercase italic">
            Based in Montreal
          </p>
        </div>
        <div className="absolute bottom-1 left-6 sm:inset-x-0 flex flex-col items-start sm:flex-row sm:justify-between sm:px-12 text-xs lg:text-sm font-medium tracking-tight uppercase">
          <a
            target="_blank"
            href="https://github.com/munahu"
            className="hover:underline"
          >
            Github
          </a>
          <a href="mailto:munaaahu@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </section>
      <section ref={setRefs("work")} className="px-6 md:px-10 pt-10 sm:pt-20">
        <SectionLabel text="work" />
        <ul className="mt-10">
          {projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </ul>
      </section>
      <section
        ref={setRefs("contact")}
        className="h-svh px-6 md:px-10 pt-14 md:pt-20 pb-10 sm:pb-16 md:pb-28"
      >
        <div className="absolute">
          <SectionLabel text="contact" />
        </div>
        <div className="flex items-center justify-center h-full">
          <h2 className="text-4xl sm:text-7xl lg:text-9xl tracking-tighter font-semibold px-5 py-3 sm:px-10 sm:py-6 lg:px-14 lg:py-6 rounded-full border border-current uppercase flex items-center cursor-pointer">
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
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="relative bg-[#c6c6c61f] px-7 py-1.5 rounded-full cursor-pointer mr-4 w-fit capitalize">
      <span className="absolute left-3 -top-2.5 text-[28px] font-black">.</span>
      <span>{text}</span>
    </div>
  );
}
