import { Icon } from "@iconify/react";
import { IconButton } from "@mui/joy";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AboutMee() {
  return (
    <Container
      maxWidth="fluid"
      disableGutters
      style={{
        backgroundColor: "black",
        justifyContent: "center ",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="/img/berat.jpeg"
            alt="aboutme"
            style={{
              height: "500px",
              width: "500px",
            }}
          />
          <Stack direction="column" justifyContent="space-between" width="100%">
            <Typography color="white" fontWeight="bold">
              About Me
            </Typography>
            <Typography fontWeight="bold" color="white">
              Front End Developer & Web Designer
            </Typography>
            <Typography color="white">
              Hello, I am a graduate of Istanbul University, Department of
              Electronics Technology, and I am also a Computer Technology
              Student. I have been using WordPress for 2 years, and I have known
              html, css and javascript for more than 1 year, and I am currently
              learning React.
            </Typography>

            <Divider />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={5}
            >
              <Stack spacing={1} color="white">
                <Typography>
                  <b>Name:</b> Berat Dimen
                </Typography>
                <Typography color="white">
                  <b>Email:</b>
                  <a
                    href="mailto:beratefedimen@hotmail.com"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    beratefedimen@hotmail.com
                  </a>
                </Typography>
              </Stack>
              <Stack spacing={1} color="white">
                <Typography>
                  <b>From:</b> Istanbul,Turkey
                </Typography>
                <Typography color="white">
                  <b>Phone:</b>
                  <a
                    href="tel:+905396729215"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    +90 539 672 9215
                  </a>
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" mt={4} mb={4}>
              <Typography fontWeight="bold" color="white">
                Follow Me :
              </Typography>
              <IconButton component={Link} to="https://github.com/beratdimen">
                
                <Icon icon="ri:github-fill" color="white" />
              </IconButton>
              <IconButton
                component={Link}
                to="https://www.instagram.com/beratdimen/"
              >
                <Icon icon="uim:instagram" color="white" />
              </IconButton>
              
              <IconButton
                component={Link}
                to="https://www.linkedin.com/in/berat-dimen-314508259/"
              >
                <Icon icon="basil:linkedin-outline" color="white" />
              </IconButton>
            </Stack>
            <Stack direction="row">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "100px",
                }}
              >
                Hire Me!
              </Button>
              <Button
                variant="text"
                style={{ color: "white", marginLeft: "30px" }}
              >
                Dowload resume
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
