import { Button, Container, Stack, TextField } from "@mui/material";
import { useRef } from "react";

export default function SatirVeSutun() {
  const deger = useRef("");
  function buton() {
    console.log(deger.current.value);
  }
  return (
    <Container>
      <Stack direction="row" spacing={1} marginBottom={3}>
        <TextField inputRef={deger} />
        <Button variant="contained" onClick={buton}>
          Berat
        </Button>
        <Button variant="contained" onClick={buton}>
          Berat
        </Button>
        <Button variant="contained" onClick={buton}>
          Berat
        </Button>
        <Button variant="contained" onClick={buton}>
          Berat
        </Button>
      </Stack>
      <Stack direction="column" spacing={1}>
        <TextField inputRef={deger} />
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
        <Button variant="outlined" onClick={buton}>
          Öznur
        </Button>
      </Stack>
    </Container>
  );
}
