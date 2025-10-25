import { type JSX } from "react";
import { useTranslations } from "next-intl";

import { Card, CardContent, Typography, Box } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

import {
  StatBox,
  StatLabel,
  StatValue,
} from "./styledComponents";
import { FORM_SECTIONS, STATS } from "@/app/data/Landing";
import DashboardCardSection from "./DashboardCardSection";

function DoxaFormDashboardCard(): JSX.Element {
  const t = useTranslations();
  return (
    <Card
      variant="elevation"
      sx={{ padding: 2, width: { md: "100%", lg: "80%" }, margin: "0 auto" }}
    >
      {/* CARD HEADER */}
      <Box display="flex" gap={1} alignItems="center" mb={1}>
        <NoteAltIcon className="h-4.5 w-4.5" sx={{ color: 'success.main' }} />
        <Typography variant="h4" component="div">
          {t("dashboard__headline")}
        </Typography>
      </Box>

      <CardContent>
        {/* FORM SECTIONS - Dynamic Rendering */}
        <Box
          display="flex"
          mb={3}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {FORM_SECTIONS.map((section, index) => (<DashboardCardSection key={section.title} section={section} index={index} />))}
        </Box>

        {/* STATS SECTION - Dynamic Rendering */}
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "initial", md: "space-around" },
          }}
          mt={3}
          gap="0.75rem"
        >
          {/* Stats Boxes - LOOP 2 */}
          {STATS.map((stat) => (
            <StatBox variant="outlined" key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel variant="body2">{stat.label}</StatLabel>
            </StatBox>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DoxaFormDashboardCard;
