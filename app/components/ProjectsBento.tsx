import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function ProjectsBento({ linkTo }: { linkTo?: string }) {
  return (
    <BentoCard linkTo={linkTo} height="h-[275px] md:h-[304px] lg:h-[300px]">
      <div className="group flex h-full flex-col md:flex-row">
        <div className="flex-1 text-balance md:pr-4">
          <h2 className="mb-4 text-base font-medium">Projects</h2>
          <p className="mb-2 text-balance text-sm text-text-secondary md:text-base">
            Over the years, I&apos;ve worked on all sorts of projects — from
            small experiments to full apps, games, and even this website but
            these are the ones that I&apos;m genuinely proud to share.
          </p>
        </div>
        <div className="relative mt-4 flex-shrink-0 md:order-last md:mt-0">
          <div className="group inline-block text-center">
            <div className="h-[180px] w-[120px] rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400 md:h-[278px] md:w-[188px]">
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div>
          <Image
            className="absolute -top-1 left-0 h-[172px] w-[112px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105 md:h-[270px] md:w-[180px]"
            src="/project.jpg"
            alt="Project preview"
            width={180}
            height={270}
          />
        </div>
      </div>
    </BentoCard>
  );
}
