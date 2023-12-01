import { Grid, Typography, IconButton } from '@mui/material';
import { AccountMenu } from './AccountMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { HEADER } from '@/constants/ui';
import { useLocation, matchPath } from 'react-router-dom';
import { pageTitles } from '@/routes/config';

interface Props {
  handleToggle?: () => void;
}
export const Topbar = ({ handleToggle }: Props) => {
  const { pathname } = useLocation();

  const getTitle = () => {
    let title;
    Object.entries(pageTitles).forEach(([key, value]) => {
      if (matchPath(key, pathname)) title = value;
    });
    return title;
  };

  return (
    <Grid
      container
      sx={{ justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}
      height={HEADER.HEIGHT}
    >
      <Grid>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon color="secondary" />
        </IconButton>
        <Typography variant="h1" noWrap color={'black'} sx={{ fontWeight: 'bold' }}>
          {getTitle()}
        </Typography>
      </Grid>
      <Grid>
        <AccountMenu></AccountMenu>
      </Grid>
    </Grid>
  );
};
