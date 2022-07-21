import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import RoomCard from './RoomCard';

// ----------------------------------------------------------------------

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default function RoomList({ rooms, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {rooms.map((room) => (
        <Grid key={room.id} item xs={12} sm={6} md={3}>
          <RoomCard room={room} />
        </Grid>
      ))}
    </Grid>
  );
}
