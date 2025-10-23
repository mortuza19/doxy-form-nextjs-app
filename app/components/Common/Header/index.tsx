'use client';
import { useState, type JSX } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  useScrollTrigger,  // Add this
  Slide,
  styled,           // Add this
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
  },
}));

// Add HideOnScroll component
interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(): JSX.Element {
  const t = useTranslations();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (refId: string | null) => {
    if (refId) {
      const element = document.getElementById(refId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems = [
    {
      section: 'feature',
      ref: 'featureRef',
      label: t("header__feature"),
    },
    {
      section: 'demo',
      ref: 'demoRef',
      label: t("header__demo"),
    },
    {
      section: 'pricing',
      ref: 'pricingRef',
      label: t("header__pricing"),
    },
    {
      section: 'contact',
      ref: 'contactRef',
      label: t("header__contact"),
    },
    {
      section: 'login',
      ref: null,
      label: t("header__login"),
    }
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: 0,
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1, boxSizing: "border-box" }}>
          {/* Logo */}
          <Box display='flex' alignItems='center' gap={2}>
            <Image
              src="logo.svg"
              alt={t("header__doxa_logo_alt")}
              width={36}
              height={36}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              {t("header__company_name")}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {
              menuItems.slice(0, 4).map((item) => (
                <NavButton onClick={() => scrollToSection(item.ref)} key={item.section}>{item.label}</NavButton>
              ))
            }
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <NavButton>{t("header__login")}</NavButton>
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              {t("header__start_trial")}
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label={t("header__open_menu")}
            onClick={handleMenuOpen}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.section} onClick={() => {
                scrollToSection(item.ref!);
                handleMenuClose();
              }}>
                {item.label}
              </MenuItem>
            ))}
            <MenuItem>
              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleMenuClose}
              >
                {t("header__start_trial")}
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
