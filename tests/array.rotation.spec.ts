import { quarterTurnAnticlockwise } from "../src/array.rotation";

describe("quarterTurnAnticlockwise inputArray", () => {
  it("maps the 2x2 identity matrix to expected rotation", () => {
    let result = quarterTurnAnticlockwise([
      [1, 0],
      [0, 1]
    ]);

    expect(result).toEqual([
      [0, 1],
      [1, 0]
    ]);
  });

  it("throws an error if an invalid array is passed (not n x n)", () => {
    expect(() => {
      quarterTurnAnticlockwise([[1], [2, 3]]);
    }).toThrowError();
  });

  it("repeated 4 times on any input array is equal to input array", () => {
    let q = quarterTurnAnticlockwise;
    let inputArray = [
      [1, 2, 3],
      [0, 88, 4],
      [9, 0, 199]
    ];
    // Can pass in varied input arrays for a  better test
    // all arrays should work with this test for a good function

    let result = q(q(q(q(inputArray))));

    expect(result).toEqual(inputArray);
  });
});
