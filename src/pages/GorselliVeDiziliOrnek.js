import { Icon } from "@iconify/react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function GorselliVeDiziliOrnek() {
  const [sebastian, setSebastian] = useState("");
  const [dizi, setDizi] = useState([]);
  const [diziOrnek, setDiziOrnek] = useState([]);

  function sebastianGel() {
    setSebastian("Gol");
    setDizi([
      { value: 0, label: "Bir", color: "red" },
      { value: 1, label: "İki", color: "red" },
      { value: 2, label: "Üç", color: "red" },
      { value: 3, label: "Dört", color: "red" },
      { value: 4, label: "Beş", color: "red" },
    ]);
    setDiziOrnek([
        "Eleman1",
        "Eleman2",
        "Eleman3",
        "Eleman4",
        "Eleman5",
      ]);

    dizi.map((eleman, index) => {
      console.log(eleman.label + "'nınız budur. Indeks numarası: " + index +" Rengi budur:"+ eleman.color);
      return dizi;
    });

    console.log("-------------------------");

    diziOrnek.map((eleman, index) => {
      console.log(eleman + "'nınız budur. Indeks numarası: " + index);
      return diziOrnek;
    });
  }

  console.log(sebastian);
  console.log(dizi[0]);
  console.log(diziOrnek[0]);

  return (
    <Container>
      <Stack justifyContent="center" alignItems="center">
        <img
          src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2098000/sebastian-szymansk-2098666.jpg"
          alt="sebastian"
          width="50%"
        />
        <Typography variant="h1">Sebastian</Typography>
        <Button
          variant="contained"
          onClick={sebastianGel}
          style={{ backgroundColor: "#D80404" }}
          
        >
          Sebastian Gel
          <Icon icon="mdi:heart" style={{ color: "white", marginLeft: 5 }} />
        </Button>
      </Stack>
    </Container>
  );
}
