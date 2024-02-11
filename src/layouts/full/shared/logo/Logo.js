import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#333',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#ff4081',
  }
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <Typography variant="h2" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', paddingTop: '15px' }}>
        iTech Service
      </Typography>
    </LinkStyled>
  );
};

export default Logo;
