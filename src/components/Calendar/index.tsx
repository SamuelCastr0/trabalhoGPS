import http from "@/api";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useState } from "react";
import useSWR from "swr";

export interface EventProps {
  id: number;
  title: string;
  date: string;
  start: string;
  end: string;
  summary: string;
}

function Calendar() {
  const [calendar, setCalendar] = useState(DateTime.now());
  const [selectedEvent, setSelectedEvent] = useState<EventProps>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: events } = useSWR("api/event", () =>
    http.get<Array<EventProps>>("event/").then((res) => res.data)
  );

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

  const handleOpen = (event: EventProps) => {
    setSelectedEvent(event);
    onOpen();
  };

  return (
    <>
      <VStack
        background="white"
        borderRadius="24px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        p={50}
        gap="4"
      >
        <Flex justify="space-between" align="end" width="100%">
          <Box fontSize="2rem">{calendar.monthLong}</Box>
          <Box fontSize="2.5rem">{calendar.year}</Box>
        </Flex>
        <Grid templateColumns="repeat(7, 1fr)" gap="1rem" width="100%">
          <>
            {Array.from(Array(calendar.daysInMonth).keys()).map((index) => {
              const day = index + 1;
              const currentDate = DateTime.local(
                calendar.year,
                calendar.month,
                day
              );
              const event = events?.find((event) =>
                currentDate.hasSame(DateTime.fromISO(event?.date), "day")
              );

              return event ? (
                <Button
                  borderRadius="100%"
                  maxW="2.5rem"
                  alignSelf="center"
                  justifySelf="center"
                  background="brand.200"
                  color="white"
                  key={day}
                  onClick={() => handleOpen(event)}
                >
                  {day}
                </Button>
              ) : (
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  key={day}
                >
                  {day}
                </GridItem>
              );
            })}
          </>
        </Grid>
        <Flex justify="space-between" width="100%">
          <Button
            variant="ghost"
            background="brand.200"
            color="white"
            onClick={handlePrevious}
          >
            Prev
          </Button>
          <Button
            variant="ghost"
            background="brand.200"
            color="white"
            onClick={handleNext}
          >
            Next
          </Button>
        </Flex>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backgroundColor="rgba(0, 0, 0, .8)" />
        <ModalContent
          alignSelf="center"
          justifySelf="center"
          borderRadius="24px"
          padding="1rem"
          backgroundColor="#F2F2F2"
        >
          <ModalHeader
            fontSize="32px"
            textTransform="uppercase"
            color="brand.200"
          >
            Evento nesta data
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="1rem">
            <Box fontWeight="bold">{selectedEvent?.title}</Box>
            <Box>{selectedEvent?.summary}</Box>
            <Box>
              Horário: {selectedEvent?.start} até {selectedEvent?.end}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Calendar;
