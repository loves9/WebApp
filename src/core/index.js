import Utils from './utils'



var UA = navigator.userAgent;  
var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),  
    isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),  
    isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),  
    isMobile = !!(isIphone || isAndroid);  

if(isMobile){
alert('手机')
}else{
alert('电脑')
}

console.log(UA)



export default {
    Utils
}