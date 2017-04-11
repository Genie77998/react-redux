let api = {
		getActivity(){
	        return new Promise( (resolve, reject) => {
	            $.ajax({
	                url: "./src/data/activity.json",
	                type: 'get',
	                success:(resp) => {
	                	resolve(resp)
	                },
	                error() {
	                    reject(new Error('error'));
	                }
	            });
	        })
	    }
	}

export default api
