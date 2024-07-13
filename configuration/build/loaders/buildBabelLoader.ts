import { BuildOptions } from "../types/configuration";

export function buildBabelLoader(options: BuildOptions) {
  const { isDevelopment } = options;

  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean),
      },
    },
  };
}
