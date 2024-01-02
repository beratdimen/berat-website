import { Button, FormControlLabel, TextField } from "@mui/material";
import { useRef } from "react";

export default function Sayfam() {
  const deger = useRef("");
  function Buton() {
    console.log("Berat yazdırdım");
    console.log("------------------------------");
    console.log(deger.current.value);
    console.log("------------------------------");
  }
  function Switch() {
    console.log("switche tıklandı");
  }
  function Checkbox() {
    console.log("chexkbox");
  }

  function Toplama() {
    console.log(1 + 5);
  }
  function bir() {}
  function iki() {}
  function üç() {}
  function dört() {}
  function beş() {}
  function altı() {}
  function yedi() {}
  function sekiz() {}
  function dokuz() {}
  function çarpma() {}
  function bölme() {}
  function cikarma() {}
  function toplama() {}
  return (
    <>
      <FormControlLabel
        required
        control={<Checkbox />}
        label="Required"
        onclick={Checkbox}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        inputRef={deger}
      />
      <Button variant="contained" onClick={Buton}>
        Çalış Berat Çalış
      </Button>
      <FormControlLabel
        required
        control={<Switch />}
        label="Required"
        onclick={Switch}
      />
      <Button variant="contained" onClick={Toplama}>
        Toplama
      </Button>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <Button variant="contained" onClick={bir}>
        1
      </Button>
      <Button variant="contained" onClick={iki}>
        2
      </Button>
      <Button variant="contained" onClick={üç}>
        3
      </Button>
      <Button variant="contained" onClick={dört}>
        4
      </Button>
      <Button variant="contained" onClick={beş}>
        5
      </Button>
      <Button variant="contained" onClick={altı}>
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
      <Button variant="contained" onClick={çarpma}>
        çarpma
      </Button>
      <Button variant="contained" onClick={bölme}>
        bölme
      </Button>
      <Button variant="contained" onClick={cikarma}>
        bölme
      </Button>
      <Button variant="contained" onClick={toplama}>
        bölme
      </Button>
    </>
  );
}
