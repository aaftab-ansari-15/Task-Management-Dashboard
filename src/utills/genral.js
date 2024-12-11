export const generateRandomID = () => {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 7)
  ).substring(0, 7);
};
