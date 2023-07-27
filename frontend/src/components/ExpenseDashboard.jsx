import React, { useState, useEffect} from 'react'
import expensesStore from '../stores/expensesStore'
import LastWeekStatistics from './LastWeekStatistics'

function ExpenseDashboard() {
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
      <h1>
        Savings: {gain - loss} ₹
      </h1>
      <h2>
          Earnings: {gain} ₹
      </h2>
      <h2>
         Spent: {loss} ₹
      </h2>
          <LastWeekStatistics />
    </div>
  )
}

export default ExpenseDashboard