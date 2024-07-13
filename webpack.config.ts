import webpack from "webpack";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";
import { BuildPaths } from "./configuration/build/types/configuration";
import path from "path";

const PATHS: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const MODE = "development";
const isDevelopment = MODE === "development";

const configuration: webpack.Configuration = buildWebpackConfiguration({
  mode: "production",
  paths: PATHS,
  isDevelopment: isDevelopment,
});

export default configuration;
