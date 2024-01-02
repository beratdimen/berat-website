import { Avatar, Card, Stack, Typography } from "@mui/joy";
import { Container } from "@mui/material";

export default function Slider() {
  return (
    <Container
      maxWidth="fluid"
      disableGutters
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" spacing={4}>
            <Stack spacing={2.5}>
              <Typography fontSize="35px" style={{ color: "Grey" }}>
                Hello I'm{" "}
              </Typography>
              <Typography
                fontSize="45px"
                style={{ color: "blue" }}
                fontWeight="bold"
              >
                Berat Dimen
              </Typography>
            </Stack>
            <Typography
              fontSize="30px"
              style={{ color: "White" }}
              fontWeight="bold"
            >
              Front End Developer
            </Typography>
            <Typography fontSize="25px" style={{ mb: "15px", color: "grey" }}>
              Thank you for visiting me.
            </Typography>
          </Stack>
          <Avatar src="/img/berat.jpeg" sx={{ "--Avatar-size": "300px" }} />

          <Card
            style={{
              backgroundColor: "black",
            }}
          >
            <Stack spacing={5.3}>
              <Stack direction="row" spacing={1.5}>
                <img
                  alt="react"
                  src="/img/indir.png"
                  style={{ height: "45px", width: "45px" }}
                />
                <Typography fontWeight="bold" fontSize="30px" color="#f7bac5">
                  I'm Learning React
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <img
                  alt="js"
                  src="/img/js-logo.webp"
                  style={{ height: "45px", width: "45px" }}
                />
                <Typography fontWeight="bold" fontSize="30px" color="#f7bac5">
                  1 Year Experience{" "}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <img
                  alt="wordpres"
                  src="/img/Wordpress.png"
                  style={{ height: "45px", width: "45px" }}
                />
                <Typography fontWeight="bold" fontSize="30px" color="f7bac5">
                  2 Year Experience{" "}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Container>
  );
}
