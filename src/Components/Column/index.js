import Ticket from "../Ticket";

import { getInitials } from "../../utils/index";

import { ICON } from "../../constants";
import iconDot from "../../assets/3-dot-menu.svg";
import iconAdd from "../../assets/add.svg";
import "./style.css";

export default function Column({
    title,
    tickets,
    groupingType,
    available = false,
}) {
    const assignedTicketsCount = tickets.length;
    const iconUrl = ICON[title] ? (
        <img src={ICON[title]} alt={title} />
    ) : (
        <span className="user-initial">
            {getInitials(title).toUpperCase()}
            {available ? (
                <span className="status" />
            ) : (
                <span className="status offline" />
            )}
        </span>
    );
    const renderTickets = () => {
        return tickets.map((ticket, index) => (
            <Ticket key={index} ticket={ticket} groupingType={groupingType} />
        ));
    };

    return (
        <div className="column-item">
            <div className="column-title-wrapper">
                <div className="column-title-count">
                    {iconUrl}
                    <span className="column-title">{title}</span>
                    <span className="column-count">{assignedTicketsCount}</span>
                </div>
                <div className="column-title-icon-wrapper">
                    <img src={iconAdd} alt="icon add" />
                    <img src={iconDot} alt="icon dot" />
                </div>
            </div>
            <div>{renderTickets()}</div>
        </div>
    );
}
