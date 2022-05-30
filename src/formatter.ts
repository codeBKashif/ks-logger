import { FormatterFact } from "./types";

export class Formatter {
  private formatSequence: Function[];

  public constructor(sequence: Function[]) {
    this.formatSequence = sequence;
  }
  public format(formatterFact: FormatterFact): Record<string, string | number | null | undefined> {
    let result: Record<string, string | number | null | undefined> = {};
    this.formatSequence.forEach((sequence) => {
      const { key, value } = sequence(formatterFact);
      result[key] = value;
    });
    return result;
  }
}
