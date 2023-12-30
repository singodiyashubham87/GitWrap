/* eslint-disable react/prop-types */
import { GiWinterGloves } from "react-icons/gi";
import GithubContributionCalendar from "./GithubContributionCalendar";

const ContributionGraph = ({userDetails}) => {
    const { username } = userDetails;

    return (
        <div className="contributionGraph w-[100%] md:w-[95%] flex flex-col justify-center items-center p-[1rem] mt-[2rem] relative">
        <GiWinterGloves className="text-[8rem] text-violet-200 absolute left-[-12rem] opacity-[0.2]" />
        <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem]font-secondary font-semibold uppercase ">
          Contribution Graph
        </h1>
        <div className="contributionCalendar bg-darkGrey font-secondary px-[1rem] pb-[0.5rem] pt-[1rem] rounded-[0.625rem] leading-[2rem] w-[100%] ">
          {username && (
            <GithubContributionCalendar
              ghUsername={username}
              sizeOfBlock={10}
              marginOfBlock={5}
            />
          )}
        </div>
      </div>
    );
};

export default ContributionGraph;