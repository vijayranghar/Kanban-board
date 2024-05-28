import React from "react";
import { ICON, PRIORITY, STATUS, PRIORITY_TYPE_ORDER } from "../../constants";
import "./style.css";

export default function Ticket({
    ticket: { id, title, tag, status, priority },
    groupingType,
}) {
    let priorityInText = PRIORITY_TYPE_ORDER[priority];
    const progressIcon =
        groupingType !== STATUS ? (
            <img src={ICON[status]} alt="ticket status icon" />
        ) : (
            ""
        );
    const priorityIcon =
        groupingType !== PRIORITY ? (
            <img src={ICON[priorityInText]} alt="ticket priority icon" />
        ) : (
            ""
        );
    return (
        <div className="ticket-wrapper">
            <h3>{id}</h3>
            <div className="ticker-icon-wrapper">
                {progressIcon}
                <p className="ticket-description">{title}</p>
            </div>
            <div className="ticket-priority-icon">
                {priorityIcon}
                <span className="ticket-tag-name">{tag?.[0]}</span>
            </div>
        </div>
    );
}
