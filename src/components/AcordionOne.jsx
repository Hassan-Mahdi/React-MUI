import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Box, Divider } from '@mui/material';

const Evaluator = ({ name, role, img }) => (
  <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
    <Avatar alt={name} src={img} />
    <div>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2">{role}</Typography>
    </div>
  </Box>
);

const CustomAccordion = ({ accordionId, title, data }) => {
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
        style={{ backgroundColor: activeAccordion === accordionId ? '#ECDFFA' : 'inherit' }}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Supervisor's Assessment</Typography>
        <Evaluator name="James Gordon" role="Manager Social Welfare" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography>Department Head</Typography>
        <Evaluator name="James Gordon" role="Manager Social Welfare" />
      </AccordionDetails>
      <Divider />
      <AccordionDetails>
        <Typography>Nominate Peer for Feedback</Typography>
        {data.map((evaluator) => (
          <Evaluator key={evaluator.name} {...evaluator} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const AcordionOne = () => {
  const personsData = [
    { name: 'James Gordon', role: 'Manager Social Welfare', img: '/static/images/avatar/1.jpg' },
    { name: 'Arlence McCoy', role: 'Manager Social Welfare', img: '/static/images/avatar/2.jpg' },
    { name: 'Eleanor Pena', role: 'Manager Social Welfare', img: '/static/images/avatar/3.jpg' },
    { name: 'Brooklyn Simmons', role: 'Manager Social Welfare', img: '/static/images/avatar/4.jpg' },
  ];

  return (
    <div>
      <CustomAccordion accordionId="panel1" title="Performance Evaluators" data={personsData} />
    </div>
  );
};

export default AcordionOne;
