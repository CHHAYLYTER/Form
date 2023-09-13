import React from 'react'

const Step2 = (step) => {
  const{ data, handleChange, next, back } = step;
  return (
    <div className='login-form-container'>
        <form>
        <h3>Sign Up</h3>
        <h4>Require information to account creates</h4>
            
            <label htmlFor="Email"></label>
            <input 
              type='email' 
              name="Email" 
              value={data.Email}
              onChange={handleChange}
              placeholder="Email Address" 
              class="box"
            />

            <label htmlFor="Alternate_Email"></label>
            <input 
            type="email" 
            name="Alternate_Email"
            value={data.Alternat_Email}
            onChange={handleChange}
            placeholder="Alternate Email"  
            class="box"
            />

            <div className="remember">
              <input type="checkbox" name="" id="remember-me" />
              <label for="remember-me">remember me</label>
            </div>
            <input type="submit" onClick={back} value="Back" className='btn'/>
            <input type="submit" onClick={next} value="Continue" className='btn'/>

        </form>
      </div>
  )
}
export default Step2