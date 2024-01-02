

import { Icon } from "@iconify/react";
import { Container,  Fab,  Stack, Typography } from "@mui/material";

export default function WebSitesi(){
    return(
<Container>
    <Stack direction="column"  >
        <Stack direction="row" spacing={15}> <Typography variant="h4" >Anasayfa |</Typography>
         <Typography variant="subtitle1" >   Kadro genişliği: 29</Typography>
         </Stack>
        <Stack direction="row" spacing={15}> 
        
        <Typography variant="h4">Hakkımızda|</Typography>
        <Typography variant="subtitle1" >Fenerbahçe 2023-2024 Sezonu için hazır</Typography>
        </Stack>
        <Stack direction="row" spacing={15}>
        <Typography variant="h4">Kadro|</Typography>
        <Typography variant="subtitle1"  >Dominik Livakovic</Typography>
        </Stack>
        <Stack direction="row"> 
        <Typography variant="h6">----------</Typography>
        <Typography variant="h6">--------------</Typography>
        </Stack>
        <Fab size="small" color="secondary" aria-label="add">
            <Icon icon="ei:plus" style={{ width:"350px" }}/>
        </Fab>
    </Stack>
</Container>
    );
}