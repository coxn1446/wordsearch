import {createSlice} from "@reduxjs/toolkit"

const boardSlice = createSlice({
    name: "board",
    initialState: {
        squares: [],
        mousePressed: false,
        easyWords: ["CRANE","FUCK"],
        easyWordKeys:
            [
                [0,1,2,3,4],
                [6,7,8,9]
            ],
        difficulty: "",
        selectedLetterKeys: []
    },
    reducers: {
        newBoard: (state, action) => {
            const rows = action.rows;
            const columns = action.columns;
            const numOfSquares = rows * columns;
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            for (let square = 0; square < numOfSquares; square++) {
                state.squares.push({
                    key: square,
                    letter: alphabet.charAt([Math.floor(Math.random() * alphabet.length)]),
                    isSelected: false
                })
            }
            state.easyWordKeys.forEach((easyWordKeyArray, index) => {
                easyWordKeyArray.forEach((wordKey, index1) => {
                    state.squares[wordKey].letter = state.easyWords[index].charAt(index1)
                })
              })
        },
        mouseDown: (state, action) => {
            state.mousePressed = true
            if (state.squares[action.id].isSelected) {
                state.squares[action.id].isSelected = false
                state.selectedLetterKeys = state.selectedLetterKeys.filter((element) => element !== state.squares[action.id].key)
            } else {
                state.squares[action.id].isSelected = true
                state.selectedLetterKeys.push(state.squares[action.id].key)
            }
        },
        mouseUp: (state) => {
            state.mousePressed = false
        },
        mouseOver: (state, action) => {
            if (state.squares[action.id].isSelected) {
                state.squares[action.id].isSelected = false
                state.selectedLetterKeys = state.selectedLetterKeys.filter((element) => element !== state.squares[action.id].key)
            } else {
                state.squares[action.id].isSelected = true
                state.selectedLetterKeys.push(state.squares[action.id].key)
            }

        },
        difficulty: (state, action) => {
            state.difficulty = action.difficulty
        },
        resetBoard: (state) => {
            state.squares = [];
            state.difficulty = "";
            state.selectedLetterKeys = [];
        },
    }
})

export const selectSquares = state => state.board.squares;
export const selectMousePressed = state => state.board.mousePressed;
export const selectEasyWords = state => state.board.easyWords;
export const selectEasyWordKeys = state => state.board.easyWordKeys;
export const selectDifficulty = state => state.board.difficulty;
export const boardReducer = boardSlice.reducer;
export const { newBoard } = boardSlice.actions;