import type { JSX } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

import { USER_REVIEWS } from "@/app/data/Landing";

function UserReview(): JSX.Element {
  const t = useTranslations();
  return (
    <Box>
      <Box mb={10}>
        <Typography variant="h1" align="center" gutterBottom>
          {t("userreview__headline")}
        </Typography>
        <Grid container spacing={2} my={4}>
          {USER_REVIEWS.map((review) => (
            <Grid size={{ xs: 12, md: 4 }} key={review.user}>
              <Card variant="outlined" className="p-4 h-full">
                <CardContent className="flex flex-col gap-4 h-full">
                  <FormatQuoteOutlinedIcon
                    sx={{ fontSize: 24, color: "success.main" }}
                  />
                  <Typography variant="body2" gutterBottom sx={{ flexGrow: 1 }}>
                    <q>{review.review}</q>
                  </Typography>
                  <Box display="flex" gap={0.5}>
                    <Typography variant="subtitle1" color="text.secondary">
                      {review.user},
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {review.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        maxWidth="700px"
        gap={2}
        mt={10}
      >
        <Image
          src="shield.svg"
          alt="Shield logo"
          width={36}
          height={36}
        />
        <Box textAlign="center" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h2">
            {t("userreview__secure_compliant")}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {t("userreview__hippa_details")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserReview;
