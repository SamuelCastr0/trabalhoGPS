import { Box, Center, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { DateTime } from "luxon";

import { Image } from "@chakra-ui/react";

import Instagram from "./../../assets/instagram.svg";
import Facebook from "./../../assets/facebook.svg";
import Location from "./../../assets/location.svg";

function Contact() {
  return (
    <Box bg="#FF7B7B" height="550px">
      <Center mt={50} fontSize="36px" color="white" as="b" p={50}>
        CONTATO
      </Center>

      <Center>
        <Wrap spacing="30px">
          <WrapItem>
            <Box w="430px" h="200px" bg="white" borderRadius="25">
              <Text p="10">
                Localização: Diamantina - MG,
                <br />
                Rua da Quitanda - Centro.
                <br />
                CEP: 391000-000
                <br />
                Email: vesperata@gmail.com
                <br />
                Telefone: (38) 3531-0000
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Image
              width="430px"
              height="200px"
              src={Location}
              objectFit="cover"
              borderRadius="25"
            />
          </WrapItem>
        </Wrap>
      </Center>
      <Center mt="30">
        <Wrap spacing="30px">
          <WrapItem>
            <Box w="430px" h="80px" bg="white" borderRadius="25">
              <Flex p="7">
                <Image
                  width="25px"
                  height="25px"
                  src={Instagram}
                  objectFit="cover"
                />{" "}
                <Text ml="5">@vesperatadiamantinamg</Text>
              </Flex>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w="430px" h="80px" bg="white" borderRadius="25">
              <Flex p="7">
                <Image
                  width="25px"
                  height="25px"
                  src={Facebook}
                  objectFit="cover"
                />{" "}
                <Text ml="5">vesperata.diamantina.mg</Text>
              </Flex>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
}

export default Contact;
