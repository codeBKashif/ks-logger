import { createWriteStream, WriteStream } from "fs";

export class WriteStreamHandler {
  private writeStream: WriteStream;

  public constructor(outputFile: string) {
    this.writeStream = createWriteStream(outputFile);
  }

  public writeData(data: string): void {
    this.writeStream.write(data);
  }
}
