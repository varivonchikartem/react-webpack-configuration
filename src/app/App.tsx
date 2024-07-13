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

  return <div className={appClasses}>App</div>;
};

export default React.memo(App);
