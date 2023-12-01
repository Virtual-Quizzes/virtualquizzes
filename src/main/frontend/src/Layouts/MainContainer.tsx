// import { FC } from "react";

// import Head from "next/head";

// import { Box } from "@mui/material";

/* PEPE START */

import * as React from 'react';
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from '@mui/material/Drawer';
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
import { Topbar } from '@/components/Topbar/Topbar';
// import { Divider } from "@mui/material";
import { Sidebar } from '@/components/Sidebar/Sidebar';
// import { HEADER, NAVBAR } from "@/constants/ui";
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NAVBAR } from '@/constants/ui';
// import Typography from "@mui/material/Typography";
// import { RoutesContent } from "../ui/Sidebar/RoutesContent";
// import { Header } from "../ui/Header/Header";
// import { Container } from "@mui/system";

// const drawerWidth = 300;

// interface Props {
//   children: React.ReactNode;
// }

export const MainContainer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  {
    /* // <Box
    //   sx={{
    //     flexFlow: 1,
    //   }}
    // >
    //   <Box sx={{ display: "flex", flexDirection: "column" }}>
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         minHeight: HEADER.HEIGHT,
    //         width: { sm: `calc(100% - ${drawerWidth}px)` },
    //         ml: { sm: `${drawerWidth}px`},
    //         bgcolor: "#f8f9fa",
    //       }}
    //     >
    //         {/* <IconButton
    //           color="primary"
    //           aria-label="open drawer"
    //           edge="start"
    //           onClick={handleDrawerToggle}
    //           sx={{ mr: 2, display: { sm: "none" } }}
    //         >
    //           <MenuIcon />
    //         </IconButton> */
  }
  //         <Topbar title={"HI"} />
  //     </Box>
  //     <Box
  //       component="main"
  //       sx={{
  //         flexGrow: 1,
  //         p: 3,
  //         width: { sm: `100%` },
  //         height: "100%",
  //         background: "red",
  //       }}
  //     >
  //       {children}
  //     </Box>
  //   </Box>
  //       <Drawer
  //         variant="temporary"
  //         open={mobileOpen}
  //         onClose={handleDrawerToggle}
  //         ModalProps={{
  //           keepMounted: true, // Better open performance on mobile.
  //         }}
  //         sx={{
  //           display: { xs: "block", sm: "none" },
  //           "& .MuiDrawer-paper": {
  //             boxSizing: "border-box",
  //             width: drawerWidth,
  //             borderTopRightRadius: "40px",
  //             borderBottomRightRadius: "40px",
  //             background: "linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)",
  //             border: "none",
  //             borderWidth: "0px",
  //           },
  //         }}
  //       >
  //         <Sidebar />
  //       </Drawer>
  //       <Drawer
  //         variant="permanent"
  //         sx={{
  //           display: { xs: "none", sm: "block" },
  //           "& .MuiDrawer-paper": {
  //             boxSizing: "border-box",
  //             width: drawerWidth,
  //             borderTopRightRadius: "40px",
  //             borderBottomRightRadius: "40px",
  //             background: "linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)",
  //             border: "none",
  //             borderWidth: "0px",
  //           },
  //         }}
  //         open
  //       >
  //         <Sidebar />
  //       </Drawer>
  // </Box> */}
  return (
    <Grid container sx={{ backgroundColor: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
      <Grid item width={{ xs: 0, sm: NAVBAR.WIDTH }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: NAVBAR.WIDTH,
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
              background: 'linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)',
              border: 'none',
              borderWidth: '0px',
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              border: 'none',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            },
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: NAVBAR.WIDTH,
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
              background: 'linear-gradient(109.6deg, #5C35E0 11.5%, #7C5DE6 91.2%)',
              border: 'none',
              borderWidth: '0px',
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Grid>
      <Grid item container xs sx={{ minHeight: `calc(100vh)` }}>
        <Container maxWidth={'xl'} sx={{}}>
          <Grid item xs={12}>
            <Topbar handleToggle={handleDrawerToggle} />
          </Grid>
          <Grid item flex={1}>
            {/* {children} */}
            <Outlet />
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
