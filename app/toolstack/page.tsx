import {
  languagesData,
  developmentData,
  designData,
  moreToolsData,
} from "@/app/data/toolstackData";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";
import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import Image from "next/image";

export default function ToolstackPage() {
  return (
    <div className="relative">
      <title>Toolstack | Jay Tomar</title>
      <span className="absolute left-1/2 top-20 -translate-y-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <div className="relative space-y-10 md:space-y-16">
        <div className="mx-auto text-balance pt-14 md:pt-16">
          <GridWrapper>
            <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              The Behind-the-Scenes heroes of my workflow.
            </h1>
          </GridWrapper>
        </div>
        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* Languages */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Languages</span>
            </div>
          </GridWrapper>
        </div>
        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center justify-items-center md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
            {languagesData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <Image
                        className="h-10 w-10"
                        alt={item.title}
                        src={item.imgSrc}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-gray-500">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>

        {/* Development */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Development</span>
            </div>
          </GridWrapper>
        </div>
        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center justify-items-center md:grid-cols-4 lg:grid-cols-7 lg:gap-6">
            {developmentData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <Image
                        className="h-10 w-10"
                        alt={item.title}
                        src={item.imgSrc}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-gray-500">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>

        {/* Design */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Design</span>
            </div>
          </GridWrapper>
        </div>
        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center justify-items-center md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {designData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <Image
                        className="h-10 w-10"
                        alt={item.title}
                        src={item.imgSrc}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-gray-500">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>

        {/* More Applications */}
        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>More</span>
            </div>
          </GridWrapper>
        </div>
        {/* List */}
        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center justify-items-center md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {moreToolsData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <Image
                        className="h-10 w-10"
                        alt={item.title}
                        src={item.imgSrc}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-gray-500">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>
      </div>
      <MinimalPageEnder />
    </div>
  );
}
