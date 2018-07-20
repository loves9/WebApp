import BusinessRequest from '@/core/http'

const HttpBusinessRequest = {

	/**
	 * mock请求示例
	 * 
	 */
	queryMockServer(){
		var args = {
			method: "get",
			url: '/user',
		};

		return BusinessRequest.baseRequest(args);
	},

	/**
	 * 请求费用类别
	 * 
	 * @params 参数
	 * return object
	 */ 
	queryFeeCategory(params) {
		var args = {
			method: "post",
			url: 'api://flow_info_app', // 带api://会自动拼接baseurl
			parameter: {
				action: "loadbasedata"
			}
		};

		return BusinessRequest.baseRequest(args);
	}

}

export default HttpBusinessRequest;

