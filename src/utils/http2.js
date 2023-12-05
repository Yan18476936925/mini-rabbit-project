const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'; // 基地址
import { useUserStore } from '@/store';

// 拦截器具体逻辑
const interceptor = {
  // 拦截前触发 - 等价于请求拦截器
  invoke(args) {
    uni.showLoading({ title: '加载中' });
    if (!args.url.startsWith('https')) {
      // 如果你的url 不是  以https开头,  帮你去拼接基地址
      args.url = baseURL + args.url;
    }
    // 如果你的url 是 https开头,不帮你去拼接地址了    模仿 axios

    const userStore = useUserStore();
    args.header = {
      ...args.header, // 保留原本的 header
      'source-client': 'miniapp', // 添加小程序端调用标识
      Authorization: userStore.profile.token,
    };

    // 后端 可能接收到来自于微信小程序的接口     图片接口
    // 后端 接收到 来自于  pc web端接口         图片接口
  },
  // 完成回调拦截
  complete(res) {
    uni.hideLoading();
  },
};
uni.addInterceptor('request', interceptor); // 网络请求 添加了拦截器
uni.addInterceptor('uploadFile', interceptor); // 上传文件 添加了拦截器

// 函数
const http = async (options) => {
  //  v2 返回结果 是数组 -> 打印  一般 await uni.xxxxx   返回值一般都是 数组
  // v3 正常结果
  const res = await uni.request(options);

  if (res.statusCode >= 200 && res.statusCode < 300) {
    return res.data;
  }

  if (res.statusCode === 401) {
    uni.navigateTo({ url: '/pages/login/login' });
    return;
  }
};

export default http; // 导出

/* 

很多原生的小程序的api 不支持 promise, 因此uniapp做封装,   wx.xxxx => uni.xxx 
1 让api都支持了promise 
2 让返回结果等于一个数组 [错误信息,返回内容]

*/
