/**
 * 工具类
 * 
 */
export default {
    /**
     * 格式化一个数字为金额字符串
     * 
     * @param s {Number} 金额
     * @param n {Number} 精度（小数点后x位）
     * @returns {string}
     */
    formatAmount: function (s, n) {
        if (s > 1e15) return s;
        n = n > -1 && n <= 20 ? n : 2;

        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";

        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];

        var t = "";

        //每千位加一个“，”。
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }

        return (t.split("").reverse().join("") + (r ? "." + r : '')).replace('-,', '-');
    }
}