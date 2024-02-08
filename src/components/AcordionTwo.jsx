import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Divider, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Evaluator = ({ name, role }) => (
  <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
    <div>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2">{role}</Typography>
    </div>
  </Box>
);

const CustomAccordion = ({ accordionId, data }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (panel) => {
    setActiveAccordion((prevPanel) => (prevPanel === panel ? null : panel));
  };

  return (
    <Accordion expanded={activeAccordion === accordionId} onChange={() => {}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-header`}
        onClick={() => handleClick(accordionId)}
        sx={{ backgroundColor: activeAccordion === accordionId ? '#ECDFFA' : 'inherit' }}
      >
        <Typography variant="h6">Goal</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Evaluator name="Name" role="Start Of the Goa, simple Dummy text of the" />
        <Evaluator name="Metric" role="Dollar" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography variant="h6">Timeline</Typography>
        {data.map((evaluator) => (
          <Evaluator key={evaluator.name} {...evaluator} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const AcordionTwo = () => {
  const goalOneData = [
    { name: 'Frequency', role: 'Quarterly' },
    { name: 'Start Date', role: 'Frequency' },
    { name: 'End Date', role: 'Dec, 15 2023' },
  ];

  return (
    <div>
      <CustomAccordion accordionId="panel2" data={goalOneData} />
    </div>
  );
};

export default AcordionTwo;
