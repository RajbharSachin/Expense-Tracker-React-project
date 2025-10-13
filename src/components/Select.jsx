import React from 'react'

// loop from passed Array to options  &  hidden Default label
export default function Select({label, id, name, value, onChange, options, defaultOption, error}) {
  return (
    <div className="input-container">
          <label htmlFor={id}>{label}</label>
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            // ref={categoryRef}
          >
            { // is passed then its true   & Only then will Show
              defaultOption && (
                <option value="" hidden>
                  {defaultOption}
                </option>
              )
            }
            {
              options.map((option, i) => (
                // index i is ok here   As Not Dynamic Changing List
                <option key={i} value= {option}>{option}</option>
              ))
            }
          </select>
          <p className='error'>*{error}</p>
    </div>
  )
}
