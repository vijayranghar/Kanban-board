import React from "react";

export default function DropDown({handleChange, options,defaultSelected}) {
    let renderOptions = options.map((option,index) => (
        <option key={`${index}-${option}`}>{option}</option>
    ))
    return (
        <select value={defaultSelected} onChange={(e) => handleChange(e.target.value)}>
            {renderOptions}
        </select>
    )
}