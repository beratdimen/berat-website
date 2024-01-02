import { Button } from "@mui/material";

export default function HesaplamaMakinesi() {
  let deger = 0;
  let deger2 = 0;
  let islem = "";
  let sonuc = 0;
  function bir() {
    deger2 = deger;
    deger = 1;
    if (islem !== "") {
      if (islem === "+") {
        sonuc = deger + deger2;
      }
    }
  }
  function iki() {
    deger = 2;
  }
  function üc() {
    deger = 3;
  }
  function dört() {
    deger = 4;
  }
  function bes() {
    deger = 5;
  }
  function alti() {
    deger = 6;
  }
  function yedi() {
    deger = 7;
  }
  function sekiz() {
    deger = 8;
  }
  function dokuz() {
    deger = 9;
  }
  function carpma() {
    islem = "*";
  }
  function bolme() {
    islem = "/";
  }
  function cikarma() {
    islem = "-";
  }
  function toplama() {
    islem = "+";
  }
  console.log(sonuc);

  return (
    <>
      <Button variant="contained" onClick={bir}>
        1
      </Button>
      <Button variant="contained" onClick={iki}>
        2
      </Button>
      <Button variant="contained" onClick={üc}>
        3
      </Button>
      <Button variant="contained" onClick={dört}>
        4
      </Button>
      <Button variant="contained" onClick={bes}>
        5
      </Button>
      <Button variant="contained" onClick={alti}>
        6
      </Button>
      <Button variant="contained" onClick={yedi}>
        7
      </Button>
      <Button variant="contained" onClick={sekiz}>
        8
      </Button>
      <Button variant="contained" onClick={dokuz}>
        9
      </Button>
      <Button variant="contained" onClick={carpma}>
        çarpma
      </Button>
      <Button variant="contained" onClick={bolme}>
        bölme
      </Button>
      <Button variant="contained" onClick={cikarma}>
        çıkarma
      </Button>
      <Button variant="contained" onClick={toplama}>
        toplama
      </Button>
    </>
  );
}
