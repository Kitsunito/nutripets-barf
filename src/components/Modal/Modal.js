//Components
import Dialog from '@mui/material/Dialog';

const ModalCustom = ({handleClose, open, children, className}) => {
    return (
        <Dialog onClose={handleClose} open={open} className={className}>
            {children}
        </Dialog>
    )
}

export default ModalCustom;