export const getGreetings = () => {
  const timestamp = new Date().getHours();

  if (timestamp >= 12 && timestamp <= 17) {
    return 'Good Afternoon';
  } if (timestamp >= 18 && timestamp <= 23) {
    return 'Good Night';
  }

  return 'Good Moorning';
};
