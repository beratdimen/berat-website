import { Icon } from "@iconify/react";
import { Button, Container, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  { value: "A1", color: "green" },
  { value: "A2", color: "green" },
  { value: "A3", color: "green" },
  { value: "A4", color: "green" },
  { value: "A5", color: "green" },
  { value: "A6", color: "green" },
  { value: "A7", color: "green" },
  { value: "A8", color: "green" },
  { value: "A9", color: "green" },
  { value: "A10", color: "green" },
];

const sectiklerimIcinList = [];

export default function SinemaKoltugu() {
  const [koltuk, setKoltuk] = useState(data);
  const [sectigimKoltukNumalari, setSectigimKoltukNumaralari] = useState([]);

  function renkDegistir(id) {
    const newList = koltuk.map((item) => {
      if (item.value === id) {
        const updatedItem = {
          ...item,
          color: "red",
        };

        sectiklerimIcinList.push(updatedItem);
        return updatedItem;
      }
      return item;
    });
    setKoltuk(newList);
    setSectigimKoltukNumaralari(sectiklerimIcinList);
  }

  console.log(sectigimKoltukNumalari);
  return (
    <Container>
      <Stack direction="row" spacing={1} mb={3}>
        {koltuk.map((eleman, index) => (
          <IconButton
            key={eleman.value}
            onClick={() => renkDegistir(eleman.value)}
          >
            <Icon icon="mdi:seat" style={{ color: eleman.color }} />
          </IconButton>
        ))}
      </Stack>
      <Button
        variant="contained"
        component={Link}
        to={{
          pathname: "../sinema-satin-al/1",
          state: sectigimKoltukNumalari,
        }}
      >
        SATIN AL
      </Button> <Link
        to={{
          pathname: "../sinema-satin-al/1",
          state: { sectigimKoltukNumalari: sectigimKoltukNumalari },
        }}
      >
        Go to Next Page
      </Link>
    </Container>
  );
}
