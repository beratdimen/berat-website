import { Icon } from "@iconify/react";
import {
  AspectRatio,
  Box,
  Card,
  CardCover,
  Chip,
  IconButton,
  Link,
} from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function Blogs() {
  return (
    <Container maxWidth="fluid" style={{ backgroundColor: "Black" }}>
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack
          justifyContent="center"
          textAlign="center"
          spacing={1}
          alignItems="center"
        >
          <Typography
            fontWeight="bold"
            color="white"
            paddingTop="10px"
            paddingBottom="10px"
          >
            Blogs & News
          </Typography>
          <Typography
            fontWeight="bold"
            style={{ fontSize: "30px" }}
            color="white"
          >
            LATETS
          </Typography>
          <Typography
            fontWeight="bold"
            color="white"
            style={{ fontSize: "30px", paddingBottom: "85px" }}
          >
            NEWS & BLOG
          </Typography>
          <Stack direction="row">
            <Card
              variant="plain"
              sx={{
                width: 300,
                bgcolor: "initial",
                p: 0,
              }}
              style={{ marginRight: "50px" }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img src="/img/blog-1.jpg" alt="Yosemite by Casey Horner" />
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
              <Stack direction="row">
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
                <Typography color="white" paddingLeft="175px" size="sm">
                  22/12/2023
                </Typography>
              </Stack>
              <Box sx={{ display: "flex",  alignItems: "center" }}>
                <Stack direction="column">
                  <Typography
                    sx={{ fontSize: "sm", fontWeight: "bold", color: "white" }}
                  >
                    What is new about React?
                  </Typography>
                  <Typography color="grey" fontWeight="bold" textAlign="left">
                    Read More +
                  </Typography>
                </Stack>
              </Box>
            </Card>
            <Card
              variant="plain"
              sx={{
                width: 300,
                bgcolor: "initial",
                p: 0,
              }}
              style={{ marginRight: "50px" }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img src="/img/blog-2.jpg" alt="Yosemite by Casey Horner" />
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
              <Stack direction="row">
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
                <Typography color="white" paddingLeft="175px" size="sm">
                  22/12/2023
                </Typography>
              </Stack>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction="column">
                  <Typography
                    sx={{ fontSize: "sm", fontWeight: "bold", color: "white" }}
                  >
                    What is new about React?
                  </Typography>
                  <Typography color="grey" fontWeight="bold" textAlign="left">
                    Read More +
                  </Typography>
                </Stack>
              </Box>
            </Card>
            <Card
              variant="plain"
              sx={{
                width: 300,
                bgcolor: "initial",
                p: 0,
              }}
              style={{ marginRight: "50px" }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img
                      src="./img/blog-3.jpg"
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
              <Stack direction="row">
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
                <Typography color="white" paddingLeft="175px" size="sm">
                  22/12/2023
                </Typography>
              </Stack>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction="column">
                  <Typography
                    sx={{ fontSize: "sm", fontWeight: "bold", color: "white" }}
                  >
                    What is new about React?
                  </Typography>
                  <Typography color="grey" fontWeight="bold" textAlign="left">
                    Read More +
                  </Typography>
                </Stack>
              </Box>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
