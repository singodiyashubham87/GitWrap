import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import chart from "../assets/images/chart.png";
import day from "../assets/images/day1.png";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import getQuote from "../utils/getQuote";

const StatsPage = () => {
  const [ghUsername, setGhUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [location, setLocation] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [githubURL, setGithubURL] = useState("");

  // Quotes part
  const [quote , setQuote] = useState("You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.");
  const [author, setAuthor] = useState("John Lennon");

  async function fetchQuote(){
    const res = await getQuote();
    setQuote(res[0].quote);
    setAuthor(res[0].author);
  }

  useEffect(() => {
    setGhUsername(localStorage.getItem("username") || "errorGettingUsername");
    setFollowers(localStorage.getItem("followers") || "-1");
    setLocation(localStorage.getItem("location") || "errorGettingLocation");
    setUserAvatar(localStorage.getItem("avatar") || "");
    setGithubURL(localStorage.getItem("githubUrl") || "errorGettingGithubURL");
    fetchQuote();
  }, []);

  return (
    <>
      <div className="mainContainer min-h-[100dvh] w-[100%]relative flex flex-col justify-center items-center gap-[1rem]">
        <img
          src={logo}
          alt="logo"
          className="absolute w-[10rem] vvsm:w-[15rem] gsm:w-[20rem] top-[0.5rem] left-[0.5rem] gsm:top-[1rem] gsm:left-[1rem]"
        />

        {/* User Details Section  */}
        <div className="userDetails w-[80%] flex gap-[2rem] justify-evenly items-stretch p-[1rem] mt-[10rem]">
          <div className="leftPart flex flex-col gap-[2rem] justify-center items-center">
            <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] rounded-[50%] overflow-hidden cursor-pointer border-2 border-white">
              <img
                src={userAvatar || avatar}
                alt="userAvatar"
                className="w-full h-full object-cover"
              />
            </div>
            <a href={githubURL} target="_blank" rel="noreferrer">
              <FaGithub className="text-lightBlue p-[0.4rem] text-[3rem] bg-darkGrey rounded-[50%] hover:text-darkBlue cursor-pointer" />
            </a>
          </div>
          <div className="rightPart bg-darkGrey flex flex-col justify-center items-center p-[2rem] rounded-[0.5rem]">
            <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
              User Details
            </h1>
            <ul className="flex flex-col gap-[0.5rem]">
              <li className="flex gap-[1rem] text-[1.5rem]">
                <strong className="text-lightGrey">Username:</strong>
                <span className="text-lightBlue">{ghUsername}</span>
              </li>
              <li className="flex gap-[1rem] text-[1.5rem]">
                <strong className="text-lightGrey">Followers:</strong>
                <span className="text-lightBlue">{followers}</span>
              </li>
              <li className="flex gap-[1rem] text-[1.5rem]">
                <strong className="text-lightGrey">Location:</strong>
                <span className="text-lightBlue">{location}</span>
              </li>
              <li className="flex gap-[1rem] text-[1.5rem]">
                <strong className="text-lightGrey">Badge:</strong>
                <span className="flex items-center gap-[0.5rem] text-lightBlue">
                  Professional
                  <FaQuestionCircle className="hover:text-darkBlue cursor-pointer" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contribution Graph Section  */}
        <div className="contributionGraph w-[80%] flex flex-col justify-center items-center p-[1rem]">
          <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
            Contribution Graph
          </h1>
          <div className="contributionCalendar bg-darkGrey font-secondary px-[1rem] pb-[0.5rem] pt-[1rem] rounded-[0.625rem] leading-[2rem]">
            {ghUsername && (
              <GitHubCalendar
                username={ghUsername}
                blockSize={8}
                blockMargin={3}
                color="#9CDAF1"
                colorScheme="light"
                fontSize={16}
                style={{
                  color: "#ABABAB"
                }}
              />
            )}
          </div>
        </div>

        {/* Github Summary Section */}
        <div className="summarySection w-[80%] flex flex-col gap-[0.5rem] justify-center items-center p-[1rem]">
          <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
            Summary
          </h1>
          <ul className="statSummary w-[100%] flex flex-col gap-[1rem] justify-center items-center">
            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <FaGithub className="text-lightBlue text-[1.5rem] w-[15%]" />
              <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                Total Active Days:{" "}
              </strong>
              <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold">
                  210
                </span>
                <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
              </div>
            </li>
            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <FaGithub className="text-lightBlue text-[1.5rem] w-[15%]" />
              <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                Total Active Days:{" "}
              </strong>
              <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold">
                  210
                </span>
                <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
              </div>
            </li>
            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <FaGithub className="text-lightBlue text-[1.5rem] w-[15%]" />
              <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                Pull Requests Merged:{" "}
              </strong>
              <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold">
                  210
                </span>
                <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
              </div>
            </li>
          </ul>

          {/* Chart & Most Productive Day Section  */}
          <div className="piechartAndDay w-[100%] flex justify-center items-center p-[1rem] gap-[2rem]">
            <div className="pieChart text-center flex flex-col gap-[1rem] justify-center items-center">
              <img src={chart} alt="piechart" />
              <h2 className="chartTitle font-secondary text-lightRed text-[1.8rem]">
                Most Used Languages
              </h2>
            </div>
            <div className="productiveDay flex flex-col justify-center items-center">
              <img src={day} alt="productive day" />
              <h2 className="chartTitle font-secondary text-lightRed text-[1.8rem]">
                Most Productive Day
              </h2>
            </div>
          </div>
        </div>

        {/* Quote of the Day  */}
        <div className="quoteSection bg-darkGrey w-[100%] flex flex-col gap-[3rem] justify-center items-center p-[3rem]">
          <h1 className="sectionHeading font-secondary text-lightRed text-[3rem] font-secondary font-semibold">
            Quote of the Day
          </h1>
          <blockquote className="w-[80%] font-secondary text-[2rem] text-lightGrey leading-[3.5rem] relative">
            {`"${quote}"`}{" "}
            <br />
            <cite className="text-white text-right block font-semibold">
              {`-${author}`}
            </cite>
          </blockquote>
        </div>

        {/* Star on Github  */}
        <a href="https://github.com/singodiyashubham87/GitWrap" target="_blank" rel="noreferrer">
          <button className="bg-darkGrey my-[4rem] block text-[1.5rem] text-center font-secondary text-lightGrey leading-0 px-[1rem] pt-[1rem] rounded-[0.5rem] hover:scale-[1.03] ease duration-300">
            {" "}
            <FaStar className="text-lightBlue text-[1.5rem] inline" /> on GitHub
          </button>
        </a>

        <footer className="w-[100%] bg-darkGrey pt-[1rem] flex justify-center items-center ">
          <small className="w-[80%] text-[1.5rem] text-lightGrey font-secondary leading-0 text-center">
            Designed & Developed by{" "}
            <span className="text-lightRed cursor-pointer"><a href="https://shubham-s-socials.vercel.app/" target="_blank" rel="noreferrer" className="font-semibold uppercase hover:text-lightBlue hover:font-bold">Master Mickey</a></span>
          </small>
        </footer>
      </div>
    </>
  );
};

export default StatsPage;
