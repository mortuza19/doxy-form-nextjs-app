'use client';
import { type JSX } from "react";
import { useTranslations } from "next-intl";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

import { Step } from "@/app/models/Landing";
import { STEPS_DATA } from "@/app/data/Landing";


function StepCard({ data }: { data: Step }): JSX.Element {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        padding: 2,
        border: "1px solid #e0e0e0",
      }}
    >
      <CardContent>
        {/* Step Number Title (Styled like the image) */}
        <Typography
          variant="h4"
          sx={{ mb: { xs: 2, md: 3 }, display: "flex", gap: 1 }}
        >
          <Box component={'span'} sx={{ color: 'success.main'}}>{data.stepNumber}</Box>
          <Box component={'span'}>{data.title}</Box>
        </Typography>
        {/* Description */}
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HowItWorksSection(): JSX.Element {
    const t = useTranslations()
  return (
    <Box>
      <Box>
        {/* ==================== 2. How It Works Header ==================== */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            {t('howitworks__headline')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('howitworks__subheadline')}
          </Typography>
        </Box>

        {/* ==================== 3. Steps Section ==================== */}
        <Grid container spacing={3}>
          {STEPS_DATA.map((step) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={step.stepNumber}>
              <StepCard data={step} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
