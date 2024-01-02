import { Button, Container } from "@mui/material";
import { useState } from "react";

let sayac = 0;

export default function BackgroundDegistirme() {
  let renk = ["red", "black", "blue", "green", "grey", "yellow"];

  const [renkSecim, setRenkSecim] = useState("purple");

  function renkdegistir() {
    setRenkSecim(renk[sayac]);
    sayac++;
    if (sayac > 5) {
      console.log("Rengim kalmadı, lütfen refresh atın");
    }
  }
  return (
    <Container
      maxWidth="fluid"
      style={{ backgroundColor: renkSecim, padding: 50 }}>
      <Button variant="contained" onClick={renkdegistir}>
        Renk degistir
      </Button>
    </Container>
  );
}
