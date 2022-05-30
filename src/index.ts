import { getCliOptions } from "./cli-options";
import { Formatter } from "./formatter";
import {
  dateFormatter,
  errorFormatter,
  logLevelFormatter,
  transactionIdFormatter,
} from "./formatter-closures";
import { Logger } from "./logger";
import { Parser } from "./parser";
import { ReadStreamHandler } from "./read-stream-handler";
import { LOG_LEVEL } from "./types";
import { WriteStreamHandler } from "./write-stream-handler";

const { input, output, level } = getCliOptions();

const readStreamHandler = new ReadStreamHandler(input);
const writeStream = new WriteStreamHandler(output);
const parser = new Parser();
const formatter = new Formatter([
  dateFormatter,
  transactionIdFormatter,
  logLevelFormatter,
  errorFormatter,
]);
const logger = new Logger(readStreamHandler, writeStream, parser, formatter, level as LOG_LEVEL);
logger.log();
