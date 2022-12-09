import { Flex } from "@chakra-ui/react";
import { DateTime } from "luxon";

function Calendar() {
  const { daysInMonth, day, month, monthLong } = DateTime.now();
  console.log(daysInMonth, day, month, monthLong);

  // call api

  return <Flex>Calendar</Flex>;
}

export default Calendar;
