import { Container, Stack, Typography} from "@mui/material";

export default function WebSiteBand() {
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
        <Stack direction="row" justifyContent="center" style={{marginTop:"10px", marginBottom:"10px"}}>
          <Typography style={{ marginLeft: "35px" }} fontWeight="bold">
            {" "}
            # FRONT END DEVELOPER
          </Typography>
          <Typography style={{ marginLeft: "35px" }} fontWeight="bold">
            {" "}
            # WEB DESİGNER
          </Typography>
          <Typography style={{ marginLeft: "35px" }} fontWeight="bold">
            {" "}
            # FULL STACK DEVELOPER
          </Typography>
          <Typography style={{ marginLeft: "35px" }} fontWeight="bold">
            {" "}
            # REACT DEVELOPER
          </Typography>
          <Typography style={{ marginLeft: "35px" }} fontWeight="bold">
            {" "}
            # .NET DEVELOPER
          </Typography>
        </Stack>
      </Container>
    );
}