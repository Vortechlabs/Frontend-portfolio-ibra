import eLearningSmegaLMS from "@/assets/images/e-learning-smega.png";
import lmsRPLSmega from "@/assets/images/lms-rpl-smega.png";
import travelAgencySrikandi from "@/assets/images/travel-agency-srikanditrans.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArroUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/Sectionheader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "SVHS 1 Purbalingga",
    year: "2025",
    title: "LMS E-Learning SVHS 1 Purbalingga",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://elearning.smkn1pbg.sch.id/",
    image: eLearningSmegaLMS,
  },
  {
    company: "RPL SVHS 1 Purbalingga",
    year: "2025",
    title: "Project Management for RPL Student",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://rpl.smkn1purbalingga.sch.id/",
    image: lmsRPLSmega,
  },
  {
    company: "Srikandi Trans Purwokerto",
    year: "2025",
    title: "Travel Agency Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://srikanditrans.netlify.app",
    image: travelAgencySrikandi,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24"  id="project">
    <div className="container">
      <SectionHeader 
      eyebrow="Real-world Results"
      title="Featured Projects"
      description="See how i transformed concepts into engaging digital experiences"
      />

      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16" style={{
            top: `calc(64px + ${projectIndex * 40}px)`
          }}>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div> 
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li key={`${project.title}-${result.title}-${index}`} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArroUpRightIcon  className="size-4"/>
                  </button>
                </a>
            </div>

            <div className="relative">
              <Image src={project.image} alt={project.title} 
              className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
