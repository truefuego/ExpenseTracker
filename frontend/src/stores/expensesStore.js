import { create } from 'zustand'
import { devtools, persist} from 'zustand/middleware'

const expenseStore = (set) => ({
    expenses: [],
    
    createExpense: (expense) => {
        set((state) => ({
            expenses: [expense, ...state.expenses]
        }))
    },

    deleteExpense: (ExpenseId) => {
        set((state) => ({
            expenses: state.expenses.filter((expense) => expense.id !== ExpenseId)
        }))
    },
})

const expensesStore = create(
    devtools(
        persist(expenseStore, {
            name: "expenses"
        })
    )
)

export default expensesStore