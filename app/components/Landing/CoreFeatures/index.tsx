import type { JSX } from "react";
import { useTranslations } from "next-intl";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import { CORE_FEATURES, METRICS_DATA } from "@/app/data/Landing";
import { FeatureItem } from "@/app/models/Landing";
import { Metric } from "@/app/models/Landing";
import CoreFeatureIcon from "./CoreFeatureIcon";

function MetricCard({ data }: { data: Metric }): JSX.Element {
  return (
    <Card
      elevation={0}
      className="p-6 text-center h-full border rounded-lg border-gray-200"
    >
      <Typography variant="h3" color="success" className="mb-3">
        {data.percentage}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {data.description}
      </Typography>
    </Card>
  );
}

function FeatureCard({ item }: { item: FeatureItem }): JSX.Element {
  const Icon = item.icon; // The icon component from the data

  return (
    <Card
      elevation={0}
      variant="outlined"
      className="h-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-lg p-4 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-shadow"
    >
      <CardContent className="p-4 pb-6">
        {" "}
        {/* Override MUI default CardContent padding */}
        <Box display="flex" alignItems="center" mb={1.5}>
          {/* Icon */}  
          <CoreFeatureIcon Icon={Icon}/>
          {/* Title */}
          <Typography
            variant="h5"
            color="text.primary"
          >
            {item.title}
          </Typography>
        </Box>
        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ ml: 4, lineHeight: 1.5 }} // Align description text
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function CoreFeatures(): JSX.Element {
  const t = useTranslations();
  return (
    <Box>
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" gutterBottom>
          {t('core_feature__headline')}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {t('core_feature__subhead')}
        </Typography>
      </Box>

      {/* Grid of Features */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {CORE_FEATURES.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <FeatureCard item={feature} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {METRICS_DATA.map((metric, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <MetricCard data={metric} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoreFeatures;
