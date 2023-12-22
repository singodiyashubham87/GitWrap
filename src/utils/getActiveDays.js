export default async function getActiveDays(weeksArray) {
  // Initialize variables to store results
  let maxContributionCount = 0;
  let mostProductiveDate = null;
  let activeDays = 0;
  let maxStreak = 0;

  // Initialize variables for tracking streak
  let hasContributedLastWeek = false;
  let streakDays = 0;

  try {
    // Loop through each week in the provided array
    weeksArray.forEach((week) => {
      // Initialize streak variables
      let currStreak = 0;

      // Check if there was a contribution streak from the last week
      hasContributedLastWeek ? (currStreak += streakDays) : (currStreak = 0);

      // Check if there was a contribution yesterday in the current week
      let hasContributedYesterday =
        week.contributionDays[0].contributionCount > 0;

      // Loop through each day in the contribution days of the week
      week.contributionDays.map((day) => {
        // Get the number of contributions for the day
        let count = day.contributionCount;

        if (count > 0) {
          activeDays += 1; // Increment total active days

          // Update max contribution count and most productive date if needed
          if (count > maxContributionCount) {
            maxContributionCount = count;
            mostProductiveDate = day.date;
          }

          // Update streak if there was a contribution yesterday
          if (hasContributedYesterday) {
            currStreak++;
          } else {
            currStreak = 1;
            hasContributedYesterday = true;
          }
        } else {
          hasContributedYesterday = false;
        }
      });

      // Update max streak if the current streak is greater
      if (currStreak > maxStreak) {
        maxStreak = currStreak;
      }

      // Check if there was a contribution on the last day of the week
      week.contributionDays[6].contributionCount
        ? ((streakDays = currStreak), (hasContributedLastWeek = true))
        : (streakDays = 0);
    });
  } catch (err) {
    storeData(mostProductiveDate, maxContributionCount, maxStreak, activeDays);
    // Use a try-catch block to handle potential errors, The error is related to using forEach loop on an object which is behaving like an array returning the total active days in case of an error
    return activeDays;
  }
  // Store data to localStorage and return;
  storeData(mostProductiveDate, maxContributionCount, maxStreak, activeDays);
  return activeDays;
}

function storeData(mostProductiveDate, maxContributionCount, maxStreak, activeDays) {
  // Store the most productive date and max contribution count in local storage
  localStorage.setItem("mostProductiveDate", mostProductiveDate);
  localStorage.setItem("maxContributionCount", maxContributionCount);
  localStorage.setItem("maxStreak", maxStreak);
  localStorage.setItem("activeDays", activeDays);
}
