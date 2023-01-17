import { Add, QuestionMark } from "@mui/icons-material";
import { IconButton, styled, TextField, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import PrepareExamRadio from "./PrepareExamRadio";

interface Props {
    state: PrepareExamReducer
    dispatch: Function
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 16,
    },
}));

const style = {
    p: 0,
    "&:hover": {
        backgroundColor: "black",
        color: "white",

    }
}

export default ({ state, dispatch }: Props) => {
    return <div className="flex pt-2 flex-col items-center justify-center">
        <div className="flex justify-end w-full items-center px-4 mb-2">
            <LightTooltip className="select-none" placement="left-start" title="Double click or Drag & Drop Questions on Paper">
                <IconButton sx={style} disableRipple size="small">
                    <QuestionMark fontSize="large" className="border rounded-full" />
                </IconButton>
            </LightTooltip>
        </div>
        <TextField onChange={e => dispatch({ search: e.target.value })} sx={{ width: "90%" }} fullWidth size="small" />
        <PrepareExamRadio state={state} dispatch={dispatch} />
    </div>
}