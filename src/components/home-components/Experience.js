import { Icon } from "@iconify/react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Container, Stack, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Container
      style={{ backgroundColor: "black" }}
      maxWidth="fluid"
      disableGutters
    >
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack direction="row" justifyContent="center" >
          <Typography color="white">EXPERİENCE</Typography>
        </Stack>
        <Stack direction="column" justifyContent="center">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                Freelance Web Designer{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Icon icon="ic:twotone-developer-mode" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Stack>
                  <Typography>January 2022 -Present </Typography>
                  <Typography variant="h6" component="span">
                    Web Design and Software
                  </Typography>
                  <Typography>
                    I design websites using React Html Css Javascript and I also
                    continue to provide technical support on the sites I design.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                Technical Service Server Installation{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <Icon icon="ic:twotone-developer-mode" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Stack>
                  <Typography>October 2020 -December 2021</Typography>
                  <Typography variant="h6" component="span">
                    Durrak Bilişim
                  </Typography>
                  <Typography>
                    I provided technical service support, server installation
                    and camera installation.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="white"
              >
                Electronic Material Control{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Icon icon="ic:twotone-developer-mode" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Stack direction="column">
                  <Typography>July 2019-September 2020</Typography>
                  <Typography variant="h6" component="span">
                    Özer Teknik
                  </Typography>
                  <Typography>
                    At Özer Teknik Company, I checked the health of electronic
                    materials, checked whether there were any faulty products,
                    and arranged these materials, and provided additional
                    technical service.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="white"
              >
                Technical Service Computer Software{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <Icon icon="ic:twotone-developer-mode" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Stack direction="column">
                  <Typography>July 2017-June 2019</Typography>
                  <Typography variant="h6" component="span">
                    Bahçeşehir Laptop Servisi
                  </Typography>
                  <Typography>
                    I performed computer hardware repairs, software operations,
                    mobile phone repairs and software bug repairs.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="white"
              >
                intern student{" "}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Icon icon="ic:twotone-developer-mode" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }} color="white">
                <Stack>
                  <Typography>September 2016-June 2017</Typography>
                  <Typography variant="h6" component="span">
                    Kontal Elektronik{" "}
                  </Typography>
                  <Typography>
                    I did typesetting, soldering, software of these cards and
                    integrated editing on the electronic cards.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Stack>
      </Container>
    </Container>
  );
}
