'use client';
import type { JSX } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQ } from "@/app/models/Landing";


function FAQAccordion({ faq }: { faq: FAQ}): JSX.Element {
  return (
    <Accordion key={faq.question} className="mb-2">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="font-bold">{faq.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-sm">{faq.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FAQAccordion;
