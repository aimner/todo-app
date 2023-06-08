import { FC, useState } from "react";
import { Todos } from "../todos";
import { Control } from "../control";
import { Sort } from "../sort";
import { useClickOutside } from "../../hooks";

import classes from "./main.module.scss";


export const Main: FC = () => {
  // const [openSelect, setOpenSelect] = useState(false);
  const {ref, isComponentVisible, setIsComponentVisible} = useClickOutside(false)
  return (
    <main className={classes.main} >
      <h1 className={classes.main__title}>Todos App</h1>
      <Control />
      <Sort refLink={ref} openSelect={isComponentVisible} setOpenSelect={setIsComponentVisible} />
      <Todos />
    </main>
  );
};


