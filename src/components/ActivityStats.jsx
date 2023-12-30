/* eslint-disable react/prop-types */
import { FaGithubAlt } from "react-icons/fa";

const ActivityStats = (props) => {
    const { activeDays, maxStreak, mostProductiveDate, maxContributionCount } = props;
  return (
    <div className="activityStats w-[100%] vsm:w-[95%] msm:w-[85%] gsm:w-[75%] md:w-[95%] flex gap-[0.5rem] md:gap-[2rem] justify-evenly md:items-center items-stretch p-[0.5rem] md:p-[1rem] mt-[2rem] ">
      <div className="hidden md:block leftPart flex flex-col gap-[1rem] md:gap-[2rem] justify-center items-center">
        <div className="userProfile w-[2rem] md:w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
          <FaGithubAlt className="text-white w-full h-full object-cover" />
        </div>
      </div>
      <div className="rightPart bg-darkGrey flex flex-col justify-center items-center py-[1rem] md:py-[2rem] rounded-[0.5rem] w-[100%] md:w-[70%]">
        <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
          Activity
        </h1>
        <ul className="flex flex-col gap-[0.5rem] w-[90%] md:w-[80%]">
          <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
            <strong className="text-lightGrey w-[90%]">Active Days:</strong>
            <span className="text-lightBlue text-center w-[40%]">{activeDays}</span>
          </li>
          <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
            <strong className="text-lightGrey w-[90%]">Highest Streak:</strong>
            <span className="text-lightBlue text-center w-[40%]">{maxStreak}</span>
          </li>
          <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
            <strong className="text-lightGrey w-[90%]">Most Productive Date:</strong>
            <span className="text-lightBlue text-center w-[40%]">{mostProductiveDate}</span>
          </li>
          <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
            <strong className="text-lightGrey w-[90%]">Most Contribution Count:</strong>
            <span className="text-lightBlue text-center w-[40%]">{maxContributionCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityStats;
