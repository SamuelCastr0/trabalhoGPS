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

function About() {
  return (
    <Box alignItems="center" bg="#FF7B7B" height="500px" id="about">
      <Box>
        <Center mt={50} fontSize="36px" as="b" p={50} color="white">
          SOBRE A VESPERATA
        </Center>

        <Center>
          <Box width="70%" bg="white" borderRadius="25" boxShadow="dark-lg">
            <Box>
              <Text p={50} fontSize="20px" color="#4E4E4E">
                A Vesperata é um evento cultural e artístico que ocorre na Rua
                da Quitanda em Diamantina - MG.
                <br />
                <br />
                Sua origem se deu a partir das práticas musicais tradicionais da
                cidade do século XIX, sendo que quando no período das vésperas,
                os músicos se apresentavam nas sacadas dos casarões para tocar
                para as pessoas que passeavam nas ruas.
              </Text>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default About;
