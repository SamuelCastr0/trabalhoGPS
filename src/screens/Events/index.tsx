import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";

import Calendar from "../../components/Calendar";

function Events() {
  return (
    <Box alignItems="center" id="events">
      <Box>
        <Center m={50} fontSize="36px" color="#FF7B7B" as="b">
          EVENTOS
        </Center>

        <Calendar />
      </Box>
    </Box>
  );
}

export default Events;
