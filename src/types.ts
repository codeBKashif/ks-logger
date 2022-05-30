export enum LOG_LEVEL {
  ERROR = "error",
  INFO = "info",
  DEBUG = "debug",
}

export interface FormatterFact {
  date: string;
  loglevel: LOG_LEVEL;
  transactionId: string;
  error: string;
}

export interface FormatterClosureOptions {
  key: string;
  value: string | number | null | undefined;
}

export interface ParserInputInfo {
  date: string;
  level: LOG_LEVEL | string;
  data: {
    transactionId: string;
    details: string;
    code?: number;
    err?: string;
  };
}
