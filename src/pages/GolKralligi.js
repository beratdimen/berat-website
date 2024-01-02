import { Button, Container, Stack } from "@mui/material";
import { Icon } from "@iconify/react";
export default function GolKralligi() {
  let dzekoGol = 0;
  let sebastianGol = 0;

  function dzeko() {
    dzekoGol += 1;
    console.log("Dzeko Golleri:" + dzekoGol);
  }
  function dzekoYanlisGol() {
    dzekoGol -= 1;
    console.log("Dzeko Golleri:" + dzekoGol);
  }

  function sebastian() {
    sebastianGol += 1;
    console.log("Sebastian Golleri:" + sebastianGol);
  }
  function sebastianYanlisGol() {
    sebastianGol -= 1;
    console.log("Sebastian Golleri:" + sebastianGol);
  }

  return (
    <Container>
      <Stack direction="row">
        <Stack direction="column" justifyContent="center" alignItems="center">
          <img
            src="https://i.sozcucdn.com/wp-content/uploads/2023/08/14/edin-dzeko-1.jpeg?w=900&h=900&mode=crop&scale=both"
            alt="Dzeko"
            width="55%"
          />
          <Stack direction="row" spacing={1} marginTop={1}>
            <Button
              variant="contained"
              onClick={dzeko}
              style={{ backgroundColor: "Blue" }}
            >
              Doğru Gol
              <Icon icon="flag:ba-4x3" style={{ marginLeft: 5 }} />
            </Button>
            <Button
              variant="contained"
              onClick={dzekoYanlisGol}
              style={{ backgroundColor: "Blue" }}
            >
              Yanlış Gol
              <Icon icon="flag:ba-4x3" style={{ marginLeft: 5 }} />
            </Button>
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <img
            src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2098000/sebastian-szymansk-2098666.jpg"
            alt="sebastian"
            width="55%"
          />
          <Stack direction="row" spacing={1} marginTop={1}>
            <Button
              variant="contained"
              onClick={sebastian}
              style={{ backgroundColor: "Blue" }}
            >
              Doğru Gol
              <Icon icon="flag:gl-1x1" style={{ marginLeft: 5 }} />
            </Button>
            <Button
              variant="contained"
              onClick={sebastianYanlisGol}
              style={{ backgroundColor: "Blue" }}
            >
              Yanlış Gol
              <Icon icon="flag:gl-1x1" style={{ marginLeft: 5 }} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
