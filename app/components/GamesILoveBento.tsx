import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function GamesILoveBento({ linkTo }: { linkTo?: string }) {
  return (
    <BentoCard
      height="h-[275px] md:h-[304px] lg:h-[300px]"
      linkTo={linkTo || "/games"}
    >
      <div className="group flex h-full">
        <div className="text-balance">
          <h2 className="mb-4 text-base font-medium">Games I Love</h2>
          <p className="mb-2 text-balance pr-1 text-text-secondary md:pr-4">
            The games that made me question if I&apos;m actually productive or
            just procrastinating.
          </p>
        </div>
        <div className="relative">
          <div className="group inline-block text-center">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div>
          <Image
            className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
            src="/game_meme.webp"
            alt="Game meme"
            width={180}
            height={270}
          />
        </div>
      </div>
    </BentoCard>
  );
}
