/* eslint-disable react/prop-types */
import { FaGitAlt } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { scrollClass } from "../constants/scrollClass";

const PopularPR = (props) => {
  const { popularPrName, popularPrState, popularPrCreationDate, popularPrURL } = props;
  return (
    <>
      {popularPrName === "undefined" ? null : (
        <div className={`popularPrStats w-[100%] vsm:w-[85%] gsm:w-[75%] md:w-[95%] flex gap-[1rem] md:gap-[2rem] justify-evenly items-stretch md:items-center p-[0.5rem] md:p-[1rem] mt-[2rem] ${scrollClass}`}>
          <div className="leftPart hidden md:block flex flex-col gap-[2rem] justify-center items-center">
            <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
              <FaGitAlt className="text-white w-full h-full object-cover" />
            </div>
          </div>
          <div className="rightPart bg-darkGrey flex flex-col justify-center items-center py-[2rem] rounded-[0.5rem] w-[100%] md:w-[70%] md:px-[2rem]">
            <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
              Top Pull Request
            </h1>
            <ul className="flex flex-col gap-[0.5rem] w-[90%]">
              <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
                <strong className="text-lightGrey w-[40%]">Title:</strong>
                <span className="text-lightBlue text-center w-[60%]">
                  {popularPrName}
                </span>
              </li>
              <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
                <strong className="text-lightGrey w-[40%]">State:</strong>
                <span className="text-lightBlue text-center w-[60%]">
                  {popularPrState}
                </span>
              </li>
              <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
                <strong className="text-lightGrey w-[40%]">Created On:</strong>
                <span className="text-lightBlue text-center w-[60%]">
                  {popularPrCreationDate}
                </span>
              </li>
              <li className="flex gap-[0.5rem] md:gap-[1rem] text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.5rem]">
                <strong className="text-lightGrey w-[40%]">PR Link:</strong>
                <a
                  href={popularPrURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center flex justify-center items-center w-[60%]"
                >
                  <HiOutlineExternalLink className="text-[1rem] md:text-[1.5rem] text-lightBlue hover:text-darkBlue cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularPR;
