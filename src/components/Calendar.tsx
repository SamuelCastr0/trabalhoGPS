import { Box, Button, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useState } from "react";

function Calendar() {
  const [calendar, setCalendar] = useState(DateTime.now());

  const handlePrevious = () => {
    setCalendar((prev) => {
      const shouldDecreaseYear = prev.month === 1;
      const year = shouldDecreaseYear ? prev.year - 1 : prev.year;
      const month = shouldDecreaseYear ? 12 : prev.month - 1;

      return DateTime.fromObject({
        year,
        month,
      });
    });
  };

  const handleNext = () => {
    setCalendar((prev) => {
      const shouldIncreaseYear = prev.month === 12;
      const year = shouldIncreaseYear ? prev.year + 1 : prev.year;
      const month = shouldIncreaseYear ? 1 : prev.month + 1;

      return DateTime.fromObject({
        year,
        month,
      });
    });
  };

  return (
    <VStack maxWidth="20rem">
      <Box>
        {calendar.monthLong} de {calendar.year}
      </Box>
      <Flex justifyContent="space-between" width="100%">
        <Button onClick={handlePrevious}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap="1rem" width="100%">
        {Array.from(Array(calendar.daysInMonth).keys()).map((index) => {
          const day = index + 1;

          return <GridItem key={day}>{day}</GridItem>;
        })}
      </Grid>
    </VStack>
  );
}

export default Calendar;
