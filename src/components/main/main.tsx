import { FC } from "react";
import classes from "./main.module.scss";
import { Todos } from "../todos";

import { Control } from "../control";

export const Main: FC = () => {
  
  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Todos App</h1>
      <Control />
      <Todos />
    </main>
  );
};
