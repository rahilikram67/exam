import { Toolbar, IconButton, Modal, Typography, Button } from "@mui/material"
import { PictureAsPdf, Save, DeleteForever, SelectAll, Edit, Warning, Add, Remove, RemoveCircle } from "@mui/icons-material"
import { Box } from "@mui/system"
import { useState } from "react"

interface Props {
    length: number
    state: PrepareExamReducer
    dispatch: Function
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};


export default ({ state, dispatch, length }: Props) => {
    const { select, selects, paper, allQues } = state
    const [modal, setModal] = useState(false)
    const tool_action_color = length && select ? "secondary" : "inherit"
    const icons = [
        {
            value: "add",
            icon: <Add fontSize="large" />
        },
        {
            value: "pdf",
            icon: <PictureAsPdf className={!length ? "text-gray-400" : "text-gray-700"} fontSize="large" />
        },
        {
            value: "save",
            icon: <Save className={!length ? "text-gray-400" : "text-gray-700"} fontSize="large" />
        },
        {
            value: "select",
            icon: <SelectAll color={tool_action_color} className={!length ? "text-gray-400" : "text-gray-700"} fontSize="large" />
        },
        {
            value: "remove",
            icon: <RemoveCircle className={(!length || !selects.length) ? "text-gray-400" : "text-red-700"} fontSize="large" />
        },
        {
            value: "delete",
            icon: <DeleteForever className={!length ? "text-gray-400" : "text-red-700"} fontSize="large" />
        },

    ]

    const deleteForEver = () => {
        if (select) dispatch({
            selects: [],
            paper: paper.filter(e => !selects.find(v => e._id == v._id)),
            select: false
        })
        else dispatch({ paper: [] })
    }


    const handle = (choice: string) => {
        if (choice == "select") return dispatch({ select: !select, selects: select ? selects : [] })
        if (choice == "delete") return setModal(true)
        if (choice == "add") return dispatch({ quesModal: true })
        if (choice == "remove") return dispatch({
            selects: [],
            paper: paper.filter(e => !selects.find(v => e._id == v._id)),
            allQues: [...selects, ...allQues]
        })
        if (choice == "save") return dispatch({ saveTemplate: true })
    }

    const disabled = (value: string) => {
        if (length == 0 && value != "add") return true
        if (value == "remove" && !selects.length) return true
        return false
    }

    return <Toolbar className="border-b bg-white flex flex-row justify-end">
        {
            icons.map(e => <IconButton onClick={() => handle(e.value)} disabled={disabled(e.value)} key={e.value} className="mx-5">
                {e.icon}
            </IconButton>)
        }
        <Modal open={modal} onClose={() => setModal(false)}>
            <Box sx={modalStyle}>
                <span className="flex justify-center">
                    <Warning color="warning" sx={{ fontSize: 100 }} />
                </span>
                <p className="mt-2 text-red-600 font-bold text-2xl font-serif text-center">
                    This will delete all data from your selection
                </p>
                <div className="flex justify-between mt-5">
                    <Button onClick={() => setModal(false)} variant="contained">
                        cancel
                    </Button>
                    <Button onClick={() => {
                        deleteForEver()
                        setModal(false)
                    }} variant="contained" color="error">
                        OK
                    </Button>
                </div>
            </Box>
        </Modal>
    </Toolbar>
}