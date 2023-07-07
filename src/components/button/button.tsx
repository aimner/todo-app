import React, { FC } from 'react'


type ButtonPropsType = {
    text: string
    callback: () => void
    classname: string
    type: "button" | "submit" | "reset"
}

export const Button: FC<ButtonPropsType> = ({ callback, text, classname }) => {
    const onClickHandler = () => {
        callback()
  } 

  return (
      <button onClick={onClickHandler} className={classname} type='button'>{text}</button>
  )
}

