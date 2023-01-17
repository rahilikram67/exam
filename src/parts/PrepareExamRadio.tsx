import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

interface Props {
    state: PrepareExamReducer
    dispatch: Function
}

export default function PrepareExamRadio({ state, dispatch }: Props) {
    const { filter } = state
    return <RadioGroup
        row
        value={filter}
        onChange={e => dispatch({ filter: e.target.value })}
        className="select-none"
    >
        <FormControlLabel value="mcqs" control={<Radio />} label="MCQS" />
        <FormControlLabel value="sub" control={<Radio />} label="Subjective" />
        <FormControlLabel value="all" control={<Radio />} label="ALL" />
    </RadioGroup>
}
