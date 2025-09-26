import { BgGradient } from "./components/BgGradient";

import { ToolstackBento } from "./components/ToolstackBento";

import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { Button } from "./components/Button";
import { ProjectsBento } from "./components/ProjectsBento";
import { MinimalPageEnder } from "./components/MinimalPageEnder";

export default async function Home() {
  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I&apos;m Jay! <br /> Welcome to my corner of the internet!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  I&apos;m a full stack hybrid developer — part coder, part
                  designer, part seeker of the meaning in bugs. This site is my
                  over-the-top experiment zone — a place to tinker, test wild
                  ideas, and see what actually works.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div>
                <AboutMeBento linkTo="/about" />
              </div>

              <div>
                <ToolstackBento linkTo="/toolstack" />
              </div>

              <div className="md:col-span-2">
                <ProjectsBento linkTo="/projects" />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <MySitePattern /> */}
          <div className="mt-4 text-center">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Fun</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                My site is a playful sandbox. Explore, experiment, && say hello
              </h2>
            </GridWrapper>
            <GridWrapper>
              <div className="relative z-10 mt-4 text-center">
                <Button href="/fun">Hello</Button>
              </div>
            </GridWrapper>
          </div>
        </section>
      </div>
      <MinimalPageEnder />
    </section>
  );
}
