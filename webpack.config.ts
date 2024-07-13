import webpack from "webpack";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";
import { BuildEnvironmentVariables, BuildPaths } from "./configuration/build/types/configuration";
import path from "path";

export default (environmentVariables: BuildEnvironmentVariables) => {
  const PATHS: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const MODE = environmentVariables.mode || "development";
  const PORT = environmentVariables.port || 3000;

  const isDevelopment = MODE === "development";

  const configuration: webpack.Configuration = buildWebpackConfiguration({
    mode: MODE,
    paths: PATHS,
    isDevelopment: isDevelopment,
    port: PORT,
  });

  return configuration;
};
