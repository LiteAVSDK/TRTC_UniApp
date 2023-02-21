## 简介
本 demo 介绍了各 [API](https://web.sdk.qcloud.com/trtc/uniapp/doc/zh-cn/TrtcCloud.html#enterRoom) 的使用方法，提供了对应的场景 demo。


## 环境准备
- [HBuilder 编辑器](https://www.dcloud.io/hbuilderx.html) 最低版本要求：3.3.11
- [DCloud 开发者中心注册](https://dev.dcloud.net.cn/) 之后登录 HBuilderX 编辑器


## 快速跑通
1. 克隆或者直接下载此仓库源码。
   ```
   git clone https://github.com/LiteAVSDK/TRTC_UniApp.git
   ```
2. 进入 Api-Example 目录
   ```
   cd TRTC_UniApp/Api-Example/
   ```
3. 安装依赖
   ```
   npm install
   ```
4. HBuilder 中导入项目
   
   <img src="https://web.sdk.qcloud.com/component/trtccalling/images/miniProgram/hbuilder-vue.png" width="350" align="middle" />

5. 修改 `./TRTC_UniApp/Api-Example/debug/GenerateTestUserSig.js` 文件 的 SDKAPPID 以及 SECRETKEY（阅读文末 [开通服务](#开通腾讯云服务)）
   
   <img src="https://web.sdk.qcloud.com/component/trtccalling/images/miniProgram/userSig.png" width="400" height="300" />

6. 导入 [腾讯云原生音视频插件](https://ext.dcloud.net.cn/plugin?id=7774) 到 Api-Example。具体请参考官网：[原生插件使用指南](https://ask.dcloud.net.cn/article/35412)。
   > 使用前需先登录 [uni-app 插件市场](https://ext.dcloud.net.cn/)，在插件详情页中购买，免费插件也可以在插件市场 0 元购。购买后才能够云端打包使用插件 购买插件时请选择正确的 appid，以及绑定正确包名。
   
   <img src="https://web.sdk.qcloud.com/component/TUIKit/assets/uni-app/uni-calling-1.png" width="400" />

7. 使用自定义基座打包 [腾讯云原生音视频插件](https://ext.dcloud.net.cn/plugin?id=7774) （注：请使用真机运行自定义基座）。
   
   <img src="https://web.sdk.qcloud.com/trtc/uniapp/download/image/hbuilder-auto.png" width="400" align="middle" />

8. 运行自定义基座。
   > 具体请参考官方：[uni-app 运行](https://en.uniapp.dcloud.io/quickstart-hx.html#%E8%BF%90%E8%A1%8Cuni-app)。
   
   <img src="https://web.sdk.qcloud.com/trtc/uniapp/download/image/run-auto.png" height="250" align="middle" />


## 开通腾讯云服务
### 1. 创建实时音视频 TRTC 应用
- [注册腾讯云账号](https://cloud.tencent.com/register?s_url=https%3A%2F%2Fcloud.tencent.com%2Fdocument%2Fproduct%2F647%2F49327) 并开通 [实时音视频](https://console.cloud.tencent.com/trtc)
- 在 [实时音视频控制台](https://console.cloud.tencent.com/trtc) 单击 **应用管理 > 创建应用** 创建新应用。
  
  <img src="https://main.qcloudimg.com/raw/34f87b8c0a817d8d3e49baac5b82a1fa.png" width="500" />

### 2. 获取 TRTC 密钥信息
> 首次创建实时音视频应用的腾讯云账号，可获赠一个 10000 分钟的音视频资源免费试用包。

- 在 **应用管理 > 应用信息** 中获取 SDKAppID 信息。
  <img src="https://qcloudimg.tencent-cloud.cn/raw/f7915fbbeb48518c2b25a413960f3432.png" width="500" />
- 在 **应用管理 > 快速上手** 中获取应用的 secretKey 信息。
  <img src="https://qcloudimg.tencent-cloud.cn/raw/06d38bbdbaf43e1f2b444edae00019fa.png" width="500" />


## 技术咨询
了解更多详情您可 QQ 咨询：309869925 (技术交流群)。

<img src="https://web.sdk.qcloud.com/component/TUIKit/assets/uni-app/uni-app-qq.png" width="200" />


## 相关文档：
- [uni-app 音视频插件](https://ext.dcloud.net.cn/plugin?id=7774)
- [API 文档](https://web.sdk.qcloud.com/trtc/uniapp/doc/zh-cn/index.html)
