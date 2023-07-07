import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import arrow from "../../assets/imgs/arrow.png";

import classes from "./sort.module.scss";

import { TodoType } from "../../types/todosTypes";

const cx = classNames.bind(classes);

type PropsType = {
  openSelect: boolean;
  setOpenSelect: React.Dispatch<React.SetStateAction<boolean>>;
  refLink: React.RefObject<HTMLElement>;
  getTodosQuery: (url: string) => void;
  data: TodoType[] | undefined;
};

export const Sort: FC<PropsType> = ({ openSelect, setOpenSelect, refLink, getTodosQuery }) => {
  const [activeSortTodoStatus, setActiveSortTodoStatus] = useState("All");

  const sortStatusArr = [
    { text: "All", query: "" },
    { text: "Unfinished", query: "false" },
    { text: "Completed", query: "true" },
  ];

  const onChooseSortStatus = (sortStatus: string, query: string) => {
    getTodosQuery(`done=${query}`);
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
              onClick={() => onChooseSortStatus(item.text, item.query)}
              className={classes["sort-select-block__item"]}
              key={item.text}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
