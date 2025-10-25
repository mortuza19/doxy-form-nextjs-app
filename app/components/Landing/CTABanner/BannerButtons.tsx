'use client';
import type { JSX } from "react";

import { useTranslations } from "next-intl";
import { Button } from "@mui/material";

function BannerButtons(): JSX.Element {
    const t = useTranslations();
    return(
        <>
            <Button
                variant="contained"
                color="inherit"
                className="py-2"
                sx={{ color: "text.primary"}}
            >
                {t("ctabanner__start_trial")}
            </Button>
            <Button
                variant="outlined"
                className="py-2"
                sx={{
                    borderColor: "secondary.100",
                    color: "white",
                }}
            >
                {t("ctabanner__book_demo")}
            </Button>
        </>
    )
}

export default BannerButtons;