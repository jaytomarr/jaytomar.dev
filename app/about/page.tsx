import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import Image from "next/image";

import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";
import { Button } from "@/app/components/Button";
import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Jay Tomar</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>Hey, there!</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-3xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Jay, I design and make apps and stuff.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={120}
                      height={120}
                      src="/jay_headshot2.jpg"
                      alt="Jay Tomar"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={120}
                      height={120}
                      src="/jay_headshot4.jpg"
                      alt="Jay Tomar"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={120}
                      height={120}
                      src="/jay_funny.png"
                      alt="Jay Tomar"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-6 text-center md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-2xl font-medium leading-7 tracking-tighter text-text-primary md:text-3xl md:leading-[40px]">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full overflow-hidden md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-6 py-8 text-center md:gap-8 md:py-12 md:pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:text-left xl:py-32 xl:pb-20">
              <div className="flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                <div className="mb-6 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={150} height={220}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[210px] w-[140px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/alien_meme.jpg"
                      alt="Alien Meme"
                      width={140}
                      height={210}
                    />
                  </div>
                </div>
                <h2 className="mb-4 w-full text-balance text-2xl font-medium leading-8 tracking-tighter text-text-primary md:mb-6 md:text-3xl md:leading-[40px]">
                  My programming origins
                </h2>
                <p className="mb-4 text-sm leading-6 text-text-secondary md:mb-6 md:text-base md:leading-8">
                  I first stumbled into coding back in school when I discovered
                  HTML — it felt like alien technology had just landed on my
                  screen. One of my proudest (and funniest) early projects was
                  recreating Kaun Banega Crorepati in Python and playing it with
                  my friends. Best. Game. Show. Ever.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/alien_meme.jpg"
                    alt="A headshot"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-6 py-8 text-center md:gap-8 md:py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12 lg:text-left">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-6 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={150} height={220}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[210px] w-[140px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/flutter_meme.jpg"
                      alt="Flutter Meme"
                      width={140}
                      height={210}
                    />
                  </div>
                </div>
                <h2 className="mb-4 w-full text-balance text-2xl font-medium leading-8 tracking-tighter text-text-primary md:mb-6 md:text-3xl md:leading-[40px]">
                  Finding My Way to Development
                </h2>
                <p className="mb-4 text-sm leading-6 text-text-secondary md:mb-6 md:text-base md:leading-8">
                  I started off in UI/UX design (still my soft spot btw). Then I
                  picked up Flutter because, honestly, I didn&apos;t want to
                  learn web and mobile separately. From there it was a slippery
                  slope — databases, backends, deployments and the streak
                  hasn&apos;t stopped. I&apos;m still learning, still tinkering,
                  still breaking stuff (on purpose… mostly).
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/flutter_meme.jpg"
                    alt="Flutter Meme"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-6 py-8 text-center md:gap-8 md:py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pr-12 lg:text-left xl:py-24">
              <div className="flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                <div className="mb-6 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={150} height={220}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[210px] w-[140px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/dog_meme.jpg"
                      alt="Dog Meme"
                      width={140}
                      height={210}
                    />
                  </div>
                </div>
                <h2 className="mb-4 w-full text-balance text-2xl font-medium leading-8 tracking-tighter text-text-primary md:mb-6 md:text-3xl md:leading-[40px]">
                  Life Beyond Code
                </h2>
                <p className="mb-4 text-sm leading-6 text-text-secondary md:mb-6 md:text-base md:leading-8">
                  When I&apos;m not coding (a.k.a. most of the time),
                  you&apos;ll probably find me binge watching movies, anime, or
                  random series. I follow sports too, though my “favorite sport”
                  changes more often than my playlist. If all else fails, I grab
                  a book — which I think is boring, but hey, apparently it makes
                  me look smart. All of this usually happens with my favorite
                  music running in the background.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/dog_meme.jpg"
                    alt="Dog Meme"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-6 py-8 text-center md:gap-8 md:py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12 lg:text-left xl:py-24">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-6 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={150} height={220}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[210px] w-[140px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/ai_meme.jpg"
                      alt="AI Meme"
                      width={140}
                      height={210}
                    />
                  </div>
                </div>
                <h2 className="mb-4 w-full text-balance text-2xl font-medium leading-8 tracking-tighter text-text-primary md:mb-6 md:text-3xl md:leading-[40px]">
                  These Days
                </h2>
                <p className="mb-4 text-sm leading-6 text-text-secondary md:mb-6 md:text-base md:leading-8">
                  Right now, I&apos;m busy learning new things and trying to
                  remember the old ones (spoiler: I usually forget). On the
                  side, I enjoy watching the weekly AI battles — basically
                  watching robots compete to take my job (which, to be fair, I
                  don&apos;t even have yet).
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/ai_meme.jpg"
                    alt="AI Meme"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="relative space-y-6 text-center md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-2xl font-medium leading-8 tracking-tighter text-text-primary md:text-3xl md:leading-[40px]">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-6 md:space-y-8">
          <GridWrapper>
            <Resume />
          </GridWrapper>
        </div>

        {/* Horizontal line and button with no spacing */}
        <div className="relative flex justify-center">
          <HorizontalLine />
          <Button
            variant="secondary"
            href="https://drive.google.com/file/d/1mSZx5jsSE5qRdVsdAowDItV73j0syg6G/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </div>
      </div>

      {/* Horizontal line before page ender */}
      <div className="flex justify-center py-0">
        <HorizontalLine />
      </div>

      <div className="py-20"></div>

      <MinimalPageEnder />
    </div>
  );
}
