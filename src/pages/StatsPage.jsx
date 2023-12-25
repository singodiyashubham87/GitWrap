import Loader from "../components/Loader";

import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import chart from "../assets/images/chart.png";

// Image Days Name
import sunday from "../assets/images/sunday.png";
import monday from "../assets/images/monday.png";
import tuesday from "../assets/images/tuesday.png";
import wednesday from "../assets/images/wednesday.png";
import thursday from "../assets/images/thursday.png";
import friday from "../assets/images/friday.png";
import saturday from "../assets/images/saturday.png";

import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

// Github Icons
import { FaGithub } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { VscRepo } from "react-icons/vsc";
import { GoIssueOpened } from "react-icons/go";
import { GoIssueClosed } from "react-icons/go";
import { GoIssueDraft } from "react-icons/go";
import { IoGitCommitOutline } from "react-icons/io5";
import { IoIosGitPullRequest } from "react-icons/io";

import { FaGithubAlt } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

import { HiOutlineExternalLink } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import GithubContributionCalendar from "../components/GithubContributionCalendar";
import getQuote from "../utils/getQuote";
import getContributionData from "../utils/getContributionData";

const StatsPage = () => {

  const [loader, setLoader] = useState(true);

  // States for storing user info
  const [userAvatar, setUserAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [location, setLocation] = useState("unknown");
  const [githubURL, setGithubURL] = useState("");

  // States for storing user contribution data
  const [totalContributions, setTotalContributions] = useState("");
  const [openIssues, setOpenIssues] = useState("");
  const [closedIssues, setClosedIssues] = useState("");
  const [totalIssueContributions, setTotalIssueContributions] = useState("");
  const [totalCommitContributions, setTotalCommitContributions] = useState("");
  const [totalPullRequestContributions, setTotalPullRequestContributions] =
    useState("");

  const [popularPrName, setPopularPrName] = useState("");
  const [popularPrState, setPopularPrState] = useState("");
  const [popularPrCreationDate, setPopularPrCreationDate] = useState("");
  const [popularPrURL, setPopularPrURL] = useState("");

  const [totalRepositoryContributions, setTotalRepositoryContributions] =
    useState("");
  const [topReposCount, setTopReposCount] = useState("");
  const [topReposArray, setTopReposArray] = useState([]);

  // States for storing user activity data
  const [mostProductiveDate, setMostProductiveDate] = useState("");
  const [maxContributionCount, setMaxContributionCount] = useState("");
  const [maxStreak, setMaxStreak] = useState("");
  const [activeDays, setActiveDays] = useState("");
  // Quotes part
  const [quote, setQuote] = useState(
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
  );
  const [author, setAuthor] = useState("John Lennon");

  const [dayIndex, setDayIndex] = useState(null);
  const [dayImage, setDayImage] = useState(null);

  const getDayIndex = (dateString) => {
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return dayIndex;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        await fetchQuote();
        await getContributionData(username);
        updateState();
        setLoader(false);
      }
    };
    fetchData();
  }, [username]); // Run this effect whenever the username changes

  useEffect(() => {
    if (mostProductiveDate) {
      // set the day index
      setDayIndex(getDayIndex(mostProductiveDate));
    }
  }, [mostProductiveDate]);

  useEffect(() => {
    if (dayIndex !== null) {
      // Set the image based on the day index
      switch (dayIndex) {
        case 0:
          setDayImage(sunday);
          break;
        case 1:
          setDayImage(monday);
          break;
        case 2:
          setDayImage(tuesday);
          break;
        case 3:
          setDayImage(wednesday);
          break;
        case 4:
          setDayImage(thursday);
          break;
        case 5:
          setDayImage(friday);
          break;
        case 6:
          setDayImage(saturday);
          break;
        default:
          setDayImage(null);
      }
    }
  }, [dayIndex]);

  async function fetchQuote() {
    const res = await getQuote();
    setQuote(res[0].quote);
    setAuthor(res[0].author);
  }

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "errorGettingUsername");
    setFollowers(localStorage.getItem("followers") || "-1");
    if(localStorage.getItem("location") != "null")
    setLocation(localStorage.getItem("location") || "errorGettingLocation");
    setUserAvatar(localStorage.getItem("avatar") || "");
    setGithubURL(localStorage.getItem("githubUrl") || "errorGettingGithubURL");
  }, []);

  function updateState() {
    // contribution data
    setTotalContributions(localStorage.getItem("totalContributions") || "");
    setOpenIssues(localStorage.getItem("openIssues") || "");
    setClosedIssues(localStorage.getItem("closedIssues") || "");
    setTotalIssueContributions(
      localStorage.getItem("totalIssueContributions") || ""
    );
    setTotalCommitContributions(
      localStorage.getItem("totalCommitContributions") || ""
    );
    setTotalPullRequestContributions(
      localStorage.getItem("totalPullRequestContributions") || ""
    );
    setTotalRepositoryContributions(
      localStorage.getItem("totalRepositoryContributions") || ""
    );

    // User's Popular PR's data
    setPopularPrName(localStorage.getItem("popularPrName") || "");
    setPopularPrState(localStorage.getItem("popularPrState") || "");
    setPopularPrCreationDate(
      localStorage.getItem("popularPrCreationDate") || ""
    );
    setPopularPrURL(localStorage.getItem("popularPrURL") || "");

    // User Top Repos
    setTopReposCount(localStorage.getItem("topReposCount") || "0");

    // setTopRepoName1(localStorage.getItem("topRepoName1") || "");
    // setTopRepoName2(localStorage.getItem("topRepoName2") || "");
    // setTopRepoName3(localStorage.getItem("topRepoName3") || "");
    // setTopRepoName4(localStorage.getItem("topRepoName4") || "");
    // setTopRepoURL1(localStorage.getItem("topRepoURL1") || "");
    // setTopRepoURL2(localStorage.getItem("topRepoURL2") || "");
    // setTopRepoURL3(localStorage.getItem("topRepoURL3") || "");
    // setTopRepoURL4(localStorage.getItem("topRepoURL4") || "");

    // User Activity Details
    setMostProductiveDate(localStorage.getItem("mostProductiveDate") || "");
    setMaxContributionCount(localStorage.getItem("maxContributionCount") || "");
    setMaxStreak(localStorage.getItem("maxStreak") || "");
    setActiveDays(localStorage.getItem("activeDays") || "");
  }

  // Top Repos Array Update
  useEffect(() => {
    if (topReposCount > 2) {
      // Use the callback function of setTopReposArray
      setTopReposArray((prevTopReposArray) => {
        let updatedArray = [...prevTopReposArray]; // Copy the previous state

        for (let i = 0; i < topReposCount; i++) {
          let repoObj = {
            name: localStorage.getItem(`topRepoName${i}`),
            url: localStorage.getItem(`topRepoURL${i}`),
          };
          updatedArray.push(repoObj);
        }

        return updatedArray; // Return the updated state
      });
    }
  }, [topReposCount]);

  function getBadge(contributionCount) {
    if (contributionCount > 1500) {
      return "Master";
    } else if (contributionCount > 1000) {
      return "Expert";
    } else if (contributionCount > 500) {
      return "Intermediate";
    } else if (contributionCount > 250) {
      return "Skilled";
    } else if (contributionCount < 250) {
      return "Novice";
    } else {
      return "No Badge";
    }
  }

  return (
    <>
    {loader && <Loader />}
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
                <span className="text-lightBlue">{username}</span>
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
                  {totalContributions && getBadge(totalContributions)}
                  <FaQuestionCircle className="hover:text-darkBlue cursor-pointer" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contribution Graph Section  */}
        <div className="contributionGraph w-[80%] flex flex-col justify-center items-center p-[1rem] mt-[2rem]">
          <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
            Contribution Graph
          </h1>
          <div className="contributionCalendar bg-darkGrey font-secondary px-[1rem] pb-[0.5rem] pt-[1rem] rounded-[0.625rem] leading-[2rem]">
            {username && (
              <GithubContributionCalendar
                ghUsername={username}
                sizeOfBlock={10}
                marginOfBlock={5}
              />
            )}
          </div>
        </div>

        {/* Github Summary Section */}
        {totalContributions && (
          <div className="summarySection w-[80%] flex flex-col gap-[0.5rem] justify-center items-center p-[1rem] mt-[2rem]">
            <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
              Summary
            </h1>
            <ul className="statSummary w-[100%] flex flex-col gap-[1rem] justify-center items-center">
              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <IoIosGitMerge className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Total Contributions:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {totalContributions}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <VscRepo className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Total Repos Contributed:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {totalRepositoryContributions}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <GoIssueOpened className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Issues Open:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {openIssues}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <GoIssueClosed className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Issues Closed:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {closedIssues}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <GoIssueDraft className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Total Issue Contributions:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {totalIssueContributions}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <IoGitCommitOutline className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Total Commit Contributions:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {totalCommitContributions}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>

              <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
                <IoIosGitPullRequest className="text-lightBlue text-[1.5rem] w-[15%]" />
                <strong className="text-[1.7rem] text-lightGrey font-primary w-[50%]">
                  Pull Requests Contributions:{" "}
                </strong>
                <div className="score flex gap-[0.5rem] justify-center items-center w-[35%]">
                  <span className="text-[1.5rem] value p-[0.3rem] bg-darkGrey px-[.5rem] rounded-[0.5rem] text-white font-semibold min-w-[5rem] text-center">
                    {totalPullRequestContributions}
                  </span>
                  <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </div>
              </li>
            </ul>
          </div>
        )}

        {/* Activity Stats  */}
        {activeDays && (
          <div className="activityStats w-[80%] flex gap-[2rem] justify-evenly items-stretch p-[1rem] mt-[2rem]">
            <div className="leftPart flex flex-col gap-[2rem] justify-center items-center">
              <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
                <FaGithubAlt className="text-white w-full h-full object-cover" />
              </div>
            </div>
            <div className="rightPart bg-darkGrey flex flex-col justify-center items-center py-[2rem] rounded-[0.5rem] w-[70%]">
              <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
                Activity
              </h1>
              <ul className="flex flex-col gap-[0.5rem] w-[80%]">
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[90%]">
                    Active Days:
                  </strong>
                  <span className="text-lightBlue text-center w-[40%]">
                    {activeDays}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[90%]">
                    Highest Streak:
                  </strong>
                  <span className="text-lightBlue text-center w-[40%]">
                    {maxStreak}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[90%]">
                    Most Productive Date:
                  </strong>
                  <span className="text-lightBlue text-center w-[40%]">
                    {mostProductiveDate}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[90%]">
                    Most Contribution Count:
                  </strong>
                  <span className="text-lightBlue text-center w-[40%]">
                    {maxContributionCount}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Top Repo  */}
        {topReposArray.length > 2 ? (
          <div className="activityStats w-[80%] flex gap-[2rem] justify-evenly items-stretch p-[1rem] mt-[2rem]">
            <div className="leftPart bg-darkGrey flex flex-col justify-center items-center py-[2rem] rounded-[0.5rem] w-[70%]">
              <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
                Repositories
              </h1>
              <ul className="flex flex-col gap-[0.5rem] w-[80%]">
                {topReposArray.map((repo, index) => {
                  return (
                    <>
                      <li className="flex gap-[1rem] text-[1.5rem]" key={index}>
                        <strong className="text-lightGrey w-[90%]">
                          {index + 1}. {`${repo.name}`}
                        </strong>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[40%] flex justify-center items-center"
                        >
                          <FaGithub className="text-darkGrey p-[0.2rem] text-[2rem] bg-lightGrey rounded-[50%] hover:text-lightGrey hover:bg-darkGrey cursor-pointer" />
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="right flex flex-col gap-[2rem] justify-center items-center">
              <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
                <FaGitlab className="text-white w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Popular PR  */}
        {popularPrName && (
          <div className="popularPrStats w-[80%] flex gap-[2rem] justify-evenly items-stretch p-[1rem] mt-[2rem]">
            <div className="leftPart flex flex-col gap-[2rem] justify-center items-center">
              <div className="userProfile w-[10rem] h-[3rem] md:w-[10rem] md:h-[10rem] overflow-hidden cursor-pointer">
                <FaGitAlt className="text-white w-full h-full object-cover" />
              </div>
            </div>
            <div className="rightPart bg-darkGrey flex flex-col justify-center items-center py-[2rem] rounded-[0.5rem] w-[70%]">
              <h1 className="sectionHeading text-lightRed text-[3rem] font-secondary font-semibold">
                Top Pull Request
              </h1>
              <ul className="flex flex-col gap-[0.5rem] w-[80%]">
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[40%]">Title:</strong>
                  <span className="text-lightBlue text-center w-[60%]">
                    {popularPrName}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[40%]">State:</strong>
                  <span className="text-lightBlue text-center w-[60%]">
                    {popularPrState}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[40%]">
                    Created On:
                  </strong>
                  <span className="text-lightBlue text-center w-[60%]">
                    {popularPrCreationDate}
                  </span>
                </li>
                <li className="flex gap-[1rem] text-[1.5rem]">
                  <strong className="text-lightGrey w-[40%]">Repo Link:</strong>
                  <a
                    href={popularPrURL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center flex justify-center items-center w-[60%]"
                  >
                    <HiOutlineExternalLink className="text-[1.5rem] text-lightBlue hover:text-darkBlue cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Chart & Most Productive Day Section  */}
        <div className="piechartAndDay w-[80%] flex justify-center items-center p-[1rem] gap-[2rem]">
          <div className="pieChart text-center flex flex-col gap-[1rem] justify-center items-center w-[45%]">
            <img src={chart} alt="piechart" />
            <h2 className="chartTitle font-secondary text-lightRed text-[1.8rem]">
              Most Used Languages
            </h2>
          </div>
          <div className="productiveDay flex flex-col gap-4 justify-center items-center w-[55%]">
            <div className="productiveDayImage w-[25rem] overflow-hidden">
              <img
                src={dayImage || monday}
                alt="mostProductiveDay"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="chartTitle font-secondary text-lightRed text-[1.8rem] text-center">
              Most Productive Date
            </h2>
          </div>
        </div>

        {/* Quote of the Day  */}
        <div className="quoteSection bg-darkGrey w-[100%] flex flex-col gap-[3rem] justify-center items-center p-[3rem] mt-[2rem]">
          <h1 className="sectionHeading font-secondary text-lightRed text-[3rem] font-secondary font-semibold">
            Quote of the Day
          </h1>
          <blockquote className="w-[80%] font-secondary text-[2rem] text-lightGrey leading-[3.5rem] relative">
            {`"${quote}"`} <br />
            <cite className="text-white text-right block font-semibold">
              {`-${author}`}
            </cite>
          </blockquote>
        </div>

        {/* Star on Github  */}
        <a
          href="https://github.com/singodiyashubham87/GitWrap"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-darkGrey my-[4rem] block text-[1.5rem] text-center font-secondary text-lightGrey leading-0 px-[1rem] pt-[1rem] rounded-[0.5rem] hover:scale-[1.03] ease duration-300">
            {" "}
            <FaStar className="text-lightBlue text-[1.5rem] inline" /> on GitHub
          </button>
        </a>

        <footer className="w-[100%] bg-darkGrey pt-[1rem] flex justify-center items-center ">
          <small className="w-[80%] text-[1.5rem] text-lightGrey font-secondary leading-0 text-center">
            Designed & Developed by{" "}
            <span className="text-lightRed cursor-pointer">
              <a
                href="https://shubham-s-socials.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold uppercase hover:text-lightBlue hover:font-bold"
              >
                Master Mickey
              </a>
            </span>
          </small>
        </footer>
      </div>
    </>
  );
};

export default StatsPage;
