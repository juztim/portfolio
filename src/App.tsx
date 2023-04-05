import React from "react";
import { Container, createTheme, NextUIProvider, Row } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$purple200",
      primaryLightHover: "$purple300",
      primaryLightActive: "$purple400",
      primaryLightContrast: "$purple600",
      primary: "$purple500",
      primaryBorder: "$purple500",
      primaryBorderHover: "$purple600",
      primarySolidHover: "$purple700",
      primarySolidContrast: "$white",
      primaryShadow: "$purple500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Container>
        <Container>
          <Row justify="space-between" align="center" css={{ width: "100%" }}>
            <h1>JuzTim</h1>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
            </div>
          </Row>
        </Container>
      </Container>
    </NextUIProvider>
  );
}

export default App;
