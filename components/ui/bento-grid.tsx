'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import ResumeOptions from "../ResumeOptions";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false)

  const leftLists = ["React.js", "Next.js", "TypeScript"];
  const rightLists = ["JavaScript", "CSS", "TailwindCSS"];

  const handleCopy = () => {
    navigator.clipboard.writeText("tochukwuvictor563@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
          </div>
          <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
              />
            )}
          </div>

            {id === 6 && (
              <BackgroundGradientAnimation
              className="absolute z-50 flex items-center justify-center text-white font-bold"
              >

              </BackgroundGradientAnimation>
            )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10' 
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
       
        </div>
        {id === 2 && <GlobeDemo/>}
        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2 top-0">
              {/* tech stack lists */}

              <div className="flex flex-col gap-3 ">
                {leftLists.map((tech) => (
                  <span
                    key={tech}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {tech}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"/>
              </div>

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"/>
                {rightLists.map((tech) => (
                  <span
                    key={tech}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
                
              </div>

              <MagicButton
              title={copied ? 'Email copied' : 'Copy my email'}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
              />
            </div>
          )}

          {id === 4 && (
            <div className="mt-5 relative z-10">
            <ResumeOptions/>
            </div>
          )}

        </div>
      </div>
      </div>
  );
};
