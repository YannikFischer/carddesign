import React from 'react'
import "./Card.css";

const Card = (props) => {
    return (
        <div className="main">
            <div className="card">
                <div className="infos">
                    <div className="name">
                        <div className="firstName">
                            <h1>{props.fname}</h1>
                        </div>
                        <div className="lastName">
                            <h1>{props.lname}</h1>
                        </div>
                    </div>
                    <div className="age">
                        <h2>{props.age}</h2>
                    </div>
                </div>
                <div className="role">
                    <h4>{props.role}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card