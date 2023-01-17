import { NotInterested } from "@mui/icons-material";
import { Paper } from "@mui/material";
import clsx from "clsx";
import { useReducer } from "react";
import PrepareExamToolbar from "../../parts/PrepareExamToolbar";
import questions from "./data.json"
import _ from "lodash"
import ExamPaper from "../../parts/ExamPaper";
import PrepareExamSearchToolbar from "../../parts/PrepareExamSearchToolbar";
import QuestionModal from "../../parts/QuestionModal";







const initial_state: PrepareExamReducer = {
    qIndex: -1,
    allQues: questions as any,
    paper: [],
    filter: "all",
    search: "",
    select: false,
    selects: [],
    quesModal: false,
    editQues: null,
    addModal: false,
    saveTemplate: false
}

function reducer(state: PrepareExamReducer, payload: any): PrepareExamReducer {
    return { ...state, ...payload }
}


export default function PrepareExam() {
    const [state, dispatch] = useReducer(reducer, initial_state)
    const { allQues, filter, paper, qIndex, search } = state




    const dragged = (n: number) => dispatch({ qIndex: n })

    const dropped = (n: number) => {
        let index = -1
        if (n > -1) index = n
        else if (qIndex > -1) index = qIndex
        const [q] = allQues.splice(index, 1)
        dispatch({ qIndex: -1, paper: [...paper, q], allQues })
    }

    const sendBack = (n: number) => {
        const [q] = paper.splice(n, 1)
        dispatch({ paper, allQues: [...allQues, q] })
    }

    const filterFunc = (e: PaperData) => {
        if (!search.length) return filter == "all" || e.type == filter
        else {
            if (filter != "all") dispatch({ filter: "all" })
            return e.question.toLowerCase().includes(search.toLowerCase())
        }
    }

    const question_length = paper.length

    return <>
        <QuestionModal dispatch={dispatch} state={state} />

        <div className="grid md:grid-cols-3 grid-cols-1">

            <div className="md:col-span-2" onDrop={() => dropped(-1)} onDragOver={e => e.preventDefault()}>
                <PrepareExamToolbar dispatch={dispatch} state={state} length={question_length} />
                {/* question paper */}

                <Paper className="overflow-y-auto md:h-[79vh] p-2 pt-4">
                    {paper.map((e, index) => <ExamPaper state={state} dispatch={dispatch} question={e} sendBack={sendBack} length={question_length} key={index} index={index} />)}
                </Paper>
            </div>
            {/* column 2 search and options */}
            <div className="bg-white border-l border-gray-300">
                <PrepareExamSearchToolbar state={state} dispatch={dispatch} />
                <div className="p-2 border-t border-gray-300 md:h-[67.5vh] overflow-y-auto">
                    {
                        allQues.filter(e => filterFunc(e)).map((e, index) => (
                            <div key={index} onDoubleClick={p => dropped(index)} draggable onDragStart={() => dragged(index)} className={
                                clsx("flex flex-wrap mx-2 relative text-wrap border rounded-lg p-6",
                                    index <= allQues.length - 1 ? "mb-3" : "")
                            }>
                                <div className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 text-gray-50 p-3 flex mx-2 mt-1 justify-center items-center text-lg">{e.type[0].toUpperCase()}</div>
                                {e.question}
                            </div>
                        ))
                    }
                    {!allQues.length && <div className="flex justify-center mt-40">
                        <NotInterested sx={{ fontSize: 60, color: "gray" }} />
                    </div>}
                </div>
            </div>
        </div>
    </>
}


