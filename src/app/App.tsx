import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  const setupSteps = [
    {
      title: "Install react and react-dom, and enable SCSS support by integrating css-loader",
      substeps: ["Install React and ReactDOM packages.", "Integrate css-loader to support SCSS."],
    },
    {
      title: "Enhance your workflow with SCSS",
      substeps: [
        "Incorporate mini-css-extract-plugin to extract CSS into separate files.",
        "Configure CSS modules for style isolation.",
      ],
    },
    {
      title: "Enable handling of SVGs and importing PNG and JPG files",
      substeps: ["Utilize svgr-loader for SVG handling.", "Integrate file-loader for PNG and JPG files."],
    },
    {
      title: "Add aliases and configure absolute paths",
      substeps: ["Set up aliases for easier module imports.", "Configure webpack to use absolute paths."],
    },
    {
      title: "Add the capability to include favicon.ico",
      substeps: ["Configure webpack to include favicon.ico in the build."],
    },
    {
      title: "Setup Babel loader and ensure compatibility with React",
      substeps: ["Set up Babel loader for transpiling JavaScript files.", "Ensure compatibility with React."],
    },
    {
      title: "Integrate the react-refresh-webpack-plugin",
      substeps: ["Configure webpack to use react-refresh-webpack-plugin for fast refresh in development."],
    },
    {
      title: "Configure webpack-dev-server",
      substeps: [
        "Set up webpack-dev-server for enhanced development workflow.",
        "Pass mode and port via environment variables for flexibility.",
      ],
    },
    {
      title: "Decompose the webpack configuration",
      substeps: [
        "Break down the webpack configuration into smaller, manageable parts.",
        "Create options for flexible build management.",
      ],
    },
    {
      title: "Convert webpack configuration to TypeScript",
      substeps: [
        "Generate a TypeScript configuration file (tsconfig.json).",
        "Adapt webpack configuration to TypeScript.",
      ],
    },
  ];

  return (
    <main className={appClasses}>
      <h1 className={styles.title}>Advanced Webpack Configuration Overview</h1>
      <section className={styles.stepsSection}>
        <ul className={styles.stepsList}>
          {setupSteps.map((step, index) => (
            <li key={index} className={styles.stepItem}>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <ul className={styles.substepsList}>
                {step.substeps.map((substep, subIndex) => (
                  <li key={subIndex} className={styles.substepItem}>
                    <h3 className={styles.substepText}>{substep}</h3>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default React.memo(App);
