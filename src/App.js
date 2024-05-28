import FilterBar from "./Components/FilterBar";
//import Column from "./Components/Column";
import KanbanBoard from "./Components/KanbanBoard";
import { Loader } from "./Components/Loader";
import useFetch from "./hooks/useFetch";
import useLocalStorageHook from "./hooks/useLocalStorage";

import {
  API_ENDPOINT,
  GROUPING_TYPES,
  ORDERING_TYPES,
  USER,
  PRIORITY,
  PRIORITY_TYPE,
  TITLE,
} from "./constants";
import "./App.css";

function App() {
  const [groupingType, setGroupingType] = useLocalStorageHook(
    "groupingType",
    GROUPING_TYPES[0]
  );
  const [orderingType, setOrderingType] = useLocalStorageHook(
    "orderingType",
    ORDERING_TYPES[0]
  );
  const { isLoading, isError, data } = useFetch(API_ENDPOINT);
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <h3 style={{ color: "red", textAlign: "center" }}>
        Something went wrong! Please try after some time.
      </h3>
    );
  let tickets = [...data.tickets];
  let users = [...data.users];

  function sortTickets(filteredTickets) {
    switch (orderingType) {
      case PRIORITY:
        return [...filteredTickets].sort((a, b) => a.priority - b.priority);
      case TITLE:
        return [...filteredTickets].sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });
      default:
        return filteredTickets;
    }
  }

  function getFilteredTickets(title) {
    let lowerCaseGroupingType = groupingType.toLowerCase();
    let filteredTickets = [];
    switch (groupingType) {
      case PRIORITY:
        filteredTickets = tickets.filter((ticket) => {
          if (ticket.priority === PRIORITY_TYPE[title]) return ticket;
        });
        return sortTickets(filteredTickets);
      case USER:
        filteredTickets = tickets.filter((ticket) => {
          if (ticket.userId === title) return ticket;
        });
        return sortTickets(filteredTickets);
      default:
        filteredTickets = tickets.filter(
          (ticket) => ticket[lowerCaseGroupingType] === title
        );
        return sortTickets(filteredTickets);
    }
  }

  return (
    <>
      <FilterBar
        setGroupingType={setGroupingType}
        groupingTypeOptions={GROUPING_TYPES}
        setOrderingType={setOrderingType}
        orderingTypeOptions={ORDERING_TYPES}
        selectedGroupingOption={groupingType}
        selectedOrderingOption={orderingType}
      />
      <div className="container">
        <KanbanBoard
          users={users}
          groupingType={groupingType}
          getFilteredTickets={getFilteredTickets}
        />
      </div>
    </>
  );
}

export default App;
