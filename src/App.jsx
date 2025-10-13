import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  // uplifting state
  const [expense, setExpense] = useLocalStorage('expense', {
    title: '',
    category: '',
    amount: '',
    // email: '',
  })

  // Replaced useState with     useLocalStorage hook having State & persists Local Storage as well
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData) 
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', '')

  // const [localData, setLocalData] = useLocalStorage('myNum', [1, 2, 3])

  return (
    <main>
      <h1
        // onClick={() => {
        //   setLocalData((prevState) => [...prevState, 4, 5, 6])
        // }}
      >Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
          
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  )
}

export default App
