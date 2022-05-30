import { Formatter } from "./formatter";
import { Parser } from "./parser";
import { ReadStreamHandler } from "./read-stream-handler";
import { LOG_LEVEL, ParserInputInfo } from "./types";
import { WriteStreamHandler } from "./write-stream-handler";

export class Logger {
  private readStreamHandler: ReadStreamHandler;
  private parser: Parser;
  private formatter: Formatter;
  private writeStreamHandler: WriteStreamHandler;
  private outPutLevel: LOG_LEVEL;

  public constructor(
    readStreamHandler: ReadStreamHandler,
    writeStreamHandler: WriteStreamHandler,
    parser: Parser,
    formatter: Formatter,
    logLevel: LOG_LEVEL
  ) {
    this.readStreamHandler = readStreamHandler;
    this.writeStreamHandler = writeStreamHandler;
    this.parser = parser;
    this.formatter = formatter;
    this.outPutLevel = logLevel;
  }

  public log(): void {
    const outputData: Record<string, string | number | null | undefined>[] = [];
    this.readStreamHandler
      .getFileReader()
      .on("line", (line) => {
        const parsedData: ParserInputInfo = this.parser.parse(line);

        if (parsedData.level === this.outPutLevel) {
          outputData.push(
            this.formatter.format({
              date: parsedData.date,
              loglevel: parsedData.level as LOG_LEVEL,
              transactionId: parsedData.data.transactionId,
              error: parsedData.data.err || "",
            })
          );
        }
      })
      .on("close", () => {
        this.writeStreamHandler.writeData(JSON.stringify(outputData));
      });
  }
}
