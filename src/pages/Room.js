import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Link, Stack, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import { useDispatch, useSelector } from "react-redux";
import { RoomService } from "../services";

// ----------------------------------------------------------------------

export default function Room() {
  const [room, setRoom] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const res = await RoomService.getRooms();
			setRoom(res);
		}

		fetchData();
	}, []);
    return (
    <Page title="Dashboard: Rooms">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Rooms
        </Typography>

        <Grid container spacing={3}>
            {room ?
                room.map((item) => (
				          <Grid key={item.id} item xs={12} sm={6} md={3}>
                    <Card>
                        <Stack spacing={2} sx={{ p: 3 }}>
                            <Link to="#" color="inherit" underline="hover">
                                <Typography variant="subtitle2" noWrap>
                                    {item.name}
                                </Typography>
                            </Link>
                        </Stack>
                    </Card>
                </Grid>	
                ))
			      : ""}
        </Grid>

      </Container>
    </Page>
  );
}
