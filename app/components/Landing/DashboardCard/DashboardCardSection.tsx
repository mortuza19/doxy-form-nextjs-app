'use client';
import type { JSX } from "react";
import { FORM_SECTIONS } from "@/app/data/Landing";
import { Box, Button, Card, lighten, Typography } from "@mui/material";

import { StatusItem, StatusText } from "./styledComponents";
import { FormSection } from "@/app/models/Landing";

function DashboardCardSection({ section, index}: { section: FormSection, index: number}): JSX.Element {
  return (
    <Card
      key={section.title}
      variant="outlined"
      className="flex flex-col grow p-4"
      sx={{
        marginRight: index < FORM_SECTIONS.length - 1 ? 2 : 0,
        width: { xs: "100%" },
      }}
    >
      <Typography variant="body2" fontWeight="bold" mb={1}>
        {section.title}
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        justifyContent="space-between"
        flexGrow={1}
      >
        <Box>
          {section.items.map((item) => (
            <StatusItem key={item.name}>
              <Typography variant="body2" className="font-medium">
                {item.name}
              </Typography>
              <StatusText variant="body2" status={item.status}>
                {item.status}
              </StatusText>
            </StatusItem>
          ))}
        </Box>

        <Button
          variant="text"
          fullWidth
          className="mt-2 py-1 font-medium"
          sx={{
            backgroundColor: (theme) =>
              lighten(theme.palette.text.secondary, 0.9),
            fontFamily: "inherit",
          }}
        >
          {section.buttonText}
        </Button>
      </Box>
    </Card>
  );
}

export default DashboardCardSection;
