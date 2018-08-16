import HRStore from '@/common/store/index';

// 引入模块
import homeStore from '@/module/home/store'
import sampleStore from '@/module/sample/store'


// 注册 module
HRStore.registerModule('home', homeStore);
HRStore.registerModule('sample', sampleStore);



export default HRStore;