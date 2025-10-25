import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { FAQ } from '../../../models/Landing';
import FAQAccordion from './FAQAccordion';


function FAQSection(): JSX.Element {
  const t = useTranslations();
  const faqs: FAQ[] = [
    { question: t('faqsection__q1'), answer: t('faqsection__a1') },
    { question: t('faqsection__q2'), answer: t('faqsection__a2') },
    { question: t('faqsection__q3'), answer: t('faqsection__a3') },
    { question: t('faqsection__q4'), answer: t('faqsection__a4') }
  ];
  return (
    <Box display='flex' flexDirection='column' gap={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
      <Box>
        <Typography variant="h2" className='font-bold mb-2'>
          {t('faqsection__about_company')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('faqsection__details')}
        </Typography>
      </Box>
      <Box maxWidth={800} mx="auto" width="100%">
        <Typography variant="h1" align="center" className='font-extrabold mb-8'>
          {t('faqsection__faq')}
        </Typography>
        {faqs.map((f) => (<FAQAccordion key={f.question} faq={f} />))}
      </Box>
    </Box>
  );
}

export default FAQSection;
