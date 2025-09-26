import { GridWrapper } from "@/app/components/GridWrapper";
import { ProfilePicture } from "@/app/components/ProfilePicture";
import { Button } from "@/app/components/Button";
import { MinimalPageEnder } from "@/app/components/MinimalPageEnder";
import { siteMetadata } from "@/app/data/siteMetadata";
import clsx from "clsx";
import Image from "next/image";

export default async function LinksPage() {
  return (
    <div className="relative">
      <title>Links | Jay Tomar</title>
      <div className="space-y-12">
        <ProfilePicture />
        <GridWrapper>
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Hey, I&apos;m Jay!
          </h1>
        </GridWrapper>
        <GridWrapper>
          <div className="mx-auto max-w-xl text-center md:mt-8">
            <p className="leading-8 text-text-secondary">
              I&apos;m Jay, a full stack hybrid developer. I design and make
              apps and stuff.
            </p>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="flex justify-center space-x-4 py-4">
            <Button href="/" variant="primary">
              View my full website
            </Button>
            <Button href="mailto:iamjaytomar@gmail.com" variant="secondary">
              Email me
            </Button>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Socials</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="relative mx-auto grid max-w-4xl grid-cols-2 place-items-center justify-items-center gap-8 md:grid-cols-3">
            {/* LinkedIn */}
            <a
              href={siteMetadata.linkedin}
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
                      src="/links/linkedin.svg"
                      alt="LinkedIn"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">LinkedIn</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={siteMetadata.github}
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
                      src="/links/github.svg"
                      alt="GitHub"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">GitHub</p>
                </div>
              </div>
            </a>

            {/* Behance */}
            <a
              href={siteMetadata.behance}
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
                      src="/links/behance.svg"
                      alt="Behance"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Behance</p>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={siteMetadata.instagram}
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
                      src="/links/instagram.svg"
                      alt="Instagram"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Instagram</p>
                </div>
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href={siteMetadata.twitter}
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
                      src="/links/x.svg"
                      alt="X"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">X (Twitter)</p>
                </div>
              </div>
            </a>

            {/* LeetCode */}
            <a
              href={siteMetadata.leetcode}
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
                      src="/links/leetcode.svg"
                      alt="LeetCode"
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-500">LeetCode</p>
                </div>
              </div>
            </a>
          </div>
        </GridWrapper>
      </div>
      <MinimalPageEnder />
    </div>
  );
}
