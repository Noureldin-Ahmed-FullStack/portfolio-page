import React from 'react'
import { Col } from 'react-bootstrap'
import Zoom from '@mui/material/Zoom';
import { Tooltip } from '@mui/material';

export default function ProjectCard({ title, link, describtion, imageUrl }) {
  return (
    <Col sm={6} md={4} className='d-flex align-items-center'>

      <Tooltip followCursor TransitionComponent={Zoom} title="Check out This project">
        <div className=''>
          <a target='_blank' href={link}>
            <div className='proj-imgbx rounded-3'>
              <img alt='title' className='w-100 rounded-3' src={imageUrl} />
              <div className='proj-txtx rounded-3'>
                <h4 className='hider'>{title}</h4>
                <span className='hider'>{describtion}</span>
              </div>
            </div>
          </a>

        </div>
      </Tooltip>
    </Col>
  )
}
