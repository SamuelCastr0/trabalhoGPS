import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import imageVesperata from "@/assets/imageVesperata.jpeg";
import { Events, About, Contact, Tourism, Footer } from "@/components";

function Home() {
  return (
    <Box alignItems="center" backgroundColor="#F2F2F2">
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
