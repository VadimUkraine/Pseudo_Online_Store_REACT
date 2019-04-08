const INIT_STATE = {
  name:'',
  role: '',
};

export default function roleNameReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'INPUT_ROLE_NAME':
     	localStorage.setItem("userRole", JSON.stringify({
	      name:action.payload.name,
	      role: action.payload.role
	   }))
     	return { ...state, name:action.payload.name, role: action.payload.role};
    default:
      if(JSON.parse(localStorage.getItem('userRole'))){
	      return JSON.parse(localStorage.getItem('userRole'));
	    }else{
	       return state;
	    }     
  }
}
