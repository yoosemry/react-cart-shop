import React, { useState } from 'react'

function Payment() {

    let initial = {
        evcplus : false,
        sahal : false,
        zaad : false
    }

    const [phone,setPhone] =useState("");
    const [payment , setPayment] = useState(initial)


  return (
    <div>
    <h2>Pay With</h2>

    <div className="payment-cards">
        <div
            className={`payment-card ${payment.zaad && 'selected'}`} onClick={()=> setPayment({...Payment, zaad:true})}>
            <h3>Zaad Service</h3>
        </div>
        <div
            className={`payment-card ${payment.sahal && 'selected'}`} onClick={()=> setPayment({...Payment, sahal:true})}>
            <h3>Sahal Service</h3>
        </div>
        <div
            className={`payment-card ${payment.evcplus && 'selected'}`} onClick={()=> setPayment({...Payment, evcplus : true})}>
            <h3>Evc Plus</h3>
        </div>
        <form >
            <input
                className="form-control"
                type="number"
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