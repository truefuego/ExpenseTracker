import React, { useState } from 'react'
import expensesStore from '../stores/expensesStore'
import styles from '../styles/AddExpense.module.css'

function AddExpense() {
  const { createExpense } = expensesStore()
  const [expenseTitle,setExpenseTitle] = useState('')
  const [expenseAmount,setExpenseAmount] = useState('')
  const [toggle,setToggle] = useState(false)
  
  const handleToggle = (e) => {
    e.preventDefault()
    setToggle((prev) => !prev)
  }

  const handleNewExpense = (e) => {
    e.preventDefault()
    const amount = parseInt(expenseAmount)
    if(expenseTitle.trim().length === 0 || amount === 0) {
      setExpenseTitle('')
      setExpenseAmount('')
      alert("Enter valid data")
      return;
    }

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    const newExpense = {
      id: Math.ceil(Math.random() * 1000000000),
      day,
      month,
      year,
      date: day + '-' + month + '-' + year,
      title: expenseTitle,
      amount: toggle? amount: -amount,
    }

    createExpense(newExpense)

    setExpenseTitle('')
    setExpenseAmount('')
  }

  return (
    <div className={styles.container}>
      <h2>Add New</h2>
      <form className={styles.input_container}>
        <input className={styles.input} name="title" type="text" value={expenseTitle} placeholder='Title' onChange={(e) => setExpenseTitle(e.target.value)}/>
        <input className={styles.input} name="amount" type="number" value={expenseAmount} placeholder='Amount' onChange={(e) => setExpenseAmount(e.target.value)}/>
        <div className={styles.buttons}>
          {
            toggle ? (<button className={styles.btn} onClick={handleNewExpense}>Earned</button>) : (<button className={styles.btn} onClick={handleNewExpense}>Spent</button>)
          }
          <button className={styles.btn} onClick={handleToggle}>Swap</button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense