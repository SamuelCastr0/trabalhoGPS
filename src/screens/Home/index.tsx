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
import { DateTime } from "luxon";

import { Image } from "@chakra-ui/react";

import imageVesperata from "./../../assets/imageVesperata.jpeg";
import Calendar from "../../components/Calendar";
import Events from "../Events";
import About from "../About";
import Tourism from "../Tourism";
import Contact from "../Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <Box alignItems="center">
      <Box>
        <Image width="100%" src={imageVesperata} objectFit="cover" />
      </Box>

      <Events />
      <About />
      <Tourism />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Home;
