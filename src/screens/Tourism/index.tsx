import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DateTime } from "luxon";

import { Image } from "@chakra-ui/react";

import CachoeiraSentinela from "./../../assets/cachoeiraSentinela.svg";
import Catedral from "./../../assets/catedralDiamantina.svg";
import Calendar from "../../components/Calendar";
import Events from "../Events";
import About from "../About";

function Tourism() {
  return (
    <Box alignItems="center">
      <Center m={50} fontSize="36px" color="#FF7B7B" as="b">
        TURISMO
      </Center>

      <Center>
        <Box width="70%" bg="white" borderRadius="25" boxShadow="dark-lg">
          <Flex>
            <Box p="10">
              <Image width="900px" src={Catedral} objectFit="cover" />
            </Box>
            <Spacer />
            <Box p="10">
              <Image width="900px" src={CachoeiraSentinela} objectFit="cover" />
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}

export default Tourism;
