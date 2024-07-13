import { BuildOptions } from "./types/configuration";
import type { Configuration as DevelopmentServerConfiguration } from "webpack-dev-server";

export function buildDevelopmentServer(options: BuildOptions): DevelopmentServerConfiguration {
  const { port } = options;

  return {
    port: port,
    open: true,
  };
}
