import { GridWrapper } from "@/app/components/GridWrapper";
import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import TiltedCard from "@/app/components/TiltedCard";
import projectsData from "@/app/data/projectsData";

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
        <div className="relative mt-6">
          <HorizontalLine />
        </div>
        <p className="mx-auto mt-6 text-center text-lg font-medium text-text-secondary">
          Or the ones that worked.
        </p>
      </GridWrapper>

      {/* New 3-column grid section */}
      <GridWrapper className="mt-16">
        <div className="grid grid-cols-1 gap-0 border-l border-r border-border-primary/50 md:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={project.index}
              className="relative border-b border-border-primary/50 md:border-r md:last:border-r-0 md:[&:nth-child(3n)]:border-r-0"
            >
              {/* Horizontal line above */}
              <div className="relative">
                <HorizontalLine />
              </div>

              {/* Project content */}
              <div className="flex h-full flex-col px-6 pb-0 pt-6">
                {/* Image */}
                <div className="mb-4 h-48 w-full">
                  <TiltedCard
                    imageSrc={project.imgSrc}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="192px"
                    containerWidth="100%"
                    imageHeight="192px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-grow text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Redirect link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-sm font-medium text-indigo-600"
                >
                  View Project
                  <svg
                    className="relative ml-2.5 mt-px overflow-visible"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </a>
              </div>

              {/* Horizontal line below */}
              <div className="relative">
                <HorizontalLine />
              </div>
            </div>
          ))}
        </div>
      </GridWrapper>

      <MinimalPageEnder />
    </div>
  );
}
