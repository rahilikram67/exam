import { AddAPhoto, Close, DeleteForever, Edit } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"
import clsx from "clsx"
import { ChangeEvent } from "react"
import AddPhotoModal from "./AddPhotoModal"
import SaveTemplateModal from "./SaveTemplateModal"

interface Props {
    question: PaperData
    length: number
    index: number
    sendBack: Function
    state: PrepareExamReducer
    dispatch: Function
}





export default ({ state, dispatch, question, length, index, sendBack }: Props) => {
    const { select, selects } = state
    const ques_equality = (q: PaperData) => q._id == question._id
    const removeFromSelect = () => {
        const index = selects.findIndex(ques_equality)
        selects.splice(index, 1)
        dispatch({ selects })
    }
    const toggleCheck = (e: ChangeEvent<HTMLInputElement>,) => {
        if (e.target.checked) dispatch({ selects: [...selects, question] })
        else removeFromSelect()
    }
    const closed = () => {
        removeFromSelect()
        sendBack(index)
    }

    return <div className={
        clsx("flex flex-wrap flex-col text-wrap border select-none rounded-lg px-2 pb-2",
            index <= length - 1 ? "mb-3" : "")
    }>
        <div className={"w-full flex flex-row justify-" + (select ? "between" : "end")}>
            {state.select && <Checkbox checked={Boolean(selects.find(ques_equality))} onChange={e => toggleCheck(e)} disableRipple sx={{ p: 0 }} />}
            <div className="flex gap-x-1">
                <IconButton onClick={() => dispatch({ quesModal: true, editQues: question })}>
                    <Edit />
                </IconButton>
                <IconButton onClick={closed}>
                    <Close />
                </IconButton>
            </div>
        </div>
        {/* Question string */}
        <span>{question.question}</span>

        {/* options */}
        {
            question.options && <ol style={{ listStyle: question.countType }} className="flex px-3 gap-x-10 mt-3 justify-around flex-wrap" >
                {question.options.map((e, index) => <li key={index}>
                    {e}
                </li>)}
            </ol>
        }
        {/* images */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
            {question.imgs && question.imgs.map((img, index) => <div className="relative paper-img-del" key={index}>
                <img className="rounded-lg h-[100px] w-[100px]" src={img} />
                <div className="absolute invisible cursor-pointer top-0 right-0 rounded-full bg-white mr-1 mt-1 p-[2px] flex items-center justify-center ">
                    <DeleteForever className="text-red-500" />
                </div>
            </div>
            )}
            <IconButton onClick={e => dispatch({ addModal: true })} sx={{ width: 50, height: 50, alignSelf: "center" }}>
                <AddAPhoto fontSize="large" />
            </IconButton>
        </div>
        <AddPhotoModal state={state} dispatch={dispatch} />
        <SaveTemplateModal state={state} dispatch={dispatch} />
    </div>
}