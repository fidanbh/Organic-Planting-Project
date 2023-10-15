import React from 'react'
import styles from './blockLine.style.module.scss'

const BlockLine = () => {
  return (
    <div>
        <div className={styles.stepBlockFlex}>
            <div className={styles.stepBlock}>
                <div className={styles.stepInside}>
                    <h2>Shopping Cart</h2>
                    <span>01</span>
                </div>
            </div>
            <div className={styles.stepBlock}>
                <div className={styles.stepInside}>
                    <h2>Check Out</h2>
                    <span>02</span>
                </div>
            </div>
            <div className={styles.stepBlock}>
                <div className={styles.stepInside}>
                    <h2>Complete Order</h2>
                    <span>03</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlockLine