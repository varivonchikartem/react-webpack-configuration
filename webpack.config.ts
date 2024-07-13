import webpack from "webpack";
import path from "path";
import { BuildEnvironmentVariables, BuildPaths } from "./configuration/build/types/configuration";
import { buildWebpackConfiguration } from "./configuration/build/buildWebpackConfiguration";

export default (env: BuildEnvironmentVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const MODE = env.mode || "development";
  const PORT = env.port || 3000;

  const isDevelopment = MODE === "development";

  const config: webpack.Configuration = buildWebpackConfiguration({
    mode: MODE,
    paths: paths,
    isDevelopment: isDevelopment,
    port: PORT,
  });

  return config;
};
