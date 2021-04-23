import React from 'react'

export default function Form() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" name="city" autoComplete="off"/>
                </div>
                <div className="col-md-6 mt-md-0 text-md-left">
                    <button className="btn btn-primary">Get Weather</button>
                </div>
            </div>
        </div>
    )
}
