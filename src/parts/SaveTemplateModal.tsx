import { Close } from "@mui/icons-material";
import { Modal, Box, Divider, Typography, Button, IconButton, TextField } from "@mui/material"


interface Props {
    state: PrepareExamReducer
    dispatch: Function
}




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    height: 170,
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24
};
export default ({ state, dispatch }: Props) => {
    const onClose = () => dispatch({ saveTemplate: false })
    return <Modal open={state.saveTemplate} onClose={onClose}>
        <Box sx={style}>
            <div className="px-2 py-2 flex items-center justify-between">
                <span className="text-xl">Save Exam Template</span>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </div>
            <Divider />
            <div className="p-2 flex items-center justify-between">
                <TextField size="small" placeholder="Title" fullWidth />
            </div>
            <div className="flex border-t fixed w-full bottom-0 rounded-b-lg bg-white justify-between p-2">
                <Button onClick={onClose} variant="contained">Close</Button>
                <Button onClick={onClose} variant="contained" color="success">Submit</Button>
            </div>
        </Box>
    </Modal>
}