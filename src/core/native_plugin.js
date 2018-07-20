/**
 * native插件类
 * 
 * author fenng
 * 时间 2018年07月12日
 */
export default {
    dialog: {
        /**
         * 调用原生confirm
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
        },
        // 调用示例
        // NativeApi.dialog.confirm('请评价', '给个好评哦~', function(index) {
        //     alert(index)
        // });

        /**
         * 调用原生alert
         *
         * @param {*} title
         * @param {*} message
         * @param {*} callback
         * @param {*} buttonLabel
         */
        alert(title, message, callback, buttonLabel){
            if(buttonLabel == undefined || buttonLabel == ''){
                buttonLabel = '确定'
            }
            navigator.notification.alert(message, callback, title, buttonLabel)
        },
        // 调用示例
        // NativeApi.dialog.alert('请评价', '给个好评哦~', function() {
        // });
    },

    navigation: {
        /**
         * 使导航栏左侧按钮失效
         */
        disableBackButton(){
            alert('3333')
            MXWebui.disableBackKey()
        }
        // 调用示例
        // NativeApi.navigation.disableBackButton()
    }
 }