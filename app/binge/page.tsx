import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import { GridWrapper } from "@/app/components/GridWrapper";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import TiltedCard from "@/app/components/TiltedCard";
import bingeData from "@/app/data/bingeData";

export default function BingePage() {
  return (
    <div className="relative space-y-16">
      <title>Binge | Jay Tomar</title>
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-3xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Binge Worthy
        </h1>
        <div className="relative mt-6">
          <HorizontalLine />
        </div>
        <p className="mx-auto mt-6 text-center text-sm font-medium leading-6 text-text-secondary md:text-base">
          The shows that turned me into <br className="md:hidden" />a nocturnal
          creature.
        </p>
      </GridWrapper>

      {/* 7-column grid section */}
      <GridWrapper className="mt-16">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {bingeData.map((item, index) => (
            <div key={item.index} className="relative">
              {/* Content */}
              <div className="flex h-full flex-col">
                {/* Square Image */}
                <div className="mb-4 h-36 w-full md:h-48">
                  <TiltedCard
                    imageSrc={item.imgSrc}
                    altText={item.title}
                    captionText={item.title}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-0 h-10 text-center text-sm font-medium text-text-primary md:h-12">
                  {item.title}
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
