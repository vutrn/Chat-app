export const formatMessageDate = (date) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};
