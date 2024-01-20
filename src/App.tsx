import './App.css'

function App() {

  return (
   <div>
    <div className="background">
      <div className="login-form">
        <p className="title">Login form</p>
        <div className="wrap-button">
          <button className='login'>Login</button>
          <button className='signup'>Signup</button>
        </div>
          <div className="wrap-input">
            <input type="email" name="" id="" placeholder='email address'/>
            <input type="email" name="" id="" placeholder='password'/>
        </div>
        <p className='forgot-password'>Forgot password</p>
        <button className="submit-button">Login</button>
          <p className="not-a-number">Not a number? <span className='text-color'>Signup now</span></p>
      </div>
    </div>
   </div>
  )
}

export default App
