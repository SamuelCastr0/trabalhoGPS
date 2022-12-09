import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./screen";
import * as colors from "./colors";

const theme = extendTheme({
  colors,
  breakpoints,
  // fonts: {
  //   heading: `'Heading Font Name', sans-serif`,
  //   body: `'Body Font Name', sans-serif`,
  // },
});

export default theme;
