import React from 'react'
import { Col } from 'react-bootstrap'
import Zoom from '@mui/material/Zoom';
import { Tooltip } from '@mui/material';
import MuiModal from './MuiModal';

export default function ProjectCard(props) {
  const { title, link, describtion, longDescribtion, imageUrl, tooltip }= props
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Col sm={6} md={4} className='d-flex align-items-center'>
      <MuiModal open={open} handleClose={handleClose} data={props}/>
      <Tooltip followCursor TransitionComponent={Zoom} title={tooltip || "Check out this project!"}>
        <div onClick={handleClickOpen}>
          <div className='proj-imgbx rounded-3'>
            <img alt={title} className='w-100 aspectRatio rounded-3 pointer' src={imageUrl} />
            <div className='proj-txtx rounded-3'>
              <h4 className='hider'>{title}</h4>
              <span className='hider'>{describtion}</span>
            </div>
          </div>
        </div>
      </Tooltip>
    </Col>
  )
}
