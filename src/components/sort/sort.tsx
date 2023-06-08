import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import arrow from "../../assets/imgs/arrow.png";

import classes from "./sort.module.scss";

const cx = classNames.bind(classes)

export const Sort: FC = () => {
  const [openSelect, setOpenSelect] = useState(false);

  const [activeSortTodoStatus, setActiveSortTodoStatus] = useState("All");

  const sortStatusArr = ["All", "Unfinished", "Completed"];

  return (
    <section className={classes.sort}>
      <div onClick={() => setOpenSelect((v) => !v)} className={classes["sort-select"]}>
        <div>{activeSortTodoStatus}</div>
        <img className={cx({
          ['sort-select__img']: true,
          ['sort-select__img--rotate']: openSelect
        })} src={arrow} alt="arrow" />
      </div>
      {openSelect && (
        <ul className={classes["sort-select"]}>
          {sortStatusArr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
