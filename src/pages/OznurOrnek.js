import { Icon } from "@iconify/react";

import {
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function OznurOrnek() {
  //burdaki const yapısından kaynaklı gitmiyor yani biz bu diziyi simdi useState e cevireceğiz...
  const urunler = [
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
    },
    {
      value: 4,
      label: "Iphone 11 Pro Max",
      price: "23.999 TL",
      imgUrl:
        "https://img.joomcdn.net/acdcaf5f8393d16d960afb9fad819282aaad2818_original.jpeg",
    },
    {
      value: 5,
      label: "Iphone 11 Pro Max",
      price: "23.999 TL",
      imgUrl:
        "https://img.joomcdn.net/acdcaf5f8393d16d960afb9fad819282aaad2818_original.jpeg",
    },
    {
      value: 6,
      label: "Iphone 11 Pro Max",
      price: "23.999 TL",
      imgUrl:
        "https://img.joomcdn.net/acdcaf5f8393d16d960afb9fad819282aaad2818_original.jpeg",
    },
  ];

  function elemansil(id) {
    urunler.splice(id, 1);
  }

  return (
    <Container>
      <Stack direction="row" spacing={5} mt={5} mb={5}>
        {urunler.map((eleman, index) => (
          <Stack direction="column" key={index}>
            <TextField id="outlined-basic" label="Arama" variant="outlined" />
            <Button
              variant="outlined"
              style={{ width: "5px" }}
              onClick={() => elemansil(eleman.value)}
            >
              <Icon icon="bx:x" />
            </Button>

            <Stack direction="row">
              <Button variant="outlined">
                Favori
                <Icon icon="mdi:heart" ml="2px" />
              </Button>
            </Stack>

            <img src={eleman.imgUrl} alt={eleman.label} width="250px" />
            <Typography variant="h6">{eleman.label}</Typography>
            <Typography variant="h3"> {eleman.price} </Typography>
            <Button variant="outlined" onClick={eleman.imgUrl}>
              Ürünü İncele
            </Button>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" mt={5} mb={5}>
        <Typography variant="h6">-----------</Typography>
        <Typography variant="h6">
          GRİD KISMI NEDIR NASIL YAPILIR NE ISE YARAR ACIKLA BANA KODU INCELEYİP
        </Typography>
        <Typography variant="h6">-----------</Typography>
      </Stack>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {urunler.map((eleman, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Button variant="outlined" style={{ width: "5px" }}>
              <Icon icon="bx:x" />
            </Button>
            <img src={eleman.imgUrl} alt={eleman.label} width="250px" />
            <Typography variant="h6">{eleman.label}</Typography>
            <Typography variant="h3"> {eleman.price} </Typography>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" marginTop="15px">
        <Button variant="contained">Ürün Ekleme</Button>
      </Stack>
      <Stack>
        <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled" />
      </Stack>
    </Container>
  );
}
