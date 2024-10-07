import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type HeroOrbitProps = PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: number;
  spinDuration?: number;
}>;

const HeroOrbit = (props: HeroOrbitProps) => {
  const { children, size, rotation, orbitDuration, spinDuration } = props;

  return (
    <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(orbitDuration && "animate-spin")}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(spinDuration && "animate-spin")}
            style={{
              animationDuration: `${spinDuration}s`,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
