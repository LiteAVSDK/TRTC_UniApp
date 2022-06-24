"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TrtcCloudImpl_1 = __importDefault(require("./TrtcCloudImpl"));
var version = '1.0.5';
/**
 * TrtcCloud
 *
 * @class TrtcCloud
 */
var TrtcCloud = /** @class */ (function () {
    function TrtcCloud() {
    }
    /**
     * 创建 TrtcCloud 单例
     *
     * @static
     * @memberof TrtcCloud
     * @example
     * TrtcCloud.createInstance();
     */
    TrtcCloud.createInstance = function () {
        console.log('----------------------------------------------------------------');
        console.log("                        SDK ".concat(version, "                    "));
        console.log('----------------------------------------------------------------');
        return TrtcCloudImpl_1.default._createInstance();
    };
    /**
     * 销毁 TrtcCloud 单例
     *
     * @static
     * @memberof TrtcCloud
     * @example
     * TrtcCloud.destroyInstance();
     */
    TrtcCloud.destroyInstance = function () {
        return TrtcCloudImpl_1.default._destroyInstance();
    };
    /**
     * 设置 TrtcCloud 事件监听
     *
     * @param {String} event 事件名称
     * @param {Function} callback 事件回调
     * @memberof TrtcCloud
     *
     * @example
     * this.trtcCloud = TrtcCloud.createInstance(); // 创建 trtcCloud 实例
     * this.trtcCloud.on('onEnterRoom', (res) => {});
     */
    TrtcCloud.prototype.on = function (event, callback) {
        return TrtcCloudImpl_1.default._getInstance().on(event, callback);
    };
    /**
     * 取消事件绑定<br>
     *
     * @param {String} event 事件名称，传入通配符 '*' 会解除所有事件绑定。
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.off('onEnterRoom');
     *
     * this.trtcCloud.off('*'); // 取消所有绑定的事件
     */
    TrtcCloud.prototype.off = function (event) {
        return TrtcCloudImpl_1.default._getInstance().off(event);
    };
    /**
     * 进房<br>
     * 调用接口后，您会收到来自 TRTCCallback 中的 [onEnterRoom(result)]{@link TRTCCallback#onEnterRoom} 回调
     * 如果加入成功，result 会是一个正数（result > 0），表示加入房间所消耗的时间，单位是毫秒（ms）。<br>
     * 如果加入失败，result 会是一个负数（result < 0），表示进房失败的错误码。
     *
     * * 参数 scene 的枚举值如下：
     * - {@link TRTCAppSceneVideoCall}：<br>
     *          视频通话场景，支持720P、1080P高清画质，单个房间最多支持300人同时在线，最高支持50人同时发言。<br>
     *          适合：[1对1视频通话]、[300人视频会议]、[在线问诊]、[视频聊天]、[远程面试]等。<br>
     * - {@link TRTCAppSceneAudioCall}：<br>
     *          语音通话场景，支持 48kHz，支持双声道。单个房间最多支持300人同时在线，最高支持50人同时发言。<br>
     *          适合：[1对1语音通话]、[300人语音会议]、[语音聊天]、[语音会议]、[在线狼人杀]等。<br>
     * - {@link TRTCAppSceneLIVE}：<br>
     *          视频互动直播，支持平滑上下麦，切换过程无需等待，主播延时小于300ms；支持十万级别观众同时播放，播放延时低至1000ms。<br>
     *          适合：[视频低延时直播]、[十万人互动课堂]、[视频直播 PK]、[视频相亲房]、[互动课堂]、[远程培训]、[超大型会议]等。<br>
     * - {@link TRTCAppSceneVoiceChatRoom}：<br>
     *          语音互动直播，支持平滑上下麦，切换过程无需等待，主播延时小于300ms；支持十万级别观众同时播放，播放延时低至1000ms。<br>
     *          适合：[语音低延时直播]、[语音直播连麦]、[语聊房]、[K 歌房]、[FM 电台]等。<br>
     *
     * **Note:**
     * 1. 当 scene 选择为 TRTCAppSceneLIVE 或 TRTCAppSceneVoiceChatRoom 时，您必须通过 TRTCParams 中的 role 字段指定当前用户的角色。
     * 2. 不管进房是否成功，enterRoom 都必须与 exitRoom 配对使用，在调用 `exitRoom` 前再次调用 `enterRoom` 函数会导致不可预期的错误问题。
     *
     * @param {TRTCParams} params - 进房参数
     * @param {Number} params.sdkAppId      - 应用标识（必填）
     * @param {String} params.userId        - 用户标识（必填）
     * @param {String} params.userSig       - 用户签名（必填）
     * @param {Number} params.roomId        - 房间号码, roomId 和 strRoomId 必须填一个, 若您选用 strRoomId，则 roomId 需要填写为0。
     * @param {String} params.strRoomId     - 字符串房间号码 [选填]，在同一个房间内的用户可以看到彼此并进行视频通话, roomId 和 strRoomId 必须填一个。若两者都填，则优先选择 roomId
     * @param {TRTCRoleType} params.role    - 直播场景下的角色，默认值：主播
     * - TRTCRoleAnchor: 主播，可以上行视频和音频，一个房间里最多支持50个主播同时上行音视频。
     * - TRTCRoleAudience: 观众，只能观看，不能上行视频和音频，一个房间里的观众人数没有上限。
     * @param {String=} params.privateMapKey - 房间签名（非必填）
     * @param {String=} params.businessInfo  - 业务数据（非必填）
     * @param {String=} params.streamId      - 自定义 CDN 播放地址（非必填）
     * @param {String=} params.userDefineRecordId - 设置云端录制完成后的回调消息中的 "userdefinerecordid" 字段内容，便于您更方便的识别录制回调（非必填）
     * @param {TRTCAppScene} scene 应用场景，目前支持视频通话（TRTCAppSceneVideoCall）、语音通话（TRTCAppSceneAudioCall）、在线直播（TRTCAppSceneLIVE）、语音聊天室（VTRTCAppSceneVoiceChatRoom）四种场景，
     * 详见 [TrtcDefines] 中 TRTCAppScene 参数定义
     *
     * @memberof TrtcCloud
     * @example
     * import { TRTCAppScene } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud = TrtcCloud.createInstance(); // 创建实例，只需创建一次
     * const params = {
     *   sdkAppId: 0,
     *   userId: 'xxx',
     *   roomId: 12345,
     *   userSig: 'xxx'
     * };
     * this.trtcCloud.enterRoom(params, TRTCAppScene.TRTCAppSceneVideoCall);
     */
    TrtcCloud.prototype.enterRoom = function (params, scene) {
        return TrtcCloudImpl_1.default._getInstance().enterRoom(params, scene);
    };
    /**
     * 退房<br>
     * 执行退出房间的相关逻辑释放资源后，SDK 会通过 `onExitRoom()` 回调通知到您
     *
     * **Note:**
     * 1. 如果您要再次调用 `enterRoom()` 或者切换到其它的音视频 SDK，请等待 `onExitRoom()` 回调到来后再执行相关操作，否则可能会遇到如摄像头、麦克风设备被强占等各种异常问题。
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.exitRoom();
     */
    TrtcCloud.prototype.exitRoom = function () {
        return TrtcCloudImpl_1.default._getInstance().exitRoom();
    };
    /**
     * 切换角色，仅适用于直播场景（TRTCAppSceneLIVE 和 TRTCAppSceneVoiceChatRoom）
     *
     * 在直播场景下，一个用户可能需要在“观众”和“主播”之间来回切换。
     * 您可以在进房前通过 TRTCParams 中的 role 字段确定角色，也可以通过 switchRole 在进房后切换角色。
     *
     * @param {TRTCRoleType} role - 目标角色，默认为主播
     * - TRTCRoleAnchor: 主播，可以上行视频和音频，一个房间里最多支持50个主播同时上行音视频。
     * - TRTCRoleAudience: 观众，只能观看，不能上行视频和音频，一个房间里的观众人数没有上限。
     *
     * @memberof TrtcCloud
     * @example
     * import { TRTCRoleType } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.switchRole(TRTCRoleType.TRTCRoleAudience);
     */
    TrtcCloud.prototype.switchRole = function (role) {
        return TrtcCloudImpl_1.default._getInstance().switchRole(role);
    };
    /**
     * 开启本地视频的预览画面<br>
     * 当开始渲染首帧摄像头画面时，您会收到 `onFirstVideoFrame(null)` 回调
     *
     * @param {Boolean} isFrontCamera 前置、后置摄像头，true：前置摄像头；false：后置摄像头，**默认为 true**
     * @param {String=} viewId 用于承载视频画面的渲染控件，使用原生插件中的 TRTCCloudUniPlugin-TXLocalViewComponent component，需要提供 viewId 属性值，例如 viewId=userId
     * @memberof TrtcCloud
     * @example
     * // 预览本地画面
     * this.trtcCloud.startLocalPreview(true, viewId);
     */
    TrtcCloud.prototype.startLocalPreview = function (isFrontCamera, viewId) {
        if (isFrontCamera === void 0) { isFrontCamera = true; }
        return TrtcCloudImpl_1.default._getInstance().startLocalPreview(isFrontCamera, viewId);
    };
    /**
     * 停止本地视频采集及预览
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.stopLocalPreview();
     */
    TrtcCloud.prototype.stopLocalPreview = function () {
        return TrtcCloudImpl_1.default._getInstance().stopLocalPreview();
    };
    /**
     * 显示远端视频或辅流<br>
     *
     * @param {String} userId 指定远端用户的 userId
     * @param {TRTCVideoStreamType} streamType 指定要观看 userId 的视频流类型
     * - 高清大画面：TRTCVideoStreamType.TRTCVideoStreamTypeBig
     * - 低清小画面：TRTCVideoStreamType.TRTCVideoStreamTypeSmall
     * - 辅流（屏幕分享）：TRTCVideoStreamType.TRTCVideoStreamTypeSub
     * @param {String} viewId 用于承载视频画面的渲染控件，使用原生插件中的 TRTCCloudUniPlugin-TXRemoteViewComponent component，需要提供 viewId 属性值，例如 viewId=userId
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoStreamType } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.startRemoteView(userId, TRTCVideoStreamType.TRTCVideoStreamTypeBig, viewId);
     */
    TrtcCloud.prototype.startRemoteView = function (userId, streamType, viewId) {
        return TrtcCloudImpl_1.default._getInstance().startRemoteView(userId, streamType, viewId);
    };
    /**
     * 停止显示远端视频画面，同时不再拉取该远端用户的视频数据流<br>
     * 指定要停止观看的 userId 的视频流类型
     *
     * @param {String} userId 指定的远端用户 ID
     * @param {TRTCVideoStreamType} streamType
     * - 高清大画面：TRTCVideoStreamType.TRTCVideoStreamTypeBig
     * - 低清小画面：TRTCVideoStreamType.TRTCVideoStreamTypeSmall
     * - 辅流（屏幕分享）：TRTCVideoStreamType.TRTCVideoStreamTypeSub
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoStreamType } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.stopRemoteView(remoteUserId, TRTCVideoStreamType.TRTCVideoStreamTypeBig);
     */
    TrtcCloud.prototype.stopRemoteView = function (userId, streamType) {
        return TrtcCloudImpl_1.default._getInstance().stopRemoteView(userId, streamType);
    };
    /**
     * 开启本地音频的采集和上行, 并设置音频质量<br>
     * 该函数会启动麦克风采集，并将音频数据传输给房间里的其他用户。 SDK 不会默认开启本地音频采集和上行，您需要调用该函数开启，否则房间里的其他用户将无法听到您的声音<br>
     * 主播端的音质越高，观众端的听感越好，但传输所依赖的带宽也就越高，在带宽有限的场景下也更容易出现卡顿
     *
     * @param {TRTCAudioQuality} quality 声音音质
     * - TRTCAudioQualitySpeech，流畅：采样率：16k；单声道；音频裸码率：16kbps；适合语音通话为主的场景，比如在线会议，语音通话。
     * - TRTCAudioQualityDefault，默认：采样率：48k；单声道；音频裸码率：50kbps；SDK 默认的音频质量，如无特殊需求推荐选择之。
     * - TRTCAudioQualityMusic，高音质：采样率：48k；双声道 + 全频带；音频裸码率：128kbps；适合需要高保真传输音乐的场景，比如在线K歌、音乐直播等
     * @memberof TrtcCloud
     * @example
     * import { TRTCAudioQuality } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.startLocalAudio(TRTCAudioQuality.TRTCAudioQualityDefault);
     */
    TrtcCloud.prototype.startLocalAudio = function (quality) {
        return TrtcCloudImpl_1.default._getInstance().startLocalAudio(quality);
    };
    /**
     * 关闭本地音频的采集和上行<br>
     * 当关闭本地音频的采集和上行，房间里的其它成员会收到 `onUserAudioAvailable(false)` 回调通知
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.stopLocalAudio();
     */
    TrtcCloud.prototype.stopLocalAudio = function () {
        return TrtcCloudImpl_1.default._getInstance().stopLocalAudio();
    };
    /**
     * 静音掉某一个用户的声音，同时不再拉取该远端用户的音频数据流
     *
     * @param {String}  userId - 用户 ID
     * @param {Boolean} mute   - true：静音；false：非静音
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.muteRemoteAudio('denny', true);
     */
    TrtcCloud.prototype.muteRemoteAudio = function (userId, mute) {
        return TrtcCloudImpl_1.default._getInstance().muteRemoteAudio(userId, mute);
    };
    /**
     * 静音掉所有用户的声音，同时不再拉取该远端用户的音频数据流
     *
     * @param {Boolean} mute - true：静音；false：非静音
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.muteAllRemoteAudio(true);
     */
    TrtcCloud.prototype.muteAllRemoteAudio = function (mute) {
        return TrtcCloudImpl_1.default._getInstance().muteAllRemoteAudio(mute);
    };
    /**
     * 设置音频路由
     *
     * 设置“音频路由”，即设置声音是从手机的扬声器还是从听筒中播放出来，因此该接口仅适用于手机等移动端设备。 手机有两个扬声器：一个是位于手机顶部的听筒，一个是位于手机底部的立体声扬声器。
     * 设置音频路由为听筒时，声音比较小，只有将耳朵凑近才能听清楚，隐私性较好，适合用于接听电话。 设置音频路由为扬声器时，声音比较大，不用将手机贴脸也能听清，因此可以实现“免提”的功能。
     *
     * @param {TRTCCloudDef} route 音频路由，即声音由哪里输出（扬声器、听筒）, 默认值：TRTCCloudDef.TRTC_AUDIO_ROUTE_SPEAKER（扬声器）
     * @memberof TrtcCloud
     * @example
     * import { TRTCCloudDef } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.setAudioRoute(TRTCCloudDef.TRTC_AUDIO_ROUTE_SPEAKER);
     */
    TrtcCloud.prototype.setAudioRoute = function (route) {
        return TrtcCloudImpl_1.default._getInstance().setAudioRoute(route);
    };
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                       设置 TRTCCallback 回调
    //
    /////////////////////////////////////////////////////////////////////////////////
    /**
     * 设置 TrtcCloud 回调
     *
     * @example
     * // 创建/使用/销毁 TrtcCloud 对象的示例代码：
     * import TrtcCloud from '@/TrtcCloud/lib/index';
     * this.trtcCloud = new TrtcCloud();
     *
     * // 添加事件监听的方法，事件关键字详见下方”通用事件回调“
     * this.trtcCloud.on('onEnterRoom', (result) => {
     *   if (result > 0) {
     *     console.log(`enter room success, spend ${result}ms`);
     *   } else {
     *     console.log(`enter room failed, error code = ${result}`);
     *   }
     * });
     *
     * @namespace TRTCCallback
     */
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      （一）事件回调
    //
    /////////////////////////////////////////////////////////////////////////////////
    /**
     * 错误回调，表示 SDK 不可恢复的错误，一定要监听并分情况给用户适当的界面提示
     *
     * @event TRTCCallback#onError
     * @param {Number} code 错误码，[详见](https://cloud.tencent.com/document/product/647/38308#.E9.94.99.E8.AF.AF.E7.A0.81.E8.A1.A8)
     * @param {String} message 错误信息
     * @param {Object} extraInfo 扩展信息字段，个别错误码可能会带额外的信息帮助定位问题
     */
    TrtcCloud.prototype.onError = function (code, message, extraInfo) { };
    /**
     * 警告回调，用于告知您一些非严重性问题，例如出现卡顿或者可恢复的解码失败
     *
     * @event TRTCCallback#onWarning
     * @param {Number} code 警告码，[详见](https://cloud.tencent.com/document/product/647/38308#.E8.AD.A6.E5.91.8A.E7.A0.81.E8.A1.A8)
     * @param {String} message 警告信息
     * @param {Object} extraInfo 扩展信息字段，个别警告码可能会带额外的信息帮助定位问题
     */
    TrtcCloud.prototype.onWarning = function (code, message, extraInfo) { };
    /**
     * 进房后的回调<br>
     * 调用 `enterRoom()` 接口执行进房操作后，会收到 `onEnterRoom(result)` 回调<br>
     * 如果加入成功，result 会是一个正数（result > 0），代表加入房间的时间消耗，单位是毫秒（ms）。<br>
     * 如果加入失败，result 会是一个负数（result < 0），代表进房失败的错误码。
     *
     * @event TRTCCallback#onEnterRoom
     * @param {Number} result 进房耗时
     */
    TrtcCloud.prototype.onEnterRoom = function (result) { };
    /**
     * 离开房间的事件回调<br>
     * 调用 `exitRoom()` 接口会执行退出房间的相关逻辑，例如释放音视频设备资源和编解码器资源等。待资源释放完毕，会通过 `onExitRoom()` 回调通知到您<br>
     *
     * **Note:**
     * - 如果您要再次调用 `enterRoom()` 或者切换到其他的音视频 SDK，请等待 `onExitRoom()` 回调到来之后再执行相关操作。 否则可能会遇到音频设备被占用等各种异常问题
     *
     * @event TRTCCallback#onExitRoom
     * @param {Number} reason 离开房间原因，0：主动调用 exitRoom 退房；1：被服务器踢出当前房间；2：当前房间整个被解散
     */
    TrtcCloud.prototype.onExitRoom = function (reason) { };
    /**
     * 开始渲染本地或远程用户的首帧画面<br>
     * 如果 userId 为 null，代表开始渲染本地采集的摄像头画面，需要您先调用 `startLocalPreview` 触发。 如果 userId 不为 null，代表开始渲染远程用户的首帧画面，需要您先调用 `startRemoteView` 触发<br>
     * 只有当您调用 `startLocalPreview()、startRemoteView() 或 startRemoteSubStreamView()` 之后，才会触发该回调
     *
     * @event TRTCCallback#onFirstVideoFrame
     * @param {String} userId 本地或远程用户 ID，如果 userId === null 代表本地，userId !== null 代表远程
     * @param {TRTCVideoStreamType} streamType 视频流类型：摄像头或屏幕分享
     * @param {Number} width 画面宽度
     * @param {Number} height 画面高度
     */
    TrtcCloud.prototype.onFirstVideoFrame = function (userId, streamType, width, height) { };
    /**
     * 开始播放远程用户的首帧音频（本地声音暂不通知）<br>
     * 如果 userId 为 null，代表开始渲染本地采集的摄像头画面，需要您先调用 `startLocalPreview` 触发。 如果 userId 不为 null，代表开始渲染远程用户的首帧画面，需要您先调用 `startRemoteView` 触发<br>
     * 只有当您调用 `startLocalPreview()、startRemoteView() 或 startRemoteSubStreamView()` 之后，才会触发该回调
     *
     * @event TRTCCallback#onFirstAudioFrame
     * @param {String} userId 远程用户 ID
     */
    TrtcCloud.prototype.onFirstAudioFrame = function (userId) { };
    /**
     * 麦克风准备就绪
     *
     */
    TrtcCloud.prototype.onMicDidReady = function () { };
    /**
     * 摄像头准备就绪
     *
     */
    TrtcCloud.prototype.onCameraDidReady = function () { };
    /**
     * 网络质量：该回调每2秒触发一次，统计当前网络的上行和下行质量<br>
     * userId 为本地用户 ID 代表自己当前的视频质量
     *
     * @param {String} localQuality 上行网络质量
     * @param {String} remoteQuality 下行网络质量
     */
    TrtcCloud.prototype.onNetworkQuality = function (localQuality, remoteList) { };
    /**
     * 有用户加入当前房间<br>
     * 出于性能方面的考虑，在两种不同的应用场景下，该通知的行为会有差别：<br>
     * 通话场景（TRTCAppScene.TRTCAppSceneVideoCall 和 TRTCAppScene.TRTCAppSceneAudioCall）：该场景下用户没有角色的区别，任何用户进入房间都会触发该通知。<br>
     * 直播场景（TRTCAppScene.TRTCAppSceneLIVE 和 TRTCAppScene.TRTCAppSceneVoiceChatRoom ）：该场景不限制观众的数量，如果任何用户进出都抛出回调会引起很大的性能损耗，所以该场景下只有主播进入房间时才会触发该通知，观众进入房间不会触发该通知
     *
     * @event TRTCCallback#onRemoteUserEnterRoom
     * @param {String} userId 用户标识 ID
     */
    TrtcCloud.prototype.onRemoteUserEnterRoom = function (userId) { };
    /**
     * 有用户离开当前房间<br>
     * 与 onRemoteUserEnterRoom 相对应，在两种不同的应用场景下，该通知的行为会有差别：<br>
     * 通话场景（TRTCAppScene.TRTCAppSceneVideoCall 和 TRTCAppScene.TRTCAppSceneAudioCall）：该场景下用户没有角色的区别，任何用户进入房间都会触发该通知。<br>
     * 直播场景（TRTCAppScene.TRTCAppSceneLIVE 和 TRTCAppScene.TRTCAppSceneVoiceChatRoom ）：该场景不限制观众的数量，如果任何用户进出都抛出回调会引起很大的性能损耗，所以该场景下只有主播进入房间时才会触发该通知，观众进入房间不会触发该通知
     *
     * @event TRTCCallback#onRemoteUserLeaveRoom
     * @param {String} userId 用户标识 ID
     * @param {Number} reason 离开原因，0 表示用户主动退出房间，1 表示用户超时退出，2 表示被踢出房间
     */
    TrtcCloud.prototype.onRemoteUserLeaveRoom = function (userId, reason) { };
    /**
     * 首帧本地音频数据已经被送出<br>
     * 在 `enterRoom()` 并 `startLocalAudio()` 成功后开始麦克风采集，并将采集到的声音进行编码。 当 SDK 成功向云端送出第一帧音频数据后，会抛出这个回调事件
     *
     * @event TRTCCallback#onSendFirstLocalAudioFrame
     */
    TrtcCloud.prototype.onSendFirstLocalAudioFrame = function () { };
    /**
     * 首帧本地视频数据已经被送出<br>
     * SDK 会在 `enterRoom()` 并 `startLocalPreview()` 成功后开始摄像头采集，并将采集到的画面进行编码。 当 SDK 成功向云端送出第一帧视频数据后，会抛出这个回调事件
     *
     * @event TRTCCallback#onSendFirstLocalVideoFrame
     * @param {TRTCVideoStreamType} streamType 视频流类型，大画面、小画面或辅流画面（屏幕分享）
     */
    TrtcCloud.prototype.onSendFirstLocalVideoFrame = function (streamType) { };
    /**
     * 技术指标统计回调<br>
     * 如果您是熟悉音视频领域相关术语，可以通过这个回调获取 SDK 的所有技术指标。 如果您是首次开发音视频相关项目，可以只关注 `onNetworkQuality` 回调
     *
     * **Note:**
     * - 每 2 秒回调一次
     *
     * @param {Object} statics 状态数据
     */
    TrtcCloud.prototype.onStatistics = function (statics) { };
    /**
     * 远端用户是否存在可播放的音频数据<br>
     *
     * @event TRTCCallback#onUserAudioAvailable
     * @param {String} userId 用户标识 ID
     * @param {Boolean} available 声音是否开启
     */
    TrtcCloud.prototype.onUserAudioAvailable = function (userId, available) { };
    /**
     * 远端用户是否存在可播放的主路画面（一般用于摄像头）<br>
     * 当您收到 `onUserVideoAvailable(userId, true)` 通知时，表示该路画面已经有可用的视频数据帧到达。 此时，您需要调用 `startRemoteView(userId)` 接口加载该用户的远程画面。 然后，您会收到名为 onFirstVideoFrame(userid) 的首帧画面渲染回调。<br>
     * 当您收到 `onUserVideoAvailable(userId, false)` 通知时，表示该路远程画面已经被关闭，可能由于该用户调用了 `muteLocalVideo()` 或 `stopLocalPreview()`。
     *
     * @event TRTCCallback#onUserVideoAvailable
     * @param {String} userId 用户标识 ID
     * @param {Boolean} available 画面是否开启
     */
    TrtcCloud.prototype.onUserVideoAvailable = function (userId, available) { };
    /**
     * 用于提示音量大小的回调，包括每个 userId 的音量和远端总音量<br>
     * 您可以通过调用 TrtcCloud 中的 enableAudioVolumeEvaluation 接口来开关这个回调或者设置它的触发间隔。 需要注意的是，调用 enableAudioVolumeEvaluation 开启音量回调后，无论频道内是否有人说话，都会按设置的时间间隔调用这个回调; 如果没有人说话，则 userVolumes 为空，totalVolume 为 0
     *
     * **Note:**
     * - userId 为本地用户 ID 时表示自己的音量，userVolumes 内仅包含正在说话（音量不为0）的用户音量信息
     *
     * @param {Number} userVolumes 所有正在说话的房间成员的音量，取值范围：0 - 100
     * @param {Number} totalVolume 所有远端成员的总音量, 取值范围：0 - 100
     */
    TrtcCloud.prototype.onUserVoiceVolume = function (userVolumes, totalVolume) { };
    return TrtcCloud;
}());
exports.default = TrtcCloud;
