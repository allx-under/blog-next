import getUniqueCategoryArr from "@/app/utils/getUniqueCategoryArr";

describe("Get unique category arr", () => {
  it("Should return array with first element All", () => {
    const arr = getUniqueCategoryArr([]);

    expect(arr[0]).toBe("All");
  });
});
