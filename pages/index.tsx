import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Headline} from "../src/ui/Headline";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" align="center">
        All Notes
      </Typography>
        <Headline color="primary" type="h1" >
            Hola que tal
        </Headline>
    </Container>
  );
}
