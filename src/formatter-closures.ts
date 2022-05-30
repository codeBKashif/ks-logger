import { FormatterClosureOptions, FormatterFact } from "./types";

export const dateFormatter = (parsedInfo: FormatterFact): FormatterClosureOptions => {
  return { key: "timestamp", value: new Date(parsedInfo.date).getTime() };
};

export const transactionIdFormatter = (parsedInfo: FormatterFact): FormatterClosureOptions => {
  return { key: "transactionId", value: parsedInfo.transactionId };
};

export const logLevelFormatter = (parsedInfo: FormatterFact): FormatterClosureOptions => {
  return { key: "loglevel", value: parsedInfo.loglevel };
};

export const errorFormatter = (parsedInfo: FormatterFact): FormatterClosureOptions => {
  return { key: "err", value: parsedInfo.error };
};
