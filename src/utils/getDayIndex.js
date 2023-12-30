export default function getDayIndex(dateString) {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return dayIndex;
}
