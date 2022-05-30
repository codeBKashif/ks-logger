import * as fs from "fs";
import { PassThrough } from "stream";
import { Formatter } from "../src/formatter";
import { Logger } from "../src/logger";
import { Parser } from "../src/parser";
import { ReadStreamHandler } from "../src/read-stream-handler";
import { LOG_LEVEL } from "../src/types";
import { WriteStreamHandler } from "../src/write-stream-handler";

describe("Logger", () => {
  let formatter: Formatter;
  let parser: Parser;
  let readStreamHandler: ReadStreamHandler;
  let writeStreamHandler: WriteStreamHandler;
  let logger: Logger;

  const spy = jest
    .spyOn(fs, "createReadStream")
    .mockImplementationOnce(() => new PassThrough() as any);

  const writeSpy = jest.spyOn(fs, "createWriteStream").mockReturnValue(new PassThrough() as any);

  beforeAll(() => {
    formatter = new Formatter([]);
    parser = new Parser();
    readStreamHandler = new ReadStreamHandler("sample.log");
    writeStreamHandler = new WriteStreamHandler("sample-output.json");
    logger = new Logger(readStreamHandler, writeStreamHandler, parser, formatter, LOG_LEVEL.ERROR);
  });

  afterAll(() => jest.clearAllMocks());

  it("should log input to output file", () => {
    logger.log();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });
});
