import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { PLANS } from '../../../data/Landing';

function Pricing(): JSX.Element {
  const t = useTranslations();
  return (
    <Box>
      <Box component="section" mb={4}>
        <Typography variant="h1" className='text-center'>
          {t('pricing__headline')}
        </Typography>
        <Typography variant='body2' color='text.secondary' align='center' mt={1}>
          {t('pricing__subheadline')}
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {PLANS.map((p, idx) => (
          <Grid size={{xs: 12, sm: 8, md: 4}} key={p.title}>
            <Paper elevation={1} sx={{ p: 3, minHeight: 220, border: idx === 1 ? '2px solid #2A56FF' : undefined }}>
              <Typography variant="h4" className='font-bold'>{p.title}</Typography>
              <Typography variant="h3" mt={1}>{p.price}</Typography>
              <Typography variant='body2' mb={2} mt={1} sx={{ color: 'text.secondary' }}>{p.subtitle}</Typography>
              <Box component="ul" pl={1} m={0}>
                {p.features.map(f => (
                  <Box component="li" key={f.feature} className='list-none' display="flex" gap={1} alignItems="center" mb={1}>
                    {
                      f.included ? <AddTaskRoundedIcon fontSize='small' sx={{ color: "success.dark" }} /> : <CancelRoundedIcon fontSize='small' sx={{ color: "error.main" }} />
                    }
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary'}}>{f.feature}</Typography>
                  </Box>
                ))}
              </Box>
              <Button variant='contained' className='py-1 mt-4'>
                {t('pricing__select')}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Pricing;
