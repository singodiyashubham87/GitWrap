/* eslint-disable react/prop-types */
import { FaGithub, FaGitlab } from "react-icons/fa";
import { scrollClass } from "../constants/scrollClass";

const TopRepos = ({ topReposArray }) => {
  return (
    <>
      {topReposArray.length > 2 ? (
        <div className={`topRepos w-[100%] vsm:w-[85%] gsm:w-[75%] md:w-[95%] flex gap-[2rem] justify-evenly items-stretch md:items-center p-[0.5rem] md:p-[1rem] mt-[2rem] ${scrollClass}`}>
          <div className="leftPart bg-darkGrey flex flex-col justify-center items-center py-[2rem] rounded-[0.5rem] w-[100%] vvsm:w-[990%] md:w-[70%]">
            <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
              Repositories
            </h1>
            <ul className="flex flex-col gap-[0.5rem] w-[90%] md:w-[80%]">
              {topReposArray.map((repo, index) => (
                <li
                  className="flex gap-[0.5rem] md:gap-[1rem] text-[0.9rem] vvsm:text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem]"
                  key={index}
                >
                  <strong className="text-lightGrey w-[90%]">
                    {index + 1}. {`${repo.name}`}
                  </strong>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[40%] vvsm:w-[20%] flex justify-center items-center"
                  >
                    <FaGithub className="text-darkGrey p-[0.1rem] vvsm:p-[0.2rem] vsm:p-[0.25rem] text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] md:text-[2rem] bg-lightGrey rounded-[50%] hover:text-lightGrey hover:bg-darkGrey cursor-pointer" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="right hidden md:block flex flex-col gap-[2rem] justify-center items-center">
            <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
              <FaGitlab className="text-white w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TopRepos;
