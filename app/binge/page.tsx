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
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Binge Worthy
        </h1>
        <div className="relative mt-6">
          <HorizontalLine />
        </div>
        <p className="mx-auto mt-6 text-center text-lg font-medium text-text-secondary">
          The shows that turned me into a nocturnal creature.
        </p>
      </GridWrapper>

      {/* 7-column grid section */}
      <GridWrapper className="mt-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {bingeData.map((item, index) => (
            <div key={item.index} className="relative">
              {/* Content */}
              <div className="flex h-full flex-col">
                {/* Square Image */}
                <div className="mb-4 h-48 w-full">
                  <TiltedCard
                    imageSrc={item.imgSrc}
                    altText={item.title}
                    captionText={item.title}
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
