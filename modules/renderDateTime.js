// import DateTime module from luxon
import { DateTime } from '../node_modules/luxon/src/luxon.js';
// dateTime arrow function which return current date and time
 const dateTime = () => DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  // export dateTime module
  export default dateTime;