快速跑通 uni-app 音视频插件示例


## 快速跑通
### 步骤一：注册并创建 uni-app 账号

搭建 App 开发环境步骤如下：

1. 下载 [HBuilderX 编辑器 ](https://www.dcloud.io/hbuilderx.html)。
   > 项目中 HBuilderX 目前使用的最新版本，如果此前下载过 HBuilderX，为保证开发环境统一请更新到最新版本。
2. [DCloud 开发者中心注册](https://dev.dcloud.net.cn/) 之后登录 HBuilderX 编辑器。

### 步骤二：创建应用并开通腾讯云服务

#### 1. 创建实时音视频 TRTC 应用

- [注册腾讯云账号](https://cloud.tencent.com/register?s_url=https%3A%2F%2Fcloud.tencent.com%2Fdocument%2Fproduct%2F647%2F49327) 并开通 [实时音视频](https://console.cloud.tencent.com/trtc)
- 在 [实时音视频控制台](https://console.cloud.tencent.com/trtc) 单击 **应用管理 > 创建应用** 创建新应用。
  ![创建应用](https://main.qcloudimg.com/raw/34f87b8c0a817d8d3e49baac5b82a1fa.png)

#### 2. 获取 TRTC 密钥信息

- 在 **应用管理 > 应用信息** 中获取 SDKAppID 信息。
  ![](https://qcloudimg.tencent-cloud.cn/raw/f7915fbbeb48518c2b25a413960f3432.png)
- 在 **应用管理 > 快速上手** 中获取应用的 secretKey 信息。
  ![](https://qcloudimg.tencent-cloud.cn/raw/06d38bbdbaf43e1f2b444edae00019fa.png)

> 首次创建实时音视频应用的腾讯云账号，可获赠一个 10000 分钟的音视频资源免费试用包。

### 步骤三：下载并配置源码

1. 根据您的实际业务需求，下载源码

```javascript

# 进入 API-Example
cd Api-Example

# 安装依赖
npm i

```

2. 将工程文件，导入自己的 HBuilderX 工程。

     请参考官方 [uni-app 开发](https://uniapp.dcloud.io/quickstart-hx)

3. 设置 GenerateTestUserSig 文件中的相关参数。

- 找到并打开 `debug/GenerateTestUserSig.js` 文件。
- 设置 `GenerateTestUserSig.js` 文件中的相关参数。
  <ul><li>SDKAPPID：默认为0，请设置为实际的 SDKAppID。</li>
  <li>SECRETKEY：默认为空字符串，请设置为实际的密钥信息。</li></ul> 
  <img src="https://main.qcloudimg.com/raw/575902219de19b4f2d4595673fa755d4.png">

>! 注意
>- 本文提到的生成 `UserSig` 的方案是在客户端代码中配置 `SECRETKEY`，该方法中 `SECRETKEY` 很容易被反编译逆向破解，一旦您的密钥泄露，攻击者就可以盗用您的腾讯云流量，因此**该方法仅适合本地跑通 uni-app 和功能调试**。
>- 正确的 `UserSig` 签发方式是将 `UserSig` 的计算代码集成到您的服务端，并提供面向 App 的接口，在需要 `UserSig` 时由您的 App 向业务服务器发起请求获取动态 `UserSig`。更多详情请参见 [服务端生成 UserSig](https://cloud.tencent.com/document/product/647/17275#Server)。


### 步骤四：导入插件  [腾讯云原生音视频插件](https://ext.dcloud.net.cn/plugin?id=7774)

请参考官方 [原生插件使用指南](https://ask.dcloud.net.cn/article/35412)

#### 步骤1：购买uni-app原生插件

<img src="https://web.sdk.qcloud.com/component/TUIKit/assets/uni-app/uni-calling-1.png" width = "600"/>

使用前需先登录uni原生插件市场，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件
购买插件时请选择正确的appid，以及绑定正确包名。

#### 步骤2：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）

使用uni原生插件必须先提交云端打包才能生效，购买插件后在应用的manifest.json页面的“App原生插件配置”项下点击“选择云端插件”，选择需要打包的插件

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20190416/1b5297e695ad1536ddafe3c834e9c297.png)

直接云端打包后无法打log，不利于排错，所以一般先打一个自定义基座，把需要的原生插件打到真机运行基座里，然后在本地写代码调用调试。

>! 注意
>- 自定义基座不是正式版，真正发布时，需要再打正式包。使用自定义基座是无法正常升级替换apk的。
>- 请尽量不要使用本地插件，插件包超过自定义基座的限制，可能导致调试收费

#### 步骤五：编译运行

 请参考官方 [uni-app 运行](https://uniapp.dcloud.io/quickstart-hx?id=%e8%bf%90%e8%a1%8cuni-app)

#### 步骤六：打包发布

使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。

## 技术咨询

了解更多详情您可 QQ 咨询：309869925 (技术交流群)

<img src="https://web.sdk.qcloud.com/component/TUIKit/assets/uni-app/uni-app-qq.png" width = "600"/>


## 相关文档：
- [uni-app 音视频插件](https://ext.dcloud.net.cn/plugin?id=7774)
- [API 文档](https://web.sdk.qcloud.com/trtc/uniapp/doc/zh-cn/index.html)
