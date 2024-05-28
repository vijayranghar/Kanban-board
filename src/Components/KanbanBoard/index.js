import Column from "../Column";

import {
    STATUS_TYPE,
    PRIORITY_TYPE,
    PRIORITY,
    STATUS,
    USER,
} from "../../constants/";
import "./style.css";

export default function KanbanBoard({
    users,
    groupingType,
    getFilteredTickets,
}) {
    function renderColumns() {
        switch (groupingType) {
            case STATUS:
                return STATUS_TYPE.map((title, index) => (
                    <Column
                        title={title}
                        key={index}
                        groupingType={groupingType}
                        tickets={getFilteredTickets(title)}
                    />
                ));
            case PRIORITY:
                return Object.keys(PRIORITY_TYPE).map((title, index) => (
                    <Column
                        title={title}
                        key={index}
                        groupingType={groupingType}
                        tickets={getFilteredTickets(title)}
                    />
                ));
            case USER:
                return users.map(({ name, id, available }, index) => (
                    <Column
                        title={name}
                        key={index}
                        groupingType={groupingType}
                        tickets={getFilteredTickets(id)}
                        available={available}
                    />
                ));
            default:
                return null;
        }
    }
    return <div className="column-wrapper">{renderColumns()}</div>;
}
