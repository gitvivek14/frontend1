import {toast} from 'react-hot-toast'
import {apiConnector} from '../operations/apiConnector'
import {setloading,setquestion} from '../../slices/gameSlice'
import { json } from 'react-router-dom';

export function getquestion(questionNo){
    return async(dispatch)=>{
        const toastid = toast.loading("Loading New Question..");
        dispatch(setloading(true));
        try{
            const response = await apiConnector("POST","http://localhost:5000/api/addQuestion/getquestions",{
                questionNo,
            })
            console.log("printing get question api resp",response)
            if(!response){
                throw new Error(response.data.message)
            }
            dispatch(setquestion({...response.data.questions}));
            localStorage.setItem("ques",JSON.stringify(response.data.questions))
            
            console.log("printing api data",response.data.questions)
        }catch(e){
            toast.error("Error in Loading new Question")

    }
    dispatch(setloading(false));
    toast.dismiss(toastid);

    }
}