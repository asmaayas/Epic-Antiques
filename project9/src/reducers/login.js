import {GET_ADMIN} from '../action/types';

const initialState = {
    admin:'',
    loading:true,
    error:''
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_ADMIN:
            if(action.payload !== ''){
                return{...state,
                    admin:action.payload,
                    loading:false,}
            }else{
                return{
                    ...state,
                    error:' email or password is invalid',
                    loading:false,
                }
            }
        case 'logout':
           
                sessionStorage.clear();
           
        default: return state
    }

}
