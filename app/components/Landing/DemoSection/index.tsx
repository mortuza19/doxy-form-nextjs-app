'use client';

import { useState, type JSX } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Typography, Paper, IconButton } from "@mui/material";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VideoModal from "../VideoModal";


// --- Component ---

function DemoSection(): JSX.Element {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID ?? "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      maxWidth="xl"
      display="flex"
      gap={4}
      alignItems="center"
      margin="0 auto"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {/* --- Left: Video Placeholder --- */}
      <Paper
        elevation={0}
        sx={{ backgroundColor: "secondary.dark" }}
        className="flex-1 aspect-video min-w-[340px] rounded-lg flex justify-center items-center cursor-pointer"
        onClick={handleOpen} // Open modal when clicking the placeholder
      >
        <IconButton
          color="primary"
          onClick={handleOpen}
          size="large"
          sx={{
            "& svg": { fontSize: 80 },
            color: "primary.main", // Primary color for the icon
          }}
        >
          <PlayCircleOutlineRoundedIcon />
        </IconButton>
      </Paper>

      {/* --- Right: Action Text and Buttons --- */}
      <Box sx={{ flex: 1, minWidth: 300, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h2" gutterBottom>
          {t('demoSection__headline')}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mb-6">
          {t('demoSection__subheadline')}
        </Typography>

        <Box display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
          <Button
            variant="contained"
            startIcon={<WatchLaterIcon />}
            onClick={handleOpen} // Open modal when clicking the button
            sx={{
              textTransform: "none",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {t('demoSection__watch_demo')}
          </Button>
          <Button
            variant="text"
            sx={{
              backgroundColor: 'background.paper',
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
            endIcon={<PlayCircleOutlineRoundedIcon />}
          >
            {t("demoSection__book_demo")}
          </Button>
        </Box>
      </Box>

      {/* --- Video Modal --- */}
      {
        open && <VideoModal open={open} handleClose={handleClose} videoId={videoId} />
      }
    </Box>
  );
}

export default DemoSection;
