import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const Faq = () => {
    return (
        <>
        <h1 className='heading'>FAQs</h1>
        <div className='Faq-container'>
            <Accordion defaultExpanded>
                <AccordionSummary className='question' expandIcon={<ExpandMoreIcon style={{ color: 'green',height:'40px',width:'40px' }} />}>
                    <Typography variant="h6">Is QTify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails className='answer'>
                    <Typography>
                        Yes! it is 100% free, and has 0% ads! 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <div className='Faq-container'>
        <Accordion>
            <AccordionSummary className='question' expandIcon={<ExpandMoreIcon style={{ color: 'green',height:'40px',width:'40px' }} />}>
                <Typography variant="h6">Can I download and listen to songs offline?</Typography>
            </AccordionSummary>
            <AccordionDetails className='answer'>
                <Typography>
                Sorry, unfortunately we don't provide the service to download any songs. 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    </>
    );
};

export default Faq;
