
import { Button, FormControl,    Input} from "@mui/joy";
import { Container, Stack, Typography } from "@mui/material";

export default function ContactMe() {
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
            <Stack direction="column" paddingTop="20px">
              <Typography style={{ color: "blue" }}>Contact With Me</Typography>
              <Typography color="white" paddingBottom="30px" fontWeight="bold">
                Front End Developer & Web Designer
              </Typography>
              <FormControl sx={{ paddingTop: "10px" }}>
                <Input placeholder="Name&Surname" />
              </FormControl>
              <FormControl sx={{ paddingTop: "10px" }}></FormControl>

              <Input placeholder="Email" />
              <FormControl sx={{ paddingTop: "10px" }}></FormControl>

              <Input placeholder="Subject" />
              <FormControl sx={{ paddingTop: "10px" }}>
                <Input placeholder="Message" />
              </FormControl>
              <Stack direction="row" paddingBottom="10px" paddingTop="10px">
                <Button
                  variant="contained"
                  color="white"
                  style={{ backgroundColor: "blue", width: "100px" }}
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