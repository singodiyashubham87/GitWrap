/* eslint-disable react/prop-types */
// import icons from react-icons
import { VscRepo } from "react-icons/vsc";
import { IoGitCommitOutline } from "react-icons/io5";
import { IoIosGitMerge, IoIosGitPullRequest } from "react-icons/io";
import { GoIssueOpened, GoIssueClosed, GoIssueDraft } from "react-icons/go";
import { GiWinterHat } from "react-icons/gi";
import { HiOutlineExternalLink } from "react-icons/hi";

const ContributionSummary = (props) => {
  const {
    totalContributions,
    totalRepositoryContributions,
    openIssues,
    closedIssues,
    totalIssueContributions,
    totalCommitContributions,
    totalPullRequestContributions,
    userDetails,
  } = props;

  return (
    <>
      {totalContributions && (
        <div className="summarySection w-[95%] msm:w-[85%] gsm:w-[75%] md:w-[95%] flex flex-col gap-[0.5rem] justify-center items-center p-[0.5rem] vsm:px-[1rem] py-[2rem] md:px-0 mt-[2rem] relative bg-darkGrey rounded-[0.625rem]">
          <GiWinterHat className="hidden xl:block text-[8rem] text-violet-200 absolute left-[-12rem] opacity-[0.2]" />
          <GiWinterHat className="hidden xl:block text-[8rem] text-violet-200 absolute right-[-12rem] opacity-[0.2]" />
          <h1 className="sectionHeading text-lightRed text-[1.2rem] vvsm:text-[1.5rem] vsm:text-[1.8rem] msm:text-[2rem] gsm:text-[2.5rem] md:text-[3rem] font-secondary font-semibold uppercase">
            Summary
          </h1>
          <ul className="statSummary w-[100%] msm:w-[90%] md:w-[90%] flex flex-col gap-[1rem] justify-center items-center">
            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <IoIosGitMerge className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Total Contributions:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {totalContributions}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/${userDetails.username}`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <VscRepo className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Total Repos Contributed:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {totalRepositoryContributions}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/${userDetails.username}`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <GoIssueOpened className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Issues Open:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {openIssues}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3A${userDetails.username}+is%3Aopen`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <GoIssueClosed className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Issues Closed:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {closedIssues}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3A${userDetails.username}+is%3Aclosed`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <GoIssueDraft className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Total Issue Contributions:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {totalIssueContributions}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Asingodiyashubham87`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <IoGitCommitOutline className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Total Commit Contributions:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {totalCommitContributions}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/${userDetails.username}`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>

            <li className="w-[100%] flex items-center justify-center gap-[0.5rem]">
              <IoIosGitPullRequest className="text-lightBlue text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.5rem] md:text-[1.5rem] w-[5%] md:w-[7%]" />
              <strong className="text-[0.8rem] vvsm:text-[1rem] vsm:text-[1.2rem] md:text-[1.7rem] text-lightGrey font-primary w-[70%] md:w-[75%]">
                Pull Requests Contributions:{" "}
              </strong>
              <div className="score flex gap-[0.3rem] md:gap-[0.5rem] justify-center items-center w-[25%] vvsm:w-[30%] md:w-[18%]">
                <span className="text-[0.8rem] vvsm:text-[0.9rem] vsm:text-[1rem] md:text-[1.5rem] value p-[0.1rem] md:p-[0.3rem] bg-lightGrey px-[0.2rem] md:px-[0.5rem] rounded-[0.5rem] text-darkGrey font-semibold min-w-[3rem] vsm:min-w-[3.5rem] md:min-w-[5rem] text-center">
                  {totalPullRequestContributions}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3A${userDetails.username}`}
                >
                  <HiOutlineExternalLink className="text-[1rem] vvsm:text-[1.2rem] vsm:text-[1.3rem] md:text-[1.5rem] text-lightBlue p-[0.2rem] bg-darkGrey rounded-[0.3rem] hover:text-darkBlue cursor-pointer" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ContributionSummary;
