import React from 'react'
import style from './waveButton.module.css'

export const WaveButton = () => {
  return (
    <>
      <div className={style.container}>
        <a href='/' className={style.wvBtn}>
        <span>нажимай</span>
        <div className={style.liquid}></div>
        </a>
      </div>
    </>
  )
}
