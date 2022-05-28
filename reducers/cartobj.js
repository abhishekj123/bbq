const changecartReducer = (state=[{
	"title":"Cart 1 10000005",
	"description": "Description Item 105",
	"price":"105.00",
	"status":true,
	"pic":"https://firebasestorage.googleapis.com/v0/b/restuarantsig.appspot.com/o/restimage%2Fcusine1.jpg?alt=media&token=97203d98-df03-475f-bbd3-1f6da0292b36"
}]
,action) => {
    switch(action.type){
        case 'ALTERCART':
            console.log("===== from ==== action")
            console.log(action.payload)
            state=[...action.payload]

            return state ;
        
        default:
            return state ;

    
    }
}

export default changecartReducer