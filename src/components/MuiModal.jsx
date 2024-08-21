import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MuiModal(props) {
    const { open, handleClose, data } = props
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                    <DialogTitle className='w-100 d-flex justify-content-between'><span>{data.title}</span><Button color='error' onClick={handleClose}>X</Button></DialogTitle>

                <DialogContent className='pt-0'>
                    <a target='_blank' href={data.link}>
                        <img src={data.imageUrl} className='w-100 rounded-3 mb-2' />
                    </a>
                    <DialogContentText id="alert-dialog-slide-description">
                        {data.longDescribtion || data.describtion}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth color='secondary' variant='contained' component={'a'} target='_blank' href={data.link}>Checkout Project</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
