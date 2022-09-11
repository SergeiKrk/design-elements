import React from 'react'
import style from './awesomeButton.module.css'

export const AwesomeButton = () => {
  return (
    <>
      <div className={style.container}>
        <a href='/' className={style.awsBtn}><span>нажимай</span></a>
      </div>
    </>
  )
}
