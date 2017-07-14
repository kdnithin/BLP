import Event  from './Event'
import React from 'react'
let LoanReqForm=(props)=>
    (
        <div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label >Loan Amount</label>
                                        <input className="form-control"  id="loan_amnt" placeholder="Loan Amount" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label >Term(Months)</label>
                                        <input className="form-control" id="term" placeholder="Time of repayment in months" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label >Employment Duration</label>
                                        <input className="form-control" id="emp_length" placeholder="Employment in Years" ></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Home OwnerShip</label>
                                        <input className="form-control" id="home_ownership" placeholder="Home Ownership" ></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Annual Income</label>
                                        <input className="form-control" id="annual_inc" placeholder="Annual Salary of the borrower in Dollars" type="email"></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Loan Purpose</label>
                                        <input className="form-control" id="purpose" placeholder="Purpose of the Loan" type="email"></input>
                                    </div>
                                     <div className="form-group">
                                        <label >State</label>
                                        <input className="form-control" id="addr_state" placeholder="Location of the borrower" type="email"></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Debt-to-Income</label>
                                        <input className="form-control" id="dti" placeholder="Debt-to-Income ratio of the borrower" type="email"></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Dues</label>
                                        <input className="form-control" id="delinq_2yrs" placeholder="The number of time the borrower had been 30+ days past due on a payment in the past 2 years" ></input>
                                    </div>
                                     <div className="form-group">
                                        <label >revolving line utl rate</label>
                                        <input className="form-control" id="revol_util" placeholder="Borrower's revolving line utilization rate"></input>
                                    </div>
                                     <div className="form-group">
                                        <label >Bad Loan</label>
                                        <input className="form-control" id="bad_loan" placeholder="Bad Loan"></input>
                                    </div>
                                </div>     
                                
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary" onClick={()=>props.registerOnClick(this)} >Submit</button>
                                </div>   
        </div>  
           
)

 
export default LoanReqForm
