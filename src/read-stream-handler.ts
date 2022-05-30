import { createReadStream } from "fs";
import { createInterface, ReadLine } from "readline";

export class ReadStreamHandler {
  private readStream: ReadLine;

  public constructor(inputFile: string) {
    this.readStream = createInterface({
      input: createReadStream(inputFile),
      crlfDelay: Infinity,
    });
  }

  public getFileReader(): ReadLine {
    return this.readStream;
  }
}
