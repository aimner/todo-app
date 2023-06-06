import React, { FC, useState } from "react";

import classNames from "classnames/bind";

import classes from "./sort.module.scss";

export const Sort: FC = () => {
  const [openSelect, setOpenSelect] = useState(false);

  const [activeSortTodoStatus, setActiveSortTodoStatus] = useState("All");

  return (
    <section>
      <h2>Sort Params</h2>
      <div className={classes.lol}>
        <div>
          <div>{activeSortTodoStatus}</div>          
        </div>
        {openSelect && <div>2</div>}
      </div>
    </section>
  );
};
