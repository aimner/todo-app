import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import arrow from "../../assets/imgs/arrow.png";

import classes from "./sort.module.scss";

const cx = classNames.bind(classes);

type PropsType = {
  openSelect: boolean,
  setOpenSelect: React.Dispatch<React.SetStateAction<boolean>>
  refLink: React.RefObject<HTMLElement>
}

export const Sort: FC<PropsType> = ({openSelect, setOpenSelect, refLink}) => {
  const [activeSortTodoStatus, setActiveSortTodoStatus] = useState("All");

  const sortStatusArr = ["All", "Unfinished", "Completed"];

  const onChooseSortStatus = (sortStatus: string) => {
    setActiveSortTodoStatus(sortStatus);
    setOpenSelect(false);
  };

  return (
    <section className={classes.sort} ref={refLink}>
      <div onClick={() => setOpenSelect((v) => !v)} className={classes["sort-select"]}>
        <span>{activeSortTodoStatus}</span>
        <img
          className={cx({
            ["sort-select__img"]: true,
            ["sort-select__img--rotate"]: openSelect,
          })}
          src={arrow}
          alt="arrow"
        />
      </div>
      {openSelect && (
        <ul className={classes["sort-select-block"]}>
          {sortStatusArr.map((item) => (
            <li
              onClick={() => onChooseSortStatus(item)}
              className={classes["sort-select-block__item"]}
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
