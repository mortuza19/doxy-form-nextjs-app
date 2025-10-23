'use client';
import type { JSX } from "react";

import { lighten } from "@mui/material";
import { FeatureIcon } from "@/app/models/Landing";

function CoreFeatureIcon({Icon}: { Icon: FeatureIcon}): JSX.Element {
  return (
    <Icon
      sx={(theme) => ({
        fontSize: 24,
        color: theme.palette.success.main, // Use primary color for icons
        mr: 1.5,
        p: 0.5,
        borderRadius: "50%",
        bgcolor: lighten(theme.palette.success.main, 0.9), // Light background for icon
      })}
    />
  );
}

export default CoreFeatureIcon;
