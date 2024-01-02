import { LinearProgress } from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function MySkills() {
  return (
    <Container
      style={{ backgroundColor: "black" }}
      maxWidth="fluid"
      disableGutters
    >
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3} 
        >
          <Stack direction="column" justifyContent="center" width="40%">
            <Typography fontSize="20px" color="grey">
              MY SKILLS
            </Typography>
            <Typography fontSize="30px" color="white" fontWeight="bold">
              Last Explore My
            </Typography>
            <Typography fontSize="37px" color="grey" fontWeight="bold">
              Skills And Experience
            </Typography>
          </Stack>
          <Stack direction="column" width="60%">
            <Stack display="grid" gridTemplateColumns="20% 70% 10%" spacing={3} alignItems="center">
              <Typography color="white">REACT JS</Typography>
              <LinearProgress
                determinate
                value={60}
                variant="plain"
                sx={{ color: "#f7bac5" }}
              />
              <Typography color="white">80%</Typography>
              <Typography color="white">JAVASCRİPT</Typography>
              <LinearProgress
                determinate
                value={80}
                variant="plain"
                sx={{ color: "#f7bac5" }}
              />
              <Typography color="white">80%</Typography>
              <Typography color="white">WORDPRESS</Typography>
              <LinearProgress
                determinate
                value={90}
                variant="plain"
                sx={{ color: "#f7bac5" }}
              />
              <Typography color="white">90%</Typography>
              <Typography color="white">CSS</Typography>
              <LinearProgress
                determinate
                value={95}
                variant="plain"
                sx={{ color: "#f7bac5" }}
              />
              <Typography color="white">95%</Typography>
              <Typography color="white">HTML </Typography>
              <LinearProgress
                determinate
                value={95}
                variant="plain"
                sx={{ color: "#f7bac5" }}
              />
              <Typography color="white">95%</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
