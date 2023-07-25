import React, { useEffect, useState } from 'react'
import expensesStore from '../stores/expensesStore'
import Expense from './Expense'


function ExpenseList() {
  const { expenses } = expensesStore()
  const [gain,setGain] = useState(0)
  const [loss,setLoss] = useState(0)

  useEffect(() => {
    setGain(0)
    setLoss(0)
    expenses.forEach((expense) => {
      if(expense.amount < 0) {
        setLoss((loss) => {
          return loss - expense.amount
        })
      }
      else if(expense.amount > 0) {
        setGain((gain) => {
          return gain + expense.amount
        })
      }
    })
  },[expenses])

  return (
    <div>
      <h2>Expense List</h2>
      {gain} - {loss} = {gain-loss}
      {expenses.length > 0 && expenses.map((expense) => {
        return (<Expense key={expense.id} expense={expense}/>)
      })}
    </div>
  )
}

export default ExpenseList