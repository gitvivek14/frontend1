import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    loading:false,
    signupData:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null,
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) :null,
    question:localStorage.getItem("ques") ? JSON.parse(localStorage.getItem("ques")) : null,
    game:localStorage.getItem("game") ? JSON.parse(localStorage.getItem("game")) : null,
    questionnoo:{},
    correct:{},

}
const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setToken(state,value){
            state.token=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload;
        },
        setSignUpData(state,value){
            state.signupData=value.payload;
        },
        setnewquestion(state,value){
            state.question=value.payload;
        },
        setgame(state,value){
            state.game=value.payload;
        },
        setquestionno(state,value){
            state.questionnoo=value.payload;
        },
        setcorrect(state,value){
            state.correct=value.payload;
        }
    }
})


export const{setLoading,setSignUpData,setToken,setnewquestion,setgame,setquestionno,setcorrect} = authSlice.actions;
export default authSlice.reducer