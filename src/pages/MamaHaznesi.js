import { Button } from "@mui/material";
export default function MamaHaznesi() {
  function buton() {
    let mamaHaznesi = 650;
    if (mamaHaznesi >= 10) {
      mamaHaznesi = mamaHaznesi - 10;
      console.log("Ceku Maman Hazır.");
      console.log("Kalan Mama:" + mamaHaznesi);
    } else if (mamaHaznesi < 10 && mamaHaznesi > 0) {
      console.log("Eksik Mama" + mamaHaznesi + "Lütfen doldurunuz.");
    } else {
      console.log("Mama Kalmamıştır Lütfen Doldurunuz.");
    }
  }

  return (
    <>
      <Button variant="contained" onClick={buton}>
        MamaVerme
      </Button>
    </>
  );
}
