import type { JSX } from "react";
import { useTranslations } from "next-intl";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DoxaFormDashboardCard from "../DashboardCard";

function Hero(): JSX.Element {
  const t = useTranslations();

  return (
    <Box
      component="section"
      px={{ xs: 1, md: 3 }}
      py={{ xs: 6, md: 12 }}
      sx={{
        bgcolor: "background.default",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.75rem", lg: "3.5rem" },
              fontWeight: 800,
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            <span style={{ color: "#556270" }}>{t("hero__h1")}</span>
            <span style={{ color: "#454F5A" }}>{t("hero__h2")}</span>
            <span style={{ color: "#416EFF" }}>{t("hero__h3")}</span>
            <span style={{ color: "#39424B" }}>{t("hero__h4")}</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              mt: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            {t("hero__subheadline")}
          </Typography>
          <Box
            mt={3}
            display="flex"
            gap={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ px: { md: "2rem" } }}
              endIcon={<ArrowForwardIosIcon />}
            >
              {t("hero__start_trial")}
            </Button>
            <Button
              variant="text"
              sx={{
                px: { md: "2rem" },
                backgroundColor: 'background.paper',
                boxShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
              endIcon={<PlayCircleOutlineIcon />}
            >
              {t("hero__book_demo")}
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DoxaFormDashboardCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
