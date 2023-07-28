import dateConverter from "@/app/utils/dateConverter";

describe("Date converter", () => {
  it("Should return today", () => {
    const date = new Date().toDateString();
    const today = dateConverter(date);

    expect(today).toBe("today.");
  });
});
