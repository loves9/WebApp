// 引入iconfont
import '@/lib/iconfont/iconfont.css';
var Application = {
    /**
     * 业务入口，初始化之类的可以写在这里
     *
     * 
     */
    onCreate(core) {
    },

    /**
     * 判断某个函数是否连续调用多次（主要用于防止连续点击事件）
     * @param buffer {Number}
     */
    isRepeatExecute() {
        var buffer = arguments[0] || 1000;
        var key = Application.isRepeatExecute.caller.toString();
        if (Application.executelist[key]) {
            return true;
        }

        Application.executelist[key] = true;

        setTimeout(function () {
            delete Application.executelist[key];
        }, buffer);

        return false;
    }
}

export default Application