import React from 'react'
import expensesStore from '../stores/expensesStore'

function Expense(props) {
  const { deleteExpense } = expensesStore()

  return (
    <div>
      {props.expense.title} - {props.expense.amount}
      <button onClick={() => deleteExpense(props.expense.id)}>Delete</button> 
    </div>
  )
}

export default Expense