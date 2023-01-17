interface PaperData {
    type: string
    question: string
    imgs?: string[]
    options?: string[]
    countType?: 'decimal' | 'square' | 'upper-roman'
    _id: string
}

interface PrepareExamReducer {
    qIndex: number
    allQues: PaperData[]
    paper: PaperData[]
    filter: string
    search: string
    select: boolean
    selects: PaperData[]
    quesModal: boolean
    editQues: PaperData | null
    addModal: boolean
    saveTemplate: boolean
}