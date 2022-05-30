import { Parser } from "../src/parser";

describe("Parser", () => {
  let parser: Parser;

  beforeAll(() => {
    parser = new Parser();
  });

  it("should parse the line and return data", () => {
    const result = parser.parse(
      `2044-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}`
    );
    expect(result).toMatchSnapshot();
  });
});
