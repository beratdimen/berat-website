import { Icon } from "@iconify/react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function UrunEkleme() {
  const [urunler, setUrunler] = useState([]);
  setUrunler([
    {
      value: 0,
      label: "Iphone 11 Pro Max",
      price: "23.999 TL",
      imgUrl:
        "https://img.joomcdn.net/acdcaf5f8393d16d960afb9fad819282aaad2818_original.jpeg",
    },
    {
      value: 1,
      label: "Iphone 11",
      price: "17.999 TL",
      imgUrl:
        "https://productimages.hepsiburada.net/s/32/375-375/10356113375282.jpg",
    },
    {
      value: 2,
      label: "Iphone 12 Pro Max",
      price: "27.999 TL",
      imgUrl:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/110392-8-3_large.jpg",
    }
  ]);
  urunler.map((eleman, index) => {
    console.log(
      eleman.label +
        "'nınız budur. Indeks numarası: " +
        index +
        " Fiyatı :" +
        eleman.price
    );
    return urunler;
  });

  return (
    <Container>
      <Stack direction="row" spacing={5}>
        <Stack direction="column">
          <Button variant="outlined" style={{ width: "5px" }}>
            <Icon icon="bx:x" />
          </Button>
          <img
            src="https://img.joomcdn.net/acdcaf5f8393d16d960afb9fad819282aaad2818_original.jpeg"
            alt="Iphone 11 Pro Max"
            width="250px"
          />
          <Typography variant="h6">
            {" "}
            Iphone 11 Pro Max 128 GB kırmızı , siyah , beyaz renk{" "}
          </Typography>
          <Typography variant="h3"> 23.999 TL </Typography>
        </Stack>
        <Stack direction="column">
          <Button variant="outlined" style={{ width: "5px" }}>
            <Icon icon="bx:x" />
          </Button>
          <img
            src="https://productimages.hepsiburada.net/s/32/375-375/10356113375282.jpg"
            alt="Iphone 11"
            width="250px"
          />
          <Typography variant="h6">
            {" "}
            Iphone 11 128 GB kırmızı , siyah , beyaz renk{" "}
          </Typography>
          <Typography variant="h3"> 17.999 TL </Typography>
        </Stack>
        <Stack direction="column">
          <Button variant="outlined" style={{ width: "5px" }}>
            <Icon icon="bx:x" />
          </Button>
          <img
            src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/110392-8-3_large.jpg"
            alt="Iphone 12 Pro Max"
            width="250px"
          />
          <Typography variant="h6">
            {" "}
            Iphone 12 Pro Max 128 GB kırmızı , siyah , beyaz renk{" "}
          </Typography>
          <Typography variant="h3"> 27.999 TL </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" marginTop="15px">
        <Button variant="contained">Ürün Ekleme</Button>
      </Stack>
    </Container>
  );
}
