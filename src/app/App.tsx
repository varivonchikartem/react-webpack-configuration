import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";
import LightIcon from "@/shared/assets/icons/ThemeSwitcherLightIcon.svg";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  return (
    <div className={appClasses}>
      <LightIcon width="20px" height="20px" />
    </div>
  );
};

export default React.memo(App);
