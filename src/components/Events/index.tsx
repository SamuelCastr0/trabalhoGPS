import { Box, Center, Grid } from "@chakra-ui/react";
import { Calendar } from "@/components";

function Events() {
  return (
    <Box alignItems="center">
      <Center m={50} fontSize="36px" color="brand.200" as="b">
        EVENTOS
      </Center>
      <Center>
        <Grid
          templateColumns="1fr 1fr"
          width="70%"
          alignItems="center"
          gap="40px"
        >
          <Center
            background="white"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="24px"
            width="100%"
            height="100%"
            p={50}
          >
            <Box as="p" color="gray.600" fontSize="20px">
              Procure no{" "}
              <Box as="span" color="brand.200">
                calendário
              </Box>{" "}
              ao lado pelas datas em que haverá Vesperata.
            </Box>
          </Center>
          <Calendar />
        </Grid>
      </Center>
    </Box>
  );
}

export default Events;
