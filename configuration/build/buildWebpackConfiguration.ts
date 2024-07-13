import webpack from "webpack";
import path from "path";

import { BuildOptions } from "./types/configuration";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevelopmentServer } from "./buildDevelopmentServer";

export function buildWebpackConfiguration(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDevelopment } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDevelopment ? "inline-source-map" : undefined,
    devServer: isDevelopment ? buildDevelopmentServer(options) : undefined,
  };
}
