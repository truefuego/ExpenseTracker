import React from 'react'
import expensesStore from '../stores/expensesStore'
import Expense from './Expense'
import styles from '../styles/ExpenseList.module.css'

function ExpenseList() {
  const { expenses } = expensesStore()

  return (
    <div>
      <div className={styles.container}>
        {expenses.length > 0 && expenses.map((expense) => {
          return (<Expense key={expense.id} expense={expense}/>)
        })}
      </div>
    </div>
  )
}

export default ExpenseList