import { createSlice } from "@reduxjs/toolkit";

const bookFiles = [
    require('./kjv/1.json'),require('./kjv/2.json'),require('./kjv/3.json'),require('./kjv/4.json'),require('./kjv/5.json'),require('./kjv/6.json'),require('./kjv/7.json'),require('./kjv/8.json'),require('./kjv/9.json'),require('./kjv/10.json'),
    require('./kjv/11.json'),require('./kjv/12.json'),require('./kjv/13.json'),require('./kjv/14.json'),require('./kjv/15.json'),require('./kjv/16.json'),require('./kjv/17.json'),require('./kjv/18.json'),require('./kjv/19.json'),require('./kjv/20.json'),
    require('./kjv/21.json'),require('./kjv/22.json'),require('./kjv/23.json'),require('./kjv/24.json'),require('./kjv/25.json'),require('./kjv/26.json'),require('./kjv/27.json'),require('./kjv/28.json'),require('./kjv/29.json'),require('./kjv/30.json'),
    require('./kjv/31.json'),require('./kjv/32.json'),require('./kjv/33.json'),require('./kjv/34.json'),require('./kjv/35.json'),require('./kjv/36.json'),require('./kjv/37.json'),require('./kjv/38.json'),require('./kjv/39.json'),require('./kjv/40.json'),
    require('./kjv/41.json'),require('./kjv/42.json'),require('./kjv/43.json'),require('./kjv/44.json'),require('./kjv/45.json'),require('./kjv/46.json'),require('./kjv/47.json'),require('./kjv/48.json'),require('./kjv/49.json'),require('./kjv/50.json'),
    require('./kjv/51.json'),require('./kjv/52.json'),require('./kjv/53.json'),require('./kjv/54.json'),require('./kjv/55.json'),require('./kjv/56.json'),require('./kjv/57.json'),require('./kjv/58.json'),require('./kjv/59.json'),require('./kjv/60.json'),
    require('./kjv/61.json'),require('./kjv/62.json'),require('./kjv/63.json'),require('./kjv/64.json'),require('./kjv/65.json'),require('./kjv/66.json'),
]

const myBible = bookFiles.map(book => book)

const bibleSlice = createSlice({
    name: 'bible',
    initialState: {
        myBible: myBible,
        selectedBible: null
    },
    reducers: {
        selectBible: (state, action) => {
            state.selectedBible = action.payload;
        }
    }
})

export const { selectBible } = bibleSlice.actions
export default bibleSlice.reducer;