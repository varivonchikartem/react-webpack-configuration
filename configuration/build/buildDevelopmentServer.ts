import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/configuration";

export function buildDevelopmentServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port: port,
    open: true,
    historyApiFallback: true,
  };
}
