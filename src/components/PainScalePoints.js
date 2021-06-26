import React from 'react'

export default function PainScalePoints({ incrementPain, decrementPain, pain }) {
    return (
        <div className="pain-container">
            <h3 className="pain">
                {" "}
                Pain Scale {pain}
            <button className="button" onClick={incrementPain}>
                +
            </button>
            <button className="button" onClick={decrementPain}>
                -
            </button>{" "}
            </h3>
        </div>
    )
}
