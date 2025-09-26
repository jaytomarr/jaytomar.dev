import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import { GridWrapper } from "@/app/components/GridWrapper";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GoodReadsBento } from "@/app/components/GoodReadsBento";
import { FavouriteArtistsBento } from "@/app/components/FavouriteArtistsBento";
import { BingeWorthyBento } from "@/app/components/BingeWorthyBento";
import { GamesILoveBento } from "@/app/components/GamesILoveBento";

export default function FunPage() {
  return (
    <div className="relative space-y-16">
      <title>Fun | Jay Tomar</title>
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-3xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          The fun part of my site.
        </h1>
        <div className="relative mt-6">
          <HorizontalLine />
        </div>
        <p className="mx-auto mt-6 text-center text-sm font-medium leading-6 text-text-secondary md:text-base">
          The unprofessional <br className="md:hidden" />
          (or not-so-professional) zone.
        </p>
      </GridWrapper>

      {/* 2x2 Bento Grid */}
      <GridWrapper className="mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <GoodReadsBento />
          <FavouriteArtistsBento />
          <BingeWorthyBento />
          <GamesILoveBento />
        </div>
      </GridWrapper>

      <MinimalPageEnder />
    </div>
  );
}
