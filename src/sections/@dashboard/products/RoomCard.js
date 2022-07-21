import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import {Card, Link, Typography, Stack } from '@mui/material';
// ----------------------------------------------------------------------

RoomCard.propTypes = {
  room: PropTypes.object,
};

export default function RoomCard({ room }) {
  const { name } = room;

  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
