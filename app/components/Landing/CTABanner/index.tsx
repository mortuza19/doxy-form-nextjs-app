import { type JSX } from "react";
import { useTranslations } from "next-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerButtons from "./BannerButtons";

function CTABanner(): JSX.Element {
  const t = useTranslations();
  return (
    <Box
      component="section"
      py={6}
      color="white"
      sx={{
        background: "linear-gradient(90deg,#2A56FF 0%, #7B61FF 100%)",
      }}
    >
      <Box px={2} maxWidth={1100} mx='auto'>
        <Typography variant="h2" className="font-extrabold">
          {t("ctabanner__headline")}
        </Typography>
        <Typography className="mt-2 mb-6">{t("ctabanner__subhead")}</Typography>
        <Box display="flex" gap={2}>
          <BannerButtons />
        </Box>
      </Box>
    </Box>
  );
}

export default CTABanner;
