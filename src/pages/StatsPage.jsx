import { useEffect, useState } from "react";

// import Components
import Loader from "../components/Loader";
import Canvas from "../components/Canvas";
import Cursor from "../components/Cursor";
import UserDetails from "../components/UserDetails";
import ContributionGraph from "../components/ContributionGraph";
import ContributionSummary from "../components/ContributionSummary";
import ActivityStats from "../components/ActivityStats";
import TopRepos from "../components/TopRepos";
import PopularPR from "../components/PopularPR";
import ChartAndProductiveDay from "../components/ChartAndProductiveDay";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

// import icons from react-icons
import { FaStar } from "react-icons/fa";
// import constants 
import { scrollClass } from "../constants/scrollClass";

// import utility functions
import getQuote from "../utils/getQuote";
import getScrollAnimation from "../utils/getScrollAnimation";
import getContributionData from "../utils/getContributionData";
import getMostUsedLanguages from "../utils/getMostUsedLanguages";

const StatsPage = () => {
  getScrollAnimation();
  // Loading state
  const [loader, setLoader] = useState(true);

  // User info states
  const [userDetails, setUserDetails] = useState({
    userAvatar: "",
    username: "",
    followers: "",
    location: "unknown",
    githubURL: "",
  });

  // User contribution data states
  const [totalContributions, setTotalContributions] = useState("");
  const [openIssues, setOpenIssues] = useState("");
  const [closedIssues, setClosedIssues] = useState("");
  const [totalIssueContributions, setTotalIssueContributions] = useState("");
  const [totalCommitContributions, setTotalCommitContributions] = useState("");
  const [totalPullRequestContributions, setTotalPullRequestContributions] =
    useState("");

  // User's Popular PR data
  const [popularPrName, setPopularPrName] = useState("");
  const [popularPrState, setPopularPrState] = useState("");
  const [popularPrCreationDate, setPopularPrCreationDate] = useState("");
  const [popularPrURL, setPopularPrURL] = useState("");

  // User Top Repos data
  const [totalRepositoryContributions, setTotalRepositoryContributions] =
    useState("");
  const [topReposCount, setTopReposCount] = useState("");
  const [topReposArray, setTopReposArray] = useState([]);

  // User activity data states
  const [mostProductiveDate, setMostProductiveDate] = useState("");
  const [maxContributionCount, setMaxContributionCount] = useState("");
  const [maxStreak, setMaxStreak] = useState("");
  const [activeDays, setActiveDays] = useState("");

  // Quotes states
  const [quote, setQuote] = useState(
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
  );
  const [author, setAuthor] = useState("John Lennon");

  // Language-related states
  const [langButton, setLangButton] = useState(true);
  const [langArray, setLangArray] = useState([]);

  // Handle language button click
  const handleLangButton = async () => {
    setLoader(true);
    const resArray = await getMostUsedLanguages(userDetails.username);
    setLangArray(resArray);
    setLangButton(false);
    setLoader(false);
  };

  // Effect to fetch user data when the username changes
  useEffect(() => {
    const fetchData = async () => {
      if (userDetails.username) {
        try {
          await Promise.all([
            fetchQuote(),
            getContributionData(userDetails.username),
          ]);
          updateState();
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoader(false);
        }
      }
    };
    fetchData();
  }, [userDetails.username]);

  // Function to fetch a random quote
  async function fetchQuote() {
    const res = await getQuote();
    setQuote(res[0].quote);
    setAuthor(res[0].author);
  }

  // Effect to update user-related states from local storage
  useEffect(() => {
    setUserDetails({
      userAvatar: localStorage.getItem("avatar") || "",
      username: localStorage.getItem("username") || "errorGettingUsername",
      followers: localStorage.getItem("followers") || "-1",
      location:
        localStorage.getItem("location") !== "null"
          ? localStorage.getItem("location") || "errorGettingLocation"
          : "unknown",
      githubURL: localStorage.getItem("githubUrl") || "errorGettingGithubURL",
    });
  }, []);

  // Function to update contribution-related states
  function updateState() {
    // Contribution data
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

    // User Activity Details
    setMostProductiveDate(localStorage.getItem("mostProductiveDate") || "");
    setMaxContributionCount(localStorage.getItem("maxContributionCount") || "");
    setMaxStreak(localStorage.getItem("maxStreak") || "");
    setActiveDays(localStorage.getItem("activeDays") || "");
  }

  // Effect to update top repos array
  useEffect(() => {
    if (topReposCount > 2) {
      setTopReposArray((prevTopReposArray) => {
        let updatedArray = [...prevTopReposArray];

        for (let i = 0; i < topReposCount; i++) {
          let repoObj = {
            name: localStorage.getItem(`topRepoName${i}`),
            url: localStorage.getItem(`topRepoURL${i}`),
          };
          updatedArray.push(repoObj);
        }

        return updatedArray;
      });
    }
  }, [topReposCount]);

  return (
    <>
      {loader && <Loader />}
      <Cursor />
      <Canvas />
      <div className="w-[100%] lg:w-[75%] lg:pt-[1rem] xl:w-[60%] 2xl:w-[50%] xxl:w-[40%] m-auto mmd:w-[95%] relative overflow-hidden xl:overflow-visible">
        <div className="mainContainer min-h-[100dvh] w-[100%] relative flex flex-col justify-center items-center gap-[1rem] mt-[5rem] vvsm:mt-[8rem] gsm:mt-[10rem] md:mt-[10rem] overflow-hidden">
          {/* User Details Section  */}
          <UserDetails
            userInfo={userDetails}
            totalContributions={totalContributions}
          />

          {/* Contribution Graph Section  */}
          <ContributionGraph userDetails={userDetails} />

          {/* GitHub Contribution Summary Section */}
          {totalContributions && (
            <ContributionSummary
              totalContributions={totalContributions}
              totalRepositoryContributions={totalRepositoryContributions}
              openIssues={openIssues}
              closedIssues={closedIssues}
              totalIssueContributions={totalIssueContributions}
              totalCommitContributions={totalCommitContributions}
              totalPullRequestContributions={totalPullRequestContributions}
              userDetails={userDetails}
            />
          )}

          {/* Activity Stats Section */}
          {activeDays && (
            <ActivityStats
              activeDays={activeDays}
              maxStreak={maxStreak}
              mostProductiveDate={mostProductiveDate}
              maxContributionCount={maxContributionCount}
            />
          )}

          {/* Top Repos Section */}
          <TopRepos topReposArray={topReposArray} />

          {/* Popular PR Section */}
          <PopularPR
            popularPrName={popularPrName}
            popularPrState={popularPrState}
            popularPrCreationDate={popularPrCreationDate}
            popularPrURL={popularPrURL}
          />

          {/* Chart & Most Productive Day Section  */}
          <ChartAndProductiveDay
            langArray={langArray}
            langButton={langButton}
            handleLangButton={handleLangButton}
            mostProductiveDate={mostProductiveDate}
          />

          {/* Quote of the Day Section  */}
          <Quote quote={quote} author={author} />

          {/* Star on Github  */}
          <a
            href="https://github.com/singodiyashubham87/GitWrap"
            target="_blank"
            rel="noreferrer"
            className={scrollClass}
          >
            <button className="bg-darkGrey my-[2rem] md:my-[4rem] block text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem] text-center font-secondary text-lightGrey leading-0 px-[1rem] pt-[0.7rem] md:pt-[1rem] rounded-[0.5rem] hover:scale-[1.03] ease duration-300 ">
              {" "}
              <FaStar className="text-lightBlue text-[1rem] vsm:text-[1.3rem] md:text-[1.5rem] inline" />{" "}
              on GitHub
            </button>
          </a>
          {/* Footer Section  */}
            <Footer/>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
