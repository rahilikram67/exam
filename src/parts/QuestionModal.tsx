import { Add, Close } from "@mui/icons-material"
import { Button, IconButton, MenuItem, Modal, Select, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import _ from "lodash"

const style = {
    position: "relative",
    height: "400px",
    width: "400px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    borderRadius: 2,
    scrollbarWidth: "none"
}

interface Props {
    state: PrepareExamReducer
    dispatch: Function
}

const defaultValues = {
    countType: "decimal",
    question: "",
    type: "mcqs",
    options: []
}


export default ({ dispatch, state }: Props) => {

    const { watch, setValue, register, handleSubmit, reset } = useForm({
        defaultValues
    })

    useEffect(() => { if (state.editQues) reset(state.editQues as any) }, [state.editQues])

    const handleClose = () => {
        reset(defaultValues)
        dispatch({ quesModal: false, editQues: null })
    }

    const labels = [
        { label: "Upper Roman (I)", value: "upper-roman", },
        { label: "Lower Roman (i)", value: "lower-roman", },
        { label: "Upper Alpha (A)", value: "upper-alpha", },
        { label: "Lower Alpha (a)", value: "lower-alpha", },
        { label: "Numbers (1)", value: "decimal" }
    ]

    const addField = () => {
        const ops = watch()?.options || []
        setValue("options", ["" as never, ...ops])
    }

    const removeField = (i: number) => {
        const ops = watch("options")
        ops.splice(i, 1)
        setValue("options", ops)
    }

    const getVal = (str: string, i: number) => {
        let opts = watch("options")
        opts[i] = str as never
        setValue("options", opts)
    }

    return <Modal open={state.quesModal} onClose={handleClose}>
        <Box sx={style}>
            <form onSubmit={handleSubmit(async (data) => {
                data.options = _.compact(data.options)
                handleClose()
            })}>
                <div className="flex justify-between items-center border-b">
                    <p className="text-2xl text-gray-800 ml-2">{state.editQues ? "Edit Question" : "Add Question"}</p>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </div>
                <div className="p-5 hide-scrollbar h-80 overflow-y-scroll">
                    <p className="text-xl mb-1 flex">Type <span className="text-red-500 items-start">*</span></p>
                    <Select size="small" fullWidth value={watch("type")} onChange={e => setValue("type", e.target.value)}>
                        <MenuItem value="mcqs">Multiple Choice Question</MenuItem>
                        <MenuItem value="sub">Subjective Question</MenuItem>
                    </Select>

                    <p className="text-xl flex mt-2">Question <span className="text-red-500 items-start">*</span></p>
                    <textarea {...register("question")} rows={3} className="border mt-1 hide-scrollbar p-2 rounded-lg w-full" />

                    {
                        Boolean(watch()?.options?.length) && <div className="flex items-center flex-wrap mt-5 justify-between gap-2">
                            <div className="flex w-full justify-between">
                                <p className="text-xl flex">
                                    Options
                                    <span className="text-red-500 items-start">*</span>
                                </p>


                                <IconButton onClick={addField}>
                                    <Add />
                                </IconButton>


                                <Select size="small" onChange={e => setValue("countType", e.target.value)} value={watch("countType")}>
                                    {labels.map((e, index) => (
                                        <MenuItem key={index} value={e.value}>{e.label}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            {
                                watch("options").map((e: string, index: number) => (<div key={index} className="flex w-full justify-between">
                                    <TextField value={e} onChange={e => getVal(e.target.value, index)} fullWidth size="small" />
                                    <IconButton className="ml-auto" onClick={() => removeField(index)}>
                                        <Close />
                                    </IconButton>
                                </div>
                                ))
                            }
                        </div>
                    }
                </div>
                <div className="flex border-t fixed w-full bottom-0 rounded-b-lg bg-white justify-between p-2">
                    <Button onClick={handleClose} variant="contained">Close</Button>
                    <Button type="submit" variant="contained" color="success">Submit</Button>
                </div>
            </form>
        </Box>
    </Modal >
}