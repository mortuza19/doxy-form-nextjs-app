import { type JSX } from 'react';

import { useTranslations } from 'next-intl';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';

import { HeaderIcon, ListIcon } from './ProblemIcons';

interface ProblemSolutionCardProps {
  icon: React.ElementType;
  title: string;
  points: string[];
  color: 'error' | 'success';
}

function ProblemSolutionCard({ data: { icon: Icon, title, points, color }}: { data: ProblemSolutionCardProps}) {
  return (
    <Card
      className='h-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-lg p-3'>
      <CardContent className='p-4'>
        {/* Header (Icon and Title) */}
        <Box display="flex" alignItems="center" mb={2}>
          <HeaderIcon color={color} Icon={Icon} />
          <Typography variant="h6" component="h3" fontWeight={600} color="text.primary">
            {title}
          </Typography>
        </Box>

        {/* List of Points */}
        <List sx={{ p: 0, '& .MuiListItem-root': { py: 0.5, px: 0 } }}>
          {points.map((point, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon className='min-w-7.5'>
                <ListIcon color={color} />
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