const dateConverter = (date: string | undefined) => {
  if (date === undefined) {
    return;
  }
  const pastDate = new Date(date);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - pastDate.getTime();

  return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) === 0
    ? "today."
    : `${Math.floor(timeDiff / (1000 * 60 * 60 * 24))} days ago.`;
};

export default dateConverter;
