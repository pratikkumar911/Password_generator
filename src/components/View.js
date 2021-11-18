import React from 'react'

function View(props) {
    const {password, generate} = props
    return (
        <>
        <div className="pwd-container">
            <div className="row">
                <h2 className="password">{password}</h2>
                <div className="row buttons">
                    <button className="btn btn-red" onClick={(e)=> {
                        navigator.clipboard.writeText(password);
                        }}
                    >
                        Copy
                    </button>
                    <button className="btn btn-blue" onClick={(e)=> {generate();}}>
                        Generate
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default View
