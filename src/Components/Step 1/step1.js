import React from 'react'

const Step1 = (Step) => {
  const{data, handleChange, next} = Step;
  return (
    <div className='login-form-container'>
        <form>
        <h3>Sign Up</h3>
        <h4>Require information to account creates</h4>

          <label htmlFor="Frist_Name"></label>
            <input 
            type="text" 
            name="Frist_Name"
            value={data.Frist_Name}
            placeholder="Enter your Frist Name" 
            class="box"
            onChange={handleChange}
            />

            <label htmlFor="Last_Name"></label>
            <input 
            type="text"
            name="Last_Name"
            value={data.Last_Name}
            placeholder="Enter your Last Name"
            class="box"
            onChange={handleChange}
            />


            <div className="remember">
              <input type="checkbox" name="" id="remember-me" />
              <label for="remember-me">remember me</label>
            </div>

            <input type="submit" onClick={next} value="Continue" className='btn'/>


        </form>
      </div>
  )
}

export default Step1