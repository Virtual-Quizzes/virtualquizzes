import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Lo from '../../assets/halloween-ghost.png';

type Props = {
  color?: string;
};
export const Logo = ({ color = '#FFF' }: Props) => {
  return (
    <Stack direction={'row'} sx={{ color }} justifyContent={'flex-start'} alignItems={'center'}>
      <Box>
        <img src={Lo} alt="logo" height={70} />
      </Box>
      <Box>
        <Typography fontWeight={'bold'} variant={'h3'}>
          Juez Cachimbo
        </Typography>
      </Box>
    </Stack>
  );
};
