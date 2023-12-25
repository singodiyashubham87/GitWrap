import GitHubCalendar from "react-github-calendar";

const GithubContributionCalendar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { ghUsername, sizeOfBlock, marginOfBlock } = props;


  return (
    <GitHubCalendar
      username={ghUsername}
      blockSize={sizeOfBlock}
      blockMargin={marginOfBlock}
      color="#9CDAF1"
      colorScheme="light"
      fontSize={12}
      style={{
        color: "#ABABAB",
      }}
    />
  );
};

export default GithubContributionCalendar;
