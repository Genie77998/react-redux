let store
if(__DEBUG__){
	store = require("./store.dev").store
}else{
	store = require("./store.pro").store
}
export default store
