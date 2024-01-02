import { Icon } from "@iconify/react";
import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  CardCover,
  Chip,
  IconButton,
  Link,
} from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function Completed() {
  return (
    <Container
      maxWidth="fluid"
      disableGutters
      style={{
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack direction="column">
          <Typography
            fontWeight="bold"
            sx={{
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
            mb={5}
          >
            Completed Works Of Mine
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={3}>
            <Card
              variant="plain"
              sx={{
                width: 500,
                bgcolor: "initial",
                p: 0,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img
                      src="/img/WhatsApp.jpeg"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                        <Link
                          href="#dribbble-shot"
                          overlay
                          underline="none"
                          sx={{
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          Go To Mun Pilates Website
                        </Link>
                      </Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Icon
                          icon="material-symbols:create-new-folder-outline"
                          style={{ color: "white" }}
                        />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Icon
                          icon="material-symbols:favorite"
                          style={{ color: "white" }}
                        />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar
                  src="/img/WhatsApp.jpeg"
                  size="sm"
                  sx={{ "--Avatar-size": "1.5rem" }}
                />
                <Typography
                  sx={{ fontSize: "sm", fontWeight: "md", color: "white" }}
                >
                  Designed By Wordpress
                </Typography>
                <Chip
                  variant="outlined"
                  color="neutral"
                  size="sm"
                  sx={{
                    borderRadius: "sm",
                    py: 0.25,
                    px: 0.5,
                  }}
                >
                  New
                </Chip>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={
                    <Icon
                      icon="material-symbols:favorite"
                      style={{ color: "white" }}
                    />
                  }
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={
                    <Icon
                      icon="lets-icons:view-light"
                      style={{ color: "white" }}
                    />
                  }
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
            <Card
              variant="plain"
              sx={{
                width: 500,
                bgcolor: "initial",
                p: 0,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img
                      src="/img/WhatsApp2.jpeg"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                        <Link
                          href="#dribbble-shot"
                          overlay
                          underline="none"
                          sx={{
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          Go to Val Holding Website
                        </Link>
                      </Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Icon
                          icon="material-symbols:create-new-folder-outline"
                          style={{ color: "white" }}
                        />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Icon
                          icon="material-symbols:favorite"
                          style={{ color: "white" }}
                        />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar
                  src="/img/WhatsApp2.jpeg"
                  size="sm"
                  sx={{ "--Avatar-size": "1.5rem" }}
                />
                <Typography
                  sx={{ fontSize: "sm", fontWeight: "md", color: "white" }}
                >
                  Designed By Wordpress,Elementor
                </Typography>
                <Chip
                  variant="outlined"
                  color="neutral"
                  size="sm"
                  sx={{
                    borderRadius: "sm",
                    py: 0.25,
                    px: 0.5,
                  }}
                >
                  New
                </Chip>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={
                    <Icon
                      icon="material-symbols:favorite"
                      style={{ color: "white" }}
                    />
                  }
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={
                    <Icon
                      icon="lets-icons:view-light"
                      style={{ color: "white" }}
                    />
                  }
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
