import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    question:localStorage.getItem("ques") ? JSON.parse(localStorage.getItem("ques")):null,
    points:null,
    teamname:null,
    betamount:null,
    loading:false,
}

const gameSlice = createSlice({
    name:"game",
    initialState:initialState,
    reducers:{
        setpoints(state,value){
            state.points = value.payload;

        },
        setteamname(state,value){
            state.teamname = value.payload;

        },
        setbetamount(state,value){
            state.betamount = value.payload;

        },
        setquestion(state,value){
            state.question=value.payload;
        },
        setloading(state,value){
            state.loading=value.payload;
        }
    }
})


export const {setpoints,setteamname,setbetamount,setloading,setquestion} = gameSlice.actions;
export default gameSlice.reducer