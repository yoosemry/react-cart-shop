import React, { useState } from 'react'

function Payment() {

    const [phone,setPhone] =useState("")


  return (
    <div>
    <h2>Pay With</h2>

    <div className="payment-cards">
        <div
            className="payment-card">
            <h3>Zaad Service</h3>
        </div>
        <div
            className="payment-card">
            <h3>Sahal Service</h3>
        </div>
        <div
            className="payment-card">
            <h3>Evc Plus</h3>
        </div>
        <form >
            <input
                className="form-control"
                placeholder="2526......"
                onChange={(e) => setPhone(e.target.value)}
            />
            <button className="btn-proceed" disabled>
               Process
            </button>
        </form>
    </div>
</div>
  )
}

export default Payment