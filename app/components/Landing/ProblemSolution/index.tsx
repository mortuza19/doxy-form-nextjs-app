'use client';

import { type JSX } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslations } from 'next-intl';

interface ProblemSolutionCardProps {
  icon: React.ElementType;
  title: string;
  points: string[];
  color: 'error' | 'success';
}

function ProblemSolutionCard({ data: { icon: Icon, title, points, color }}: { data: ProblemSolutionCardProps}) {
  const theme = useTheme();
  const iconColor = color === 'error' ? theme.palette.error.main : theme.palette.success.dark;
  const ListIcon = color === 'error' ? AutoGraphRoundedIcon : CheckCircleOutlineIcon;

  return (
    <Card
      sx={{
        height: '100%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        borderRadius: 2,
        p: 1.5,
      }}
    >
      <CardContent sx={{ p: '16px !important' }}>
        {/* Header (Icon and Title) */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon sx={{ fontSize: 24, color: iconColor, mr: 1 }} />
          <Typography variant="h6" component="h3" fontWeight={600} color="text.primary">
            {title}
          </Typography>
        </Box>

        {/* List of Points */}
        <List sx={{ p: 0, '& .MuiListItem-root': { py: 0.5, px: 0 } }}>
          {points.map((point, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <ListIcon sx={{ fontSize: 16, color: iconColor }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                    {point}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

function ProblemSolutionSectionOnly(): JSX.Element {
  const t = useTranslations();

  // Hardcoded Data for Problem Card
  const problemData = {
    icon: AutoGraphRoundedIcon,
    title: t('problem_solution__problem_headline'),
    points: [
      t('problem_solution__problem_point1'),
      t('problem_solution__problem_point2'),
      t('problem_solution__problem_point3'),
    ],
    color: 'error' as const,
  };

  // Hardcoded Data for Solution Card
  const solutionData = {
    icon: AutoAwesomeIcon,
    title: t('problem_solution__solution_headline'),
    points: [
      t('problem_solution__solution_point1'),
      t('problem_solution__solution_point2'),
      t('problem_solution__solution_point3'),
    ],
    color: 'success' as const,
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Problem Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProblemSolutionCard data={problemData} />
        </Grid>
        {/* Solution Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProblemSolutionCard data={solutionData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProblemSolutionSectionOnly;