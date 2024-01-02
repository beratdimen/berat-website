
import { Icon } from "@iconify/react";
import { IconButton, Link } from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function LastPage() {
  return (
    <Container
      maxWidth="fluid"
      disableGutters
      style={{
        backgroundColor: "grey",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Stack direction="column">
        <Stack direction="row" justifyContent="center">
          <Typography fontWeight="bold">Follow Me:</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <IconButton>
            <Icon icon="ri:facebook-fill" color="white" />
          </IconButton>
          <IconButton
            component={Link}
            to="https://www.instagram.com/beratdimen/"
          >
            <Icon icon="uim:instagram" color="white" />
          </IconButton>
          <IconButton>
            <Icon icon="ri:twitter-fill" color="white" />
          </IconButton>
          <IconButton
            component={Link}
            to="https://www.linkedin.com/in/berat-dimen-314508259/"
          >
            <Icon icon="basil:linkedin-outline" color="white" />
          </IconButton>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography>Copyright © 2023 , All rights Reserved </Typography>
              </Stack>
              <Stack direction="row" justifyContent="center">
                  <Typography>Created by Berat Dimen</Typography>
              </Stack>
      </Stack>
    </Container>
  );
}
