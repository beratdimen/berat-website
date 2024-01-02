import { Container, Stack, Typography } from "@mui/material";

export default function SinemaSatinAlma(props) {
  const receivedList =
    props.location && props.location.state && props.location.state.yourList;

  console.log(receivedList);
  
  return (
    <Container>
      <Stack>
        <Typography>SATIN ALDINIZ</Typography>
      </Stack>
    </Container>
  );
}
