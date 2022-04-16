import {createSlice} from "@reduxjs/toolkit"

const boardSlice = createSlice({
    name: "board",
    initialState: {
        squares: [],
        mousePressed: false,
        words: [],
        easyWordKeys: [],
        mediumWordKeys: [],
        hardWordKeys: [],
        difficulty: "",
        selectedLetterKeys: [],
        answerKey: []

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
            const possibleWords = ["SKULLS","ENTITY","THRIVE","INTENT","FEMALE","FAMILY","AGAWAM","PLEASE","HANNAH","CHEESE","BUCKET","TRIPOD","SKIING","QUARTS","BUBBLE","HUMBLE","BRUTAL","FLOWER","MATRIX","CREATE","GOBLIN","CRUNCH","ORNERY","PAELLA","BUZZED","MURDER","WORDLE","SNAZZY","PFIZER","LAMBDA","TWISTY","DADBOD","MITRAL","WILDER","ORANGE","TRIAGE","SWANKY", "ROBUST"]
            const possibleEasyStartKeys = [0,6,12,18,24,30,1,2,3,4,5]
            const possibleEasyStartKeysHorizontal = [0,6,12,18,24,30]
            const possibleMediumStartKeys = [0,6,16,36,47,150,202,81,97,12,28,44,15,62,65,141,113,116,148]
            const possibleMediumStartKeysHorizontal = [0,6,16,36,47,150,202,81,97]
            const possibleHardStartKeys = [27,53,79,105,275,307,351,500,554,13,63,114,168,340,511,617,293,0,26,52,78,104,11,12,22,159,113,167,174,206,264,335,381,418,347,474]
            const possibleHardStartKeysHorizontal = [27,53,79,105,275,307,351,500,554,13,63,114,168,340,511,617,293]

            if(state.difficulty === "easy") {
                for (let i = possibleEasyStartKeys.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = possibleEasyStartKeys[i];
                    possibleEasyStartKeys[i] = possibleEasyStartKeys[j];
                    possibleEasyStartKeys[j] = temp;
                }
                const firstKeys = possibleEasyStartKeys.slice(0,1)
                firstKeys.forEach((firstKey) => {
                    let tempArray = [];
                    if (possibleEasyStartKeysHorizontal.includes(firstKey)){
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstKey)
                            firstKey++
                        }
                    } else {
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstKey)
                            firstKey+=6
                        }
                    }
                    state.easyWordKeys.push(tempArray);
                })
                for (let i = 0; i < 1; i++) {
                    let wordIndex = Math.floor(Math.random()*possibleWords.length)
                    state.words.push(possibleWords[wordIndex])
                }
                state.easyWordKeys.forEach((easyWordKeyArray, index) => {
                    easyWordKeyArray.forEach((easyWordKey, index1) => {
                        state.squares[easyWordKey].letter = state.words[index].charAt(index1)
                    })
                })
                state.easyWordKeys.forEach((easyWordKeyArray) => {
                    easyWordKeyArray.forEach((easyWordKey) => {
                        state.answerKey.push(easyWordKey)
                    })
                })
            }
            if(state.difficulty === "medium") {
                for (let i = possibleMediumStartKeys.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = possibleMediumStartKeys[i];
                    possibleMediumStartKeys[i] = possibleMediumStartKeys[j];
                    possibleMediumStartKeys[j] = temp;
                }
                const firstThreeKeys = possibleMediumStartKeys.slice(0,3)
                firstThreeKeys.forEach((firstThreeKey) => {
                    let tempArray = [];
                    if (possibleMediumStartKeysHorizontal.includes(firstThreeKey)){
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstThreeKey)
                            firstThreeKey++
                        }
                    } else {
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstThreeKey)
                            firstThreeKey+=15
                        }
                    }
                    state.mediumWordKeys.push(tempArray);
                })
                for (let i = 0; i < 3; i++) {
                    let wordIndex = Math.floor(Math.random()*possibleWords.length)
                    state.words.push(possibleWords[wordIndex])
                }
                state.mediumWordKeys.forEach((mediumWordKeyArray, index) => {
                    mediumWordKeyArray.forEach((mediumWordKey, index1) => {
                        state.squares[mediumWordKey].letter = state.words[index].charAt(index1)
                    })
                })
                state.mediumWordKeys.forEach((mediumWordKeyArray) => {
                    mediumWordKeyArray.forEach((mediumWordKey) => {
                        state.answerKey.push(mediumWordKey)
                    })
                })
            }
            if(state.difficulty === "hard") {
                for (let i = possibleHardStartKeys.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = possibleHardStartKeys[i];
                    possibleHardStartKeys[i] = possibleHardStartKeys[j];
                    possibleHardStartKeys[j] = temp;
                }
                const firstFiveKeys = possibleHardStartKeys.slice(0,5)
                firstFiveKeys.forEach((firstFiveKey) => {
                    let tempArray = [];
                    if (possibleHardStartKeysHorizontal.includes(firstFiveKey)){
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstFiveKey)
                            firstFiveKey++
                        }
                    } else {
                        for (let i = 0; i < 6; i++){
                            tempArray.push(firstFiveKey)
                            firstFiveKey+=25
                        }
                    }
                    state.hardWordKeys.push(tempArray);
                })
                for (let i = 0; i < 5; i++) {
                    let wordIndex = Math.floor(Math.random()*possibleWords.length)
                    state.words.push(possibleWords[wordIndex])
                }
                state.hardWordKeys.forEach((hardWordKeyArray, index) => {
                    hardWordKeyArray.forEach((hardWordKey, index1) => {
                        state.squares[hardWordKey].letter = state.words[index].charAt(index1)
                    })
                })
                state.hardWordKeys.forEach((hardWordKeyArray) => {
                    hardWordKeyArray.forEach((hardWordKey) => {
                        state.answerKey.push(hardWordKey)
                    })
                })
            }
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
            state.answerKey = [];
            state.easyWordKeys = [];
            state.mediumWordKeys = [];
            state.hardWordKeys = [];
            state.words = [];
        },
        checkAnswers: (state) => {
            const keyCheck = (currentValue) => state.answerKey.includes(currentValue)
            if (state.selectedLetterKeys.length === state.answerKey.length && state.selectedLetterKeys.every(keyCheck)){
                alert("You won!")
            } else {
                alert("You lost!")
                state.squares = [];
                state.difficulty = "";
                state.selectedLetterKeys = [];
                state.answerKey = [];
                state.easyWordKeys = [];
                state.words = [];
                state.mediumWordKeys = [];
                state.hardWordKeys = [];
            }
        }
    }
})

export const selectSquares = state => state.board.squares;
export const selectMousePressed = state => state.board.mousePressed;
export const selectWords = state => state.board.words;
export const selectEasyWordKeys = state => state.board.easyWordKeys;
export const selectDifficulty = state => state.board.difficulty;
export const boardReducer = boardSlice.reducer;
export const { newBoard } = boardSlice.actions;