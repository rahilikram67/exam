import { configureStore } from "@reduxjs/toolkit"
import utils from "./utils"
export const store = configureStore({
    reducer: {
        utils
    }
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

