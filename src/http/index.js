import Vue from 'vue';
import axios from 'axios'
import { baseURL } from '../config';
import store from '../store'

const requestInstance = {
	baseRequest(args) {
		// console.log(process.env.RUNTIME_ENV)

		//公共参数
		var _parameter = {
			//这里可添加公共参数，预留
		};

		//合并业务请求参数
		if (args.hasOwnProperty('parameter')) {
			var keys = Object.keys(args.parameter);
			keys.forEach(function (key) {
				_parameter[key] = args.parameter[key];
			});
		}

		var _url = baseURL + args.url

		var _request = {
			url: _url,
			data: _parameter,
			dataType: "json",
			async: true
		};

		return _request;

	},

	/**
	 * mock请求示例
	 * 
	 */
	queryMockServer(){
		var args = {
			method: "get",
			url: '/user',
		};

		return this.baseRequest(args);
	},

	/**
	 * 请求费用类别
	 * 
	 * @params 参数
	 * return object
	 */ 
	// queryFeeCategory(params) {
	// 	var args = {
	// 		type: "POST",
	// 		url: '/jiuqiapp/flow_info_app',
	// 		parameter: {
	// 			action: "loadbasedata"
	// 		}
	// 	};

	// 	return this.baseRequest(args);
	// }

}

export default requestInstance;

