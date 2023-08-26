import {toast} from 'react-hot-toast'
import {apiConnector} from '../operations/apiConnector'
import {setLoading,setToken,setSignUpData,setnewquestion,setgame,setquestionno, setcorrect} from '../../slices/authSlice'
// import { useNavigate } from 'react-router-dom'
import {endpoints} from '../apis'
import {setpoints,setteamname,setbetamount} from '../../slices/gameSlice'
const {
LOGIN_API
} = endpoints;
// const navigate = useNavigate();
export function login(email1,password,navigate){
    return async (dispatch)=>{
        const toastid = toast.loading("Loading..");
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","https://xpedition-com.onrender.com/api/auth/login",{
                email1,
                password
            })
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("LOGIN SUCCESSFUL")
            dispatch(setToken(response.data.authtoken));
            localStorage.setItem("token",JSON.stringify(response.data.authtoken));
            localStorage.setItem("user",JSON.stringify(response.data.user))
            localStorage.setItem("game",JSON.stringify(response.data.user.game))
             dispatch(setSignUpData({...response.data.user}));
             dispatch(setquestionno({...response.data.user.game?.questionNo}))
            //  dispatch(setteamname(response.data.user.teamName));
            //  dispatch(setpoints(response.data.user.game.teamPoints));
            //  dispatch(setbetamount(response.data.user.game.betAmount));
             dispatch(setgame({...response.data.user.game}));
            
            console.log("printing response",response)
            navigate("/game")
        }catch(e){
            toast.error("Login Error") 
            console.log("login error",e)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastid);
    }
}

export function getnewquestion(questionNo){
    return async (dispatch)=>{
        const toastid = toast.loading("Loading..");
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","https://xpedition-com.onrender.com/api/addQuestion/getquestions",{
                questionNo,
            })
            if(!response.data.success){
                console.log("error gottttttttt")
                throw new Error(response.data.message);
            }
            toast.success("New question")
            // dispatch(setToken(response.data.authtoken));
            // localStorage.setItem("token",JSON.stringify(response.data.authtoken));
            localStorage.setItem("ques",JSON.stringify(response.data.questions))
            dispatch(setnewquestion({...response.data.questions}))
            
            console.log("printing question response",response)
        }catch(e){
            console.log("errro in fetching question",e)
            toast.error("fetch error") 
        }
        dispatch(setLoading(false))
        toast.dismiss(toastid);
    }
}
export function correct(questionNo, optionSelected, bet,email1){
    return async (dispatch)=>{
        const toastid = toast.loading("Verifying")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","https://xpedition-com.onrender.com/api/control/control",{
                questionNo,optionSelected,bet,email1
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            // toast.success("NEXT QUESTION")
            localStorage.setItem("game",JSON.stringify(response.data.game))
            dispatch(setgame({
                ...response.data.game
            }))
            dispatch(setquestionno({...response.data.questiono}))
            dispatch(setcorrect({...response.data.correct}))
            console.log("game updated",response.data)
        }catch(e){
            toast.error("login error")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastid)

    }
}

export function correctl(questionNo, optionSelected, bet,email1,navigate){
    return async (dispatch)=>{
        const toastid = toast.loading("Verifying")
        console.log("verifying")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","https://xpedition-com.onrender.com/api/control/control",{
                questionNo,optionSelected,bet,email1
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("DONE CHECKING")
            localStorage.setItem("game",JSON.stringify(response.data.game))
            dispatch(setgame({
                ...response.data.game
            }))
            // dispatch(setquestionno({...response.data.questiono}))
            console.log("game updated",response.data)
            navigate('/endgame')
        }catch(e){
            toast.error("login error")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastid)

    }
}
