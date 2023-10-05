import { configureStore } from '@reduxjs/toolkit'
import me_authorsReducer from "./reducer/me_authorsReducer.js"
import authors from './reducer/authors.js'


const store = configureStore({
    reducer: {
        me_authorsReducer,
        authors

    }
})

export default store
