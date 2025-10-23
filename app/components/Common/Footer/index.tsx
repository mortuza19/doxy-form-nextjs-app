import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer(): JSX.Element {
  const t = useTranslations();
  return (
    <Box component="footer" className='bg-gray-50 border-t border-gray-200 mt-8'>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="py-6"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {t('footer__doxa_it_solutions')}
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary">
              <span>{t('footer__contact')}:</span> <Link href="mailto:hello@doxa.io" color="text.secondary" underline="hover">hello@doxa.io</Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
