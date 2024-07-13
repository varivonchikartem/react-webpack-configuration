import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevelopmentServer } from "./buildDevelopmentServer";
import { BuildOptions } from "./types/configuration";

export function buildWebpackConfiguration(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDevelopment } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDevelopment ? "inline-source-map" : undefined,
    devServer: isDevelopment ? buildDevelopmentServer(options) : undefined,
  };
}
