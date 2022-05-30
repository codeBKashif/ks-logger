import { parse } from "ts-command-line-args";

interface CLIOptions {
  input: string;
  output: string;
  level?: string;
  help?: boolean;
}

export const getCliOptions = () => {
  return parse<CLIOptions>(
    {
      input: {
        type: String,
        multiple: false,
        description: "input file path",
      },
      output: {
        type: String,
        multiple: false,
        description: "output file path",
      },
      level: {
        type: String,
        multiple: false,
        optional: true,
        defaultValue: "error",
        description: "log level can be error, info, and debug",
      },
      help: { type: Boolean, optional: true, alias: "h", description: "Logger app usgae" },
    },
    {
      helpArg: "help",
      headerContentSections: [{ header: "Logger app" }],
    }
  );
};
