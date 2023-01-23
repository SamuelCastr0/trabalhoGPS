import { Box, Center, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box alignItems="center" bg="brand.200" height="500px" id="about">
      <Box>
        <Center mt={50} fontSize="36px" as="b" p={50} color="white">
          SOBRE A VESPERATA
        </Center>
        <Center>
          <Box width="70%" bg="white" borderRadius="25" boxShadow="dark-lg">
            <Box>
              <Text p={50} fontSize="20px" color="gray.600">
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
