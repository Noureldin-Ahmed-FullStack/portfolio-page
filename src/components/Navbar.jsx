import React, { useState, useEffect, useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyContext } from './ContextProvider';

import Zoom from '@mui/material/Zoom';
import { ThemeProvider, createTheme } from '@mui/material';
function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { darkMode, setDarkmode } = useContext(MyContext);
  const [visible, setVisible] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const setDarkmodeFunc = () => {
    setDarkmode(false);
    document.querySelector("body").setAttribute('data-theme', 'dark')
    const theme = localStorage.setItem('theme', "dark")
  }
  const setLightmodeFunc = () => {
    setDarkmode(true);
    document.querySelector("body").setAttribute('data-theme', 'light')
    const theme = localStorage.setItem('theme', "light")
  }
  const toggleDarkmode = () => {
    const bodyElement = document.querySelector("body");
    const dataTheme = bodyElement.getAttribute("data-theme");

    if (dataTheme === "dark") {
      // Do something if data-theme is "dark"
      console.log("Dark theme is active.");
      setLightmodeFunc()
    } else {
      // Do something else if data-theme is not "dark"
      console.log("Dark theme is not active.");
      setDarkmodeFunc()
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    handleCloseNavMenu()
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToTop()
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsDark(currentScrollPos > window.innerHeight);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // return (
  // <Navbar expand="lg" className={`${visible ? '' : 'd-none'} ${isDark ? 'bg-dark' : ''} Merienda`} variant={'dark'} fixed="top" style={{ transition: 'all 0.6s' }}>
  // );
    const theme = createTheme({
      palette: {
          mode: 'dark'
      },
  });
  return (
    <AppBar sx={{ transition: 'all 0.5s', display: `${visible ? '' : 'none'}`, boxShadow: `${isDark ? 'secondary' : 'none'}`, backgroundColor: `${isDark ? 'rgb(18, 18, 18)' : 'transparent'}` }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, my: 2, mr: 1 }}
          >
            <img src={require("../Img/BG Logo.png")} className='icon me-3' />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => scrollToSection('top')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Noureldin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <ThemeProvider theme={theme}>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => scrollToSection('about')}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('Courses')}>
                <Typography textAlign="center">Courses</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('Projects')}>
                <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection('ContactMe')}>
                <Typography textAlign="center">Contact Me</Typography>
              </MenuItem>
            </Menu>
            </ThemeProvider>

          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box
            sx={{ display: { xs: 'flex', md: 'none' }, my: 2, mr: 1 }}
          >
            <img src={require("../Img/BG Logo.png")} className='icon me-3' />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => scrollToSection('top')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Noureldin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => scrollToSection('about')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >About</Button>
            <Button
              onClick={() => scrollToSection('courses')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Courses</Button>
            <Button
              onClick={() => scrollToSection('projects')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Projects</Button>
            <Button
              onClick={() => scrollToSection('ContactMe')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Contact me</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <div className='d-flex'>

              <Tooltip followCursor TransitionComponent={Zoom} title="Github">
                <a title='Github' href='https://github.com/Noureldin-Ahmed-FullStack' target='_blank' className="nav-link cursor mx-2" ><i className='fa-brands fa-github'></i></a>
              </Tooltip>
              <Tooltip followCursor TransitionComponent={Zoom} title="LinkedIn">
                <a title='Linkedin' href='https://www.linkedin.com/in/noureldin-ahmed-7849801a7/' target='_blank' className="nav-link cursor mx-2" ><i className='fa-brands fa-linkedin'></i></a>
              </Tooltip>
              <Tooltip followCursor TransitionComponent={Zoom} title="Toggle Darkmode">
                <a title='Darkmode' className="nav-link cursor mx-2" onClick={() => toggleDarkmode()} ><i className={`${darkMode ? 'fa' : 'fa-regular'} fa-moon`}></i></a>
              </Tooltip>
            </div>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default App;
