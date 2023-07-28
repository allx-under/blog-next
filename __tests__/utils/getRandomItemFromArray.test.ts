import getRandomItemFromArray from "@/app/utils/getRandomItemFromArray";

describe("Random Item From Array", () => {
  it("Should return null", () => {});
  const returnArr = getRandomItemFromArray([]);

  expect(returnArr).toBe(null);
});
