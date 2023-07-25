import React, { useState } from 'react'
import expensesStore from '../stores/expensesStore'

function AddExpense() {
  const { createExpense } = expensesStore()
  const [expenseTitle,setExpenseTitle] = useState('')
  const [expenseAmount,setExpenseAmount] = useState('')

  const handleNewExpense = (e) => {
    e.preventDefault()
    const amount = parseInt(expenseAmount)
    if(expenseTitle.trim().length === 0 || amount === 0) {
      setExpenseTitle('')
      setExpenseAmount('')
      alert("Enter valid data")
      return;
    }

    const newExpense = {
      id: Math.ceil(Math.random() * 1000000000),
      title: expenseTitle,
      amount: amount,
    }

    createExpense(newExpense)

    setExpenseTitle('')
    setExpenseAmount('')
  }

  return (
    <div>
      <h2>Create Expense</h2>
      <form>
        <input name="title" type="text" value={expenseTitle} placeholder='Expense Title' onChange={(e) => setExpenseTitle(e.target.value)}/>
        <input name="amount" type="number" value={expenseAmount} placeholder='Amount' onChange={(e) => setExpenseAmount(e.target.value)}/>
        <button onClick={handleNewExpense}>Create Expense</button>
      </form>
    </div>
  )
}

export default AddExpense