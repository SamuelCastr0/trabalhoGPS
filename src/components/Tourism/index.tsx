import { Box, Center, Flex, Spacer } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import CachoeiraSentinela from "@/assets/cachoeiraSentinela.svg";
import Catedral from "@/assets/catedralDiamantina.svg";

function Tourism() {
  return (
    <Box alignItems="center">
      <Center m={50} fontSize="36px" color="brand.200" as="b">
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
