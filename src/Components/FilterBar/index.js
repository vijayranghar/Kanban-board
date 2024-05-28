import React, { useState, useRef, useEffect } from "react";
import DropDown from "../DropDown";
import "./style.css";
export default function FilterBar({
  setGroupingType,
  groupingTypeOptions,
  setOrderingType,
  orderingTypeOptions,
  selectedGroupingOption,
  selectedOrderingOption,
}) {
  const dropdownRef = useRef()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isDropdownOpen])

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const renderFilterBarDropdown = isDropdownOpen ? (
    <div className="filterbar-dropdown-wrapper" ref={dropdownRef}>
      <div className="dropdown-wrapper">
        <label>Grouping</label>
        <div>
          <DropDown
            handleChange={setGroupingType}
            options={groupingTypeOptions}
            defaultSelected={selectedGroupingOption}
          />
        </div>
      </div>
      <div className="dropdown-wrapper">
        <label>Ordering</label>
        <div>
          <DropDown
            handleChange={setOrderingType}
            options={orderingTypeOptions}
            defaultSelected={selectedOrderingOption}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
  return (
    <div className="filterbar-wrapper">
      <div className="container">
        <button className="filterbar-button" onClick={handleClick}>
         <span className="filterbar-icon"></span>
          Display
        <span className="filterbar-dropdown-icon" style={{transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"}}/>
        </button>
        {/* Make it a component */}
        {renderFilterBarDropdown}
      </div>
    </div>
  );
}
