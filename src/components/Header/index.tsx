import { Box, Button, Center, Stack, Text, VStack } from "@chakra-ui/react";
import { DateTime } from "luxon";

const menu = [
  {
    title: "Eventos",
    onClick: () => {
      const element = document.getElementById("events");
      element?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    title: "Sobre",
    onClick: () => {
      const element = document.getElementById("about");
      element?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    title: "Turismo",
    onClick: () => {
      const element = document.getElementById("tourism");
      element?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    title: "Contato",
    onClick: () => {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

function Header() {
  return (
    <Box p="4">
      <Center>
        <Stack direction="row" spacing={6} align="center">
          {menu.map((row) => (
            <Button onClick={row.onClick} variant="link">
              {row.title}
            </Button>
          ))}
        </Stack>
      </Center>
    </Box>
  );
}

export default Header;
