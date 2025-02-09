/* eslint-disable react/prop-types */
import { LuGitPullRequestClosed, LuGitFork } from "react-icons/lu";
import { scrollClass } from "../constants/scrollClass";

const Quote = ({ quote, author }) => {
  return (
    <div className={`quoteSection bg-darkGrey w-[100%] flex flex-col gap-[1rem] md:gap-[2rem] justify-center items-center p-[1rem] py-[2rem] md:py-[3rem] md:px-[1rem] mt-[2rem] md:rounded-[0.625rem] relative ${scrollClass}`}>
      <LuGitFork className="hidden xl:block text-[8rem] text-violet-200 absolute left-[-12rem] opacity-[0.2]" />
      <LuGitPullRequestClosed className="hidden xl:block text-[8rem] text-violet-200 absolute right-[-12rem] opacity-[0.2]" />
      <h1 className="sectionHeading font-secondary text-lightRed text-[1.1rem] vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
        Quote of the Day
      </h1>
      <blockquote className="w-[95%] md:w-[80%] font-secondary text-[1rem] vsm:text-[1.3rem] vsm:leading-[2rem] md:text-[2rem] text-lightGrey leading-[1.7rem] md:leading-[3rem] relative">
        {`"${quote ?? 'Hope is a good thing my friend.'}"`} <br />
        <cite className="text-white text-right block font-semibold">
          {`-${author ?? 'Master Mickey'}`}
        </cite>
      </blockquote>
    </div>
  );
};

export default Quote;
