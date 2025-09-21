import React, { useEffect, useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [amount, setAmount] = useState('')
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  // const myRef = useRef(0) // persists old refrence value   but not re-renders it

  // to render first   then console 
  // useEffect(() => {
  //   console.log(myRef.current.value);
  // })
  // let myNum = 0


  // const titleRef = useRef()
  // const categoryRef = useRef()
  // const amountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID()
    // });


    // updating state in case of Controlled React Unidirectional Data Flow to update UI &   then set it to empty
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //     id: crypto.randomUUID()
    //   },
    // ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() }
    // setExpenses((prevState) => [...prevState, expense])
    // e.target.reset()

    // const expense = { title, category, amount, id: crypto.randomUUID() }
    // setExpenses((prevState) => [...prevState, expense])
    // setTitle('')
    // setCategory('')
    // setAmount('')
  }

  // const getFormData = (form) => {
  //   const formData = new FormData(form)
  //   const data = {}
  //   // Display the values
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value
  //   }
  //   return data
  // }

  return (
    <>
      {/* <h1>
        myRef = {myRef.current}, myNum = {myNum}
      </h1> */}
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            // ref={titleRef}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
            // ref={categoryRef}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
            // ref={amountRef}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  )
}
