import React from 'react'

const Account = () => {

  
  return (
    <div className="account">
      <h1>soko</h1>
      <p>Login</p>
      <p>
        Please Login to view your Orders
        Select Country Code and Enter Your phone number
      </p>
      <div className="number">
        <span>Phone Number</span>
        <select name="number" id="">
          <option value="+256">+256</option>
          <option value="+255">+255</option>
          <option value="+254">+254</option>
          <option value="+250">+250</option>
          <option value="+254">+254</option>
          <option value="+253">+253</option>
          <option value="+27">+27</option>
        </select>
        <input type="number" placeholder="00 00000000"/>
      </div>
      <a href="">
       <button>Send verification code</button>
      </a>
    </div>
    
  )
}

export default Account;