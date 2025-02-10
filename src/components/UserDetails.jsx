/* eslint-disable react/prop-types */
import avatar from "../assets/images/avatar.png";
import { FaGithub, FaQuestionCircle } from "react-icons/fa";
import { TbChristmasTree } from "react-icons/tb";
import getBadge from "../utils/getBadge";

const UserDetails = (props) => {
  const { userInfo, totalContributions } = props;
  const { userAvatar, githubURL, username, followers, location } = userInfo;

  return (
    <div className="userDetails w-[100%] vvsm:w-[90%] msm:w-[85%] gsm:w-[75%] md:w-[95%] flex flex-col md:flex-row gap-[0.5rem] md:gap-[2rem] justify-evenly items-stretch p-[1rem] ">
      <div className="leftPart flex flex-col gap-[0.5rem] vsm:gap-[1rem] md:gap-[2rem] justify-center items-center">
        <div className="userProfile w-[5rem] h-[5rem] vsm:w-[7rem] vsm:h-[7rem] md:w-[10rem] md:border-4 md:border-lightBlue md:h-[10rem] rounded-[50%] overflow-hidden cursor-pointer ">
          <img
            src={userAvatar || avatar}
            alt="userAvatar"
            className="w-full h-full object-cover"
          />
        </div>
        <a href={githubURL} target="_blank" rel="noreferrer">
          <FaGithub className="text-lightBlue p-[0.25rem] vvsm:p-[0.3rem] vsm:p-[0.4rem] md:p-[0.4rem] text-[1.8rem] vvsm:text-[2rem] vsm:text-[2.5rem] md:text-[3rem] bg-darkGrey rounded-[50%] hover:text-darkBlue cursor-pointer" />
        </a>
      </div>
      <div className="rightPart bg-darkGrey flex flex-col justify-center items-center py-[1rem] vsm:py-[1.5rem] md:px-[2rem] rounded-[0.5rem] mt-[1rem] md:mt-[0] relative">
        <TbChristmasTree className="hidden xl:block text-[10rem] text-violet-200 absolute right-[-15rem] opacity-[0.2]" />
        <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
          User Details
        </h1>
        <ul className="flex flex-col gap-[0.5rem]">
          <li className="flex gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem]">
            <strong className="text-lightGrey">Username:</strong>
            <span className="text-lightBlue">{username}</span>
          </li>
          <li className="flex gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem]">
            <strong className="text-lightGrey">Followers:</strong>
            <span className="text-lightBlue">{followers}</span>
          </li>
          <li className="flex gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem]">
            <strong className="text-lightGrey">Location:</strong>
            <span className="text-lightBlue">{location}</span>
          </li>
          <li className="flex gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem]">
            <strong className="text-lightGrey">Badge:</strong>
            <span className="flex items-center gap-[0.3rem] vvsm:gap-[0.5rem] text-lightBlue">
              {getBadge(totalContributions)}
              {/* <FaQuestionCircle
                data-tooltip-target="tooltip-default"
                className="hover:text-darkBlue cursor-pointer"
              /> */}
              <div className="relative group">
                <FaQuestionCircle className="hover:text-darkBlue cursor-pointer" />
                <span className="absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-800">
                  <span>{"Contributions > 1500 => Master"}</span>
                  <br />
                  <span>
                    {"Contributions > 1000 && <= 1500 => Expert"}
                  </span>
                  <br />
                  <span>
                    {
                      "Contributions > 500 && <= 1000 => Intermediate"
                    }
                  </span>
                  <br />
                  <span>
                    {"Contributions > 250 && <= 500 => Skilled"}
                  </span>
                  <br />
                  <span>{"Contributions <= 250 => Novice"}</span>
                </span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
