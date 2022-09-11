import React from 'react'
import style from './clearButton.module.css'

export const ClearButton = () => {
  return (
    <>
      <div className={style.container}>
        <a href='/' className={style.clrBtn}><span>нажимай</span></a>
      </div>
    </>
  )
}
