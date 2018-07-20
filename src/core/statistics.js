/**
 * 数据统计
 * 
 */
/*{
    "appid": "string",  // 应用id，可以先行自定义，名称要有意义
    "ctime": "string",  // 发生时间  (设备时间?)
    "did": "string",    // 设备id（如imei或serial number），必要时MD5(?)
    "event": "string",  // 上报事件名
    "model": "string",  // 机型（如能取到）
    "seg": {            // 事件属性，与事件有关，可以根据实际情况设置
      "api": "string",  // 调用的接口
      "dur": "string",  // 调用时间
      "info": "string"  // 异常信息
    },
    "ua": "string",     // 浏览器 (?)
    "uid": "string"     // 系统赋予的账号或id，必要时MD5加密(?)
}*/
export default {

    /**
     * 接口埋点
     *
     * @param {*} appid 应用id
     * @param {*} api 接口名称
     * @param {*} describe 描述
     */
    exceptionEvent(appid, api, describe) {
        let requestParams = {
            appid: appid,
            ctime: new Date(),
            did: device.uuid,
            event: 'exception',
            model: device.model,
            seg: {
                api: api,
                dur: '',
                info: describe
            },
            ua: window.agent,
            uid: ''
        }

        console.log(navigator.userAgent)

        this.sendRequest(requestParams)
    },

    /**
     * 应用初始化统计 （应用入口进入成功加载后调用）
     *
     * @param {*} appid 应用id
     * @param {*} api 接口名称
     * @param {*} describe 描述
     */
    entryEvent(appid, api, describe) {
        let requestParams = {
            appid: appid,
            ctime: new Date(),
            did: device.uuid,
            event: 'entry',
            model: device.model,
            seg: {
                api: api,
                dur: '',
                info: describe
            },
            ua: window.agent,
            uid: ''
        }

        this.sendRequest(requestParams)
    },

    sendRequest(param) {
        MXCommon.ajax({
            type: "post",
            url: 'http://dt-rxtbak.chamc.com.cn:8080/dt/recv',
            dataType: "json",
            async: true,
            data: param,
            complete: function () { },
            success: function (data, status, xhr) {
            },
            error: function (data, status, xhr) {
            }
        })
    },

    /**
     * 调用接口时间埋点
     *
     * @param {*} appid
     * @param {*} api
     * @param {*} describe
     * @param {*} interval 时间间隔
     */
    intervalEvent(appid, api, describe, interval) {
        let requestParams = {
            appid: appid,
            ctime: new Date(),
            did: device.uuid,
            event: 'entry',
            model: device.model,
            seg: {
                api: api,
                dur: '',
                info: describe,
                interval: interval
            },
            ua: window.agent,
            uid: ''
        }

        this.sendRequest(requestParams)
    }
}