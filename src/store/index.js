import HRStore from '@/common/store/index';

// 引入模块
import homeStore from '@/module/home/store'
import exampleStore from '@/module/example/store'


// 注册 module
HRStore.registerModule('home', homeStore);
HRStore.registerModule('example', exampleStore);



export default HRStore;