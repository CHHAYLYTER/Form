import React from 'react'

const SubmitType = (Step) => {
    const { data } = Step;
    const listItems = Object.entries(data).map(([key, value]) => (
        <li>
            <strong>{key}:</strong> {value}
        </li>
    ));
  return (
    <div>
        <ul>
            {listItems}
            <input type="submit"  value="Back" className='btn'/>
        </ul>

    </div>
  )
}

export default SubmitType