import React from 'react'

const Step3 = (step) => {
  const{ data, handleChange, next, back } =step;
  return (
    <div className='login-form-container'>
    <form>
        <h3>Set Password</h3>
        <h4>Require information to account creates</h4>
            

           <label htmlFor="Password"></label>
            <input 
            type='password' 
            name="Password"
            value={data.Password}
            onChange={handleChange}
            placeholder="Password" 
            class="box"/>

            <label htmlFor="Repeat_Password"></label>
            <input 
            type="password" 
            name="Repeat_Password"
            value={data.Repeat_Password}
            onChange={handleChange} 
            placeholder="Repeat Password"  
            class="box"/>

            <div className="remember">
              <input type="checkbox" name="" id="remember-me" />
              <label for="remember-me">remember me</label>
            </div>
            <input type="submit" onClick={back} value="Back" className='btn'/>
            <input type="submit" onClick={next} value="Continue" className='btn'/>
            <p>forget password? <a href="#">click here</a></p>
            <p>don't have an account? <a href="#">create one</a></p>
        </form>
      </div>
  )
}

export default Step3