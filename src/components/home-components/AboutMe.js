import { Icon } from "@iconify/react";
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardOverflow, Chip } from "@mui/joy";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function AboutMe() {
    return (
      <Container>
        <Stack direction="row">
          <Card
            sx={{
              width: 380,
              maxWidth: "100%",
              boxShadow: "lg",
              marginTop: "10px",
              marginLeft: "90px",
            }}
          >
            <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
              <Avatar src="/img/berat.jpeg" sx={{ "--Avatar-size": "120px" }} />
              <Chip
                size="sm"
                variant="soft"
                color="primary"
                sx={{
                  mt: -1,
                  mb: 1,
                  border: "3px solid",
                  borderColor: "background.surface",
                }}
              >
                Front End Developer
              </Chip>
              <Typography level="title-lg" fontWeight="bold">
                Berat DİMEN
              </Typography>
              <Typography
                level="body-sm"
                sx={{ maxWidth: "24ch" }}
              ></Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  "& > button": { borderRadius: "2rem" },
                }}
              >
                <IconButton>
                  <Icon
                    icon="ri:facebook-fill"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  />
                </IconButton>
                <IconButton
                  component={Link}
                  to="https://www.instagram.com/beratdimen/"
                >
                  <Icon
                    icon="uim:instagram"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  />
                </IconButton>
                <IconButton>
                  <Icon
                    icon="ri:twitter-fill"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  />
                </IconButton>
                <IconButton
                  component={Link}
                  to="https://www.linkedin.com/in/berat-dimen-314508259/"
                >
                  <Icon
                    icon="basil:linkedin-outline"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  />
                </IconButton>
              </Box>
            </CardContent>
            <CardOverflow sx={{ bgcolor: "background.level1" }}>
              <CardActions buttonFlex="1">
                <ButtonGroup
                  variant="outlined"
                  sx={{ bgcolor: "background.surface" }}
                >
                  <Button>Message</Button>
                  <Button>Connect</Button>
                </ButtonGroup>
              </CardActions>
            </CardOverflow>
          </Card>
          <Stack
            direction="column"
            sx={{ marginLeft: "30px", marginTop: "45px" }}
          >
            <Typography sx={{ marginTop: "55px" }}>About Me</Typography>
            <Stack>
              <Typography
                fontWeight="bold"
                sx={{ marginTop: "20px", marginBottom: "30px" }}
              >
                Berat Dimen
              </Typography>
            </Stack>
            <Stack>
              <Typography>
                Hello, I am a graduate of Istanbul University, Department of
                Electronics Technology, and also a Computer Technology Student.
                I have been using WordPress for 2 years, and I have known html,
                css and javascript for more than 1 year, and I am currently
                learning React.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    );
}