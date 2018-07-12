/**
 * native插件类
 * 
 * 
 * 
 */
export default {
    dialog: {
        /**
         * 调用原生confirm方法
         * 点击时，从左到右依次返回 1 2
         *
         * @param {*} title
         * @param {*} message
         * @param {*} callback
         * @param {*} buttonLabels
         */
        confirm(title, message, callback, buttonLabels){
            if(buttonLabels == undefined || buttonLabels.length < 2){
                buttonLabels = ['确定', '取消']
            }
            navigator.notification.confirm(message, callback, title, buttonLabels)
        }
    }
 }