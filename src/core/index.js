import Utils from './utils'
import RouterManager from './router_manager'

var UA = navigator.userAgent;
var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
    isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
    isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
    isMobile = !!(isIphone || isAndroid);

if (isMobile) {

} else {

}

console.log(UA)

export default {
    Utils, RouterManager
}