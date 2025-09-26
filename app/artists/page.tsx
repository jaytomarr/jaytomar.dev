import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import { GridWrapper } from "@/app/components/GridWrapper";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import TiltedCard from "@/app/components/TiltedCard";
import artistsData from "@/app/data/artistsData";

export default function ArtistsPage() {
  return (
    <div className="relative space-y-16">
      <title>Artists | Jay Tomar</title>
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Favourite Artists
        </h1>
        <div className="relative mt-6">
          <HorizontalLine />
        </div>
        <p className="mx-auto mt-6 text-center text-lg font-medium text-text-secondary">
          The people who make me feel like I should quit coding and become a
          rockstar.
        </p>
      </GridWrapper>

      {/* 7-column grid section */}
      <GridWrapper className="mt-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {artistsData.map((artist, index) => (
            <div key={artist.index} className="relative">
              {/* Artist content */}
              <div className="flex h-full flex-col">
                {/* Square Image */}
                <div className="mb-4 h-48 w-full">
                  <TiltedCard
                    imageSrc={artist.imgSrc}
                    altText={artist.title}
                    captionText={artist.title}
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
                <h3 className="mb-0 text-center text-sm font-medium text-text-primary">
                  {artist.title}
                </h3>
                {/* Horizontal line after title */}
                <div className="relative -mx-3">
                  <HorizontalLine />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GridWrapper>

      <MinimalPageEnder />
    </div>
  );
}
