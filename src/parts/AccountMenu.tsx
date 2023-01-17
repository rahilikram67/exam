import { useState, MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { ButtonGroup, IconButton } from '@mui/material';
import { AccountCircle, Logout, Settings } from '@mui/icons-material';


export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <IconButton onClick={ev => setAnchorEl(ev.currentTarget)}>
            <AccountCircle fontSize="large" />
        </IconButton>
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <ButtonGroup orientation='vertical' variant='text'>
                <Button className='px-2'>
                    <Logout className='mr-3' />Logout
                </Button>
            </ButtonGroup>
        </Popover>
    </>
}
