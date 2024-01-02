import { Button } from "@mui/material";
import { useState } from "react";

export default function YilbasiCekilis() {
  const [yilbasiSonucu, setYillbasiSonucu] = useState("");

  function buton() {
    let biletNumarasi = prompt("Lütfen 6 haneli Çekiliş Numaranızı Giriniz");
    let yanYana = "";
    for (let i = 0; i < 6; i++) {
      let sayilar = Math.floor(Math.random() * 10);
      yanYana = sayilar.toString() + yanYana;
    }

    setYillbasiSonucu(yanYana);

    if (yilbasiSonucu === biletNumarasi) {
      console.log("Tebrikler Kazandınız\n Kazanan Sayılar:" + yilbasiSonucu);
    } else if (biletNumarasi !== yilbasiSonucu) {
      console.log("Malesef Kazanamadınız \nKazanan Sayılar:" + yilbasiSonucu);
    }
  }

  return (
    <>
      Cekilis sonucu :{yilbasiSonucu}
      <Button variant="contained" onClick={buton}>
        Çekiliş Numaranızı girmek için tıklayınız
      </Button>
    </>
  );
}
