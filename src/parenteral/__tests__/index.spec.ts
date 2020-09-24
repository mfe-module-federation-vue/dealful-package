import { parenteral } from "@/parenteral/index";

import * as mock from "./mocks";
describe("Parenteral function", () => {
  it("Should return object with cal and protein properties", () => {
    expect(parenteral(mock.data)).toEqual(mock.result);
  });

  it("Should return missing property when 1 > relationByGoal and do not return excess", () => {
    const result = parenteral(mock.data);
    expect(result.protein.missing).toBeTruthy();
    expect(result.protein.hasOwnProperty("excess")).toBeFalsy();
  });

  it("Should return excess property when relationByGoal > 1 and do not return missing", () => {
    const result = parenteral(mock.data);
    expect(result.cal.excess).toBeTruthy();
    expect(result.cal.hasOwnProperty("missing")).toBeFalsy();
  });
});
