export default function getBadge(contributionCount) {
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
