import { Icon } from "@iconify/react";
import {   CardContent,  Divider, IconButton} from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function WebSite() {
  return (
    <Container maxWidth="fluid">
      <Stack direction="row">
        <CardContent>
          <Stack spacing={0.85} direction="row">
            <IconButton>
              <Icon icon="icon-park-twotone:people" />
            </IconButton>
            <IconButton>
              <Typography> About</Typography>
            </IconButton>
            <Divider inset="none" />
            <IconButton>
              <Icon icon="ri:order-play-fill" />
            </IconButton>
            <IconButton>
              <Typography> Resume</Typography>
            </IconButton>
            <Divider inset="none" />
            <IconButton>
              <Icon icon="ph:eye-bold" />
            </IconButton>
            <IconButton>
              <Typography> Videos</Typography>
            </IconButton>
            <Divider inset="none" />
            <IconButton>
              <Icon icon="mdi:blog-outline" />
            </IconButton>
            <IconButton>
              <Typography> Blog</Typography>
            </IconButton>
            <Divider inset="none" />
            <IconButton>
              <Icon icon="ic:sharp-connect-without-contact" />
            </IconButton>
            <IconButton>
              <Typography> Contact</Typography>
            </IconButton>
            <Divider inset="none" />
          </Stack>
        </CardContent>
      </Stack>

      
    </Container>
  );
}
