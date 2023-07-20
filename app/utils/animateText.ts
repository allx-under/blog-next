function animateText(
  text: string,
  index: number,
  setText: any,
  setIndex: any
): NodeJS.Timeout {
  const id: NodeJS.Timeout = setTimeout(() => {
    if (index !== text.length) {
      setText((prev: string) => `${prev}${text[index]}`);
      setIndex((prev: number) => prev + 1);
    } else {
      return;
    }
  }, 200);
  return id;
}

export default animateText;
