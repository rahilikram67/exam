import { createSlice } from "@reduxjs/toolkit"

const utils = createSlice({
    name: "sidebar",
    initialState: {
        sidebarLeftOpen: false
    },
    reducers: {
        toggleSideBarLeft(state, action) {
            state.sidebarLeftOpen = action.payload
        }
    }
})

export const { toggleSideBarLeft } = utils.actions

export default utils.reducer