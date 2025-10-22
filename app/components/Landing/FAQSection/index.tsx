'use client';
import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { FAQ } from '../../../models/Landing';


function FAQSection(): JSX.Element {
  const t = useTranslations();
  const faqs: FAQ[] = [
    { question: t('faqsection__q1'), answer: t('faqsection__a1') },
    { question: t('faqsection__q2'), answer: t('faqsection__a2') },
    { question: t('faqsection__q3'), answer: t('faqsection__a3') },
    { question: t('faqsection__q4'), answer: t('faqsection__a4') }
  ];
  return (
    <Box display='flex' flexDirection='column' sx={{ gap: 4, alignItems: { xs: 'center', md: 'flex-start' }}}>
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
          {t('faqsection__about_company')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('faqsection__details')}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto', width: '100%' }}>
        <Typography variant="h1" align="center" sx={{ fontWeight: 800, mb: 4 }}>
          {t('faqsection__faq')}
        </Typography>
        {faqs.map((f) => (
          <Accordion key={f.question} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 700 }}>{f.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '0.8rem'}}>{f.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;
