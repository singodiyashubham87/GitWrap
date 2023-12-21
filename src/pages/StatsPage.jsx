import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const StatsPage = () => {
  return (
    <div className="mainContainer min-h-[100dvh] w-[100%]relative flex flex-col justify-center items-center">
      <img
        src={logo}
        alt="logo"
        className="absolute w-[10rem] vvsm:w-[15rem] gsm:w-[20rem] top-[0.5rem] left-[0.5rem] gsm:top-[1rem] gsm:left-[1rem]"
      />
      <div className="userDetails w-[80%] flex gap-[2rem] justify-evenly items-stretch p-[1rem]">
        <div className="leftPart flex flex-col gap-[2rem] justify-center items-center">
          <div className="userProfile w-[5rem] h-[3rem] md:w-[10rem] md:h-[10rem] lg:w-[4rem] lg:h-[4rem] rounded-[50%] border-2 border-white overflow-hidden cursor-pointer">
            <img
              src={avatar}
              alt="userAvatar"
              className="w-full h-full object-cover"
            />
          </div>
          <FaGithub className="text-lightBlue p-[0.4rem] text-[3rem] bg-darkGrey rounded-[50%] hover:text-darkBlue cursor-pointer"/>
        </div>
        <div className="rightPart bg-darkGrey flex flex-col justify-center items-center p-[2rem] rounded-[0.5rem]">
          <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">User Details</h1>
          <ul className="flex flex-col gap-[0.5rem]">
            <li className="flex gap-[1rem] text-[1.5rem]">
              <strong className="text-lightGrey">Username:</strong>
              <span className="text-lightBlue">singodiyashubham87</span>
              </li>
            <li className="flex gap-[1rem] text-[1.5rem]">
              <strong className="text-lightGrey">Followers:</strong>
              <span className="text-lightBlue">24</span>
              </li>
            <li className="flex gap-[1rem] text-[1.5rem]">
              <strong className="text-lightGrey">Location:</strong>
              <span className="text-lightBlue">Alwar, India</span>
            </li>
            <li className="flex gap-[1rem] text-[1.5rem]">
              <strong className="text-lightGrey">Badge:</strong>
              <span className="flex items-center gap-[0.5rem] text-lightBlue">Professional<FaQuestionCircle /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
