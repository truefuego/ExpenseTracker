import React from 'react'
import expensesStore from '../stores/expensesStore'
import styles from '../styles/Expense.module.css'

function Expense(props) {
  const { deleteExpense } = expensesStore()

  return (
    <div className={props.expense.amount > 0 ? styles.cardGain : styles.cardLoss}>
      <div className={styles.cardHeading}>
        {props.expense.title}
      </div>
      <div className={styles.cardDescription}>
        {props.expense.date}
      </div>
      <div className={styles.cardDescription}>
        {Math.abs(props.expense.amount)} ₹
      </div>
      <button className={styles.cardButton} onClick={() => deleteExpense(props.expense.id)}>Delete</button> 
    </div>
  )
}

export default Expense