import { Formatter } from "../src/formatter";
import {
  dateFormatter,
  errorFormatter,
  logLevelFormatter,
  transactionIdFormatter,
} from "../src/formatter-closures";
import { LOG_LEVEL } from "../src/types";

describe("Fromatter", () => {
  let formatter: Formatter;

  beforeAll(() => {
    formatter = new Formatter([
      dateFormatter,
      errorFormatter,
      logLevelFormatter,
      transactionIdFormatter,
    ]);
  });

  it("should parse the line and return data", () => {
    const result = formatter.format({
      date: new Date("2022-01-01").toString(),
      loglevel: LOG_LEVEL.ERROR,
      transactionId: "random-id",
      error: "random",
    });
    expect(result).toMatchSnapshot();
  });
});
