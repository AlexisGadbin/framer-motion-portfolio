import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
        <HeroOrbit
          size={800}
          rotation={-72}
          orbitDuration={46}
          spinDuration={6}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} orbitDuration={44}>
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          orbitDuration={42}
          spinDuration={3}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} orbitDuration={40}>
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} orbitDuration={38} spinDuration={6}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} orbitDuration={36} spinDuration={6}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          orbitDuration={34}
          spinDuration={3}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} orbitDuration={32} spinDuration={3}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          orbitDuration={30}
          spinDuration={2}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind a laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
            </div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
