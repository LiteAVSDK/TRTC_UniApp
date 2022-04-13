## 如何使用

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

### 步骤三：获取 uni-app SDK，并引入工程

1. **购买 uni-app SDK 插件**：
   登录 [uni 原生插件市场](https://ext.dcloud.net.cn/plugin?id=7774)，在插件详情页中购买（免费插件也可以在插件市场 0 元购）。购买后才能够云端打包使用插件。**购买插件时请选择正确的 appid，以及绑定正确包名**。
   ![](https://qcloudimg.tencent-cloud.cn/raw/d270d9298975ee829ae9c8c405530765.png)
2. 使用自定义基座打包 uni 原生插件 （**请使用真机运行自定义基座**）。
   使用 uni 原生插件必须先提交云端打包才能生效，购买插件后在应用的 `manifest.json` 页面的 **App 原生插件配置** 项下单击**选择云端插件**，选择需要打包的插件。
   直接云端打包后无法打 log，不利于排错，所以一般先打一个自定义基座，把需要的原生插件打到真机运行基座里，然后在本地写代码调用调试。

> - 自定义基座不是正式版，真正发布时，需要再打正式包。使用自定义基座是无法正常升级替换 APK 的。
> - 请尽量不要使用本地插件，插件包超过自定义基座的限制，可能导致调试收费

### 步骤四：下载「js 封装层」SDK 中的 TrtcCloud 代码，并引入工程

## 基础使用

### **注意事项**

- 插件是 uni-app 原生插件，使用前请了解 uni-app 原生插件使用方法，官方教程：[uni 原生插件使用教程](https://nativesupport.dcloud.net.cn/NativePlugin/use/use)
- **使用视频功能时，页面必须使用 `.nvue` 文件构建**。因为扩展的 `component` 只能在 `.nvue` 文件中使用，不需要引入即可直接使用。目前的插件中包含扩展 `component`，用来显示视频流。详情可参考：https://nativesupport.dcloud.net.cn/NativePlugin/course/ios

### 初始化

```javascript
import TrtcCloud from "@/TrtcCloud/lib/index";
this.trtcCloud = TrtcCloud.createInstance();
```

### 事件监听

#### 进房事件

```javascript
this.trtcCloud.on("onEnterRoom", (result) => {
  if (result > 0) {
    console.log(`进房成功，耗时: ${result}ms`);
  }
});
```

#### 退房事件

```javascript
this.trtcCloud.on("onExitRoom", (reason) => {
  console.log(`退房 ${reason}`);
});
```

#### 远端进房

```javascript
this.trtcCloud.on("onRemoteUserEnterRoom", (userId) => {
  console.log(`远端进房: userId = ${userId}`);
});
```

#### 远端视频流

```javascript
this.trtcCloud.on("onUserVideoAvailable", (res) => {
  const { userId, available } = res;
  if (userId && available) {
    this.remoteUserId = userId;
  }
});
```

### 进入房间

```javascript
const param = { roomId, userId, sdkAppId, userSig };
this.trtcCloud.enterRoom(param, appScene);
```

### 开启音视频通话

在成功登入房间后，可调用 `startPreview` 开启音视频

```javascript
<template>
  <div>
    <trtc-local-view :userId="userId" style="height: 400rpx; flex: 1;"></trtc-local-view>
  </div>
</template>
<script>
  import TrtcLocalView from '@/TrtcCloud/view/TrtcLocalView';

  export default {
    components: {
      TrtcLocalView
    },
    methods: {
      startLocalPreview() {
        // 需要在登入房间之后才能开启音视频通话
        this.trtcCloud.startLocalPreview(true, this.userId);
      }
    }
  }
</script>
```

### 拉取其他用户音视频

```javascript
<template>
  <div>
    <trtc-remote-view v-if="remoteUserId" :userId="remoteUserId" :viewId="remoteUserId" style="height: 400rpx; flex: 1"></trtc-remote-view>
  </div>
</template>
<script>
  import TrtcRemoteView from '@/TrtcCloud/view/TrtcRemoteView';

  export default {
    components: {
      TrtcRemoteView
    },
    methods: {
      startRemoteView() {
        // 拉取远端音视频
        this.trtcCloud.startRemoteView(this.remoteUserId, 0, this.remoteUserId)
      }
    }
  }
</script>
```

### 退出房间

```javascript
exitRoom() {
  try {
    this.stopLocalPreview();
    this.stopRemoteView();
    this.trtcCloud.exitRoom();
  } catch (e) {
    // handle the exception
  }
},
```

### 销毁实例

```javascript
destroyInstance() {
  if (this.trtcCloud) {
    TrtcCloud.destroyInstance();
    this.trtcCloud = null;
  }
}
```

## 技术咨询

了解更多详情您可 QQ 咨询：309869925 (技术交流群)
