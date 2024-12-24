export const generateRandomID = () => {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 7)
  ).substring(0, 7);
};
export const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
export const timeToSeconds = (formattedTime) => {
  const [hrs, mins, secs] = formattedTime.split(":").map(Number);
  return hrs * 3600 + mins * 60 + secs;
};
