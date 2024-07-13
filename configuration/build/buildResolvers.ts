import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/configuration";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
}
