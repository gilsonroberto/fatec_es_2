import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';

export default function AppBarReponsivo() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  const Sair = () => {
    window.location.replace('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}>
            CLINICA
          </Typography>
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
              <Menu
                sx={{ mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={Sair}>Sair</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
