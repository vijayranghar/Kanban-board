import backlogIcon from '../assets/backlog.svg'
import doneIcon from '../assets/done.svg'
import todoIcon from '../assets/to-do.svg'
import cancelledIcon from '../assets/cancelled.svg'
import inProgressIcon from '../assets/in-progress.svg'
import noPriorityIcon from '../assets/no-priority.svg'
import lowPriorityIcon from '../assets/img-low-priority.svg'
import mediumPriorityIcon from '../assets/img-medium-priority.svg'
import highPriorityIcon from '../assets/img-high-priority.svg'
import urgentPriorityIcon from '../assets/urgent-priority-colour.svg'

export const API_ENDPOINT="https://api.quicksell.co/v1/internal/frontend-assignment"
export const STATUS = "Status";
export const USER = "User";
export const PRIORITY = "Priority";
export const TITLE ="Title";
export const STATUS_TYPE = ["Backlog","Todo","In progress", "Done","Canceled"]

export const PRIORITY_TYPE = {
  'Urgent': 0,
  'High': 1,
  'Medium': 2,
  'Low': 3,
  "No priority": 4,
};
export const PRIORITY_TYPE_ORDER = {
    0:'Urgent',
    1:'High',
    2:'Medium',
    3:'Low',
    4:"No priority",
  };
export const GROUPING_TYPES = [STATUS, USER, PRIORITY];
export const ORDERING_TYPES = ["Priority", "Title"];
export const ICON = {
  [STATUS_TYPE[0]]:backlogIcon,
  [STATUS_TYPE[1]]:todoIcon,
  [STATUS_TYPE[2]]:inProgressIcon,
  [STATUS_TYPE[3]]:doneIcon,
  [STATUS_TYPE[4]]:cancelledIcon,
  [PRIORITY_TYPE_ORDER[0]]:urgentPriorityIcon,
  [PRIORITY_TYPE_ORDER[1]]:highPriorityIcon,
  [PRIORITY_TYPE_ORDER[2]]:mediumPriorityIcon,
  [PRIORITY_TYPE_ORDER[3]]:lowPriorityIcon,
  [PRIORITY_TYPE_ORDER[4]]: noPriorityIcon,
}