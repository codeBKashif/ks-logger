import { ParserInputInfo } from "./types";

export class Parser {
  public constructor() {}
  public parse(line: string): ParserInputInfo {
    const info = line.split(" - ");
    return {
      date: info[0],
      level: info[1],
      data: JSON.parse(info[2]),
    };
  }
}
