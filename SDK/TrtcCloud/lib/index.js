import TrtcCloudImpl from './TrtcCloudImpl';
import { TRTCVideoStreamType, } from './TrtcDefines';
const version = '1.2.0';
export * from './TrtcDefines';
/**
 * TrtcCloud
 *
 * @class TrtcCloud
 */
export default class TrtcCloud {
    /**
     * 创建 TrtcCloud 单例
     *
     * @static
     * @memberof TrtcCloud
     * @example
     * TrtcCloud.createInstance();
     */
    static createInstance() {
        console.log('----------------------------------------------------------------');
        console.log(`                        SDK ${version}                    `);
        console.log('----------------------------------------------------------------');
        return TrtcCloudImpl._createInstance();
    }
    /**
     * 销毁 TrtcCloud 单例
     *
     * @static
     * @memberof TrtcCloud
     * @example
     * TrtcCloud.destroyInstance();
     */
    static destroyInstance() {
        return TrtcCloudImpl._destroyInstance();
    }
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
    on(event, callback) {
        return TrtcCloudImpl._getInstance().on(event, callback);
    }
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
    off(event) {
        return TrtcCloudImpl._getInstance().off(event);
    }
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
    enterRoom(params, scene) {
        return TrtcCloudImpl._getInstance().enterRoom(params, scene);
    }
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
    exitRoom() {
        return TrtcCloudImpl._getInstance().exitRoom();
    }
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
    switchRole(role) {
        return TrtcCloudImpl._getInstance().switchRole(role);
    }
    /**
     * 开启本地视频的预览画面<br>
     * 当开始渲染首帧摄像头画面时，您会收到 `onFirstVideoFrame(null)` 回调
     *
     * @param {Boolean} isFrontCamera 前置、后置摄像头，true：前置摄像头；false：后置摄像头，**默认为 true**
     * @param {String=} viewId 用于承载视频画面的渲染控件，使用原生插件中的 TRTCCloudUniPlugin-TXLocalViewComponent component，需要提供 viewId 属性值，例如 viewId=userId
     * @memberof TrtcCloud
     * @example
     * // 预览本地画面
     * const viewId = this.userId;
     * this.trtcCloud.startLocalPreview(true, viewId);
     */
    startLocalPreview(isFrontCamera = true, viewId) {
        return TrtcCloudImpl._getInstance().startLocalPreview(isFrontCamera, viewId);
    }
    /**
     * 设置视频编码器的编码参数
     * - 该设置能够决定远端用户看到的画面质量，同时也能决定云端录制出的视频文件的画面质量。
     * @param {TRTCVideoEncParam} param 用于设置视频编码器的相关参数
     * @memberof TrtcCloud
     * @example
     *
     * import { TRTCVideoResolution, TRTCVideoResolutionMode, TRTCVideoEncParam } from '@/TrtcCloud/lib/TrtcDefines';
     * const videoResolution = TRTCVideoResolution.TRTCVideoResolution_480_360;
     * const videoResolutionMode = TRTCVideoResolutionMode.TRTCVideoResolutionModeLandscape; // 横屏采集
     * const videoFps = 15;
     * const videoBitrate = 900;
     * const minVideoBitrate = 200;
     * const enableAdjustRes = false;
     * // const param = new TRTCVideoEncParam(videoResolution, videoResolutionMode, videoFps, videoBitrate, minVideoBitrate, enableAdjustRes); // v1.1.0 方式
     *
     * const param = { // v1.2.0 以上版本支持的方式
     *  videoResolution,
     *  videoResolutionMode,
     *  videoFps,
     *  videoBitrate,
     *  minVideoBitrate,
     *  enableAdjustRes,
     * };
     *
     * this.trtcCloud.setVideoEncoderParam(param);
     */
    setVideoEncoderParam(param) {
        return TrtcCloudImpl._getInstance().setVideoEncoderParam(param);
    }
    /**
     * 切换前置或后置摄像头
     *
     * @param {Boolean} isFrontCamera 前置、后置摄像头，true：前置摄像头；false：后置摄像头
     * @memberof TrtcCloud
     * @example
     * // 切换前置或后置摄像头
     * const isFrontCamera = true;
     * this.trtcCloud.switchCamera(isFrontCamera);
     */
    switchCamera(isFrontCamera) {
        return TrtcCloudImpl._getInstance().switchCamera(isFrontCamera);
    }
    /**
     * 停止本地视频采集及预览
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.stopLocalPreview();
     */
    stopLocalPreview() {
        return TrtcCloudImpl._getInstance().stopLocalPreview();
    }
    /**
     * 设置本地画面的渲染参数，可设置的参数包括有：画面的旋转角度、填充模式以及左右镜像等。
     * @param {TRTCRenderParams} params - 本地图像的参数
     * @param {TRTCVideoRotation} params.rotation - 图像的顺时针旋转角度，支持90、180以及270旋转角度，默认值：TRTCVideoRotation.TRTCVideoRotation_0
     * @param {TRTCVideoFillMode} params.fillMode - 视频画面填充模式，填充（画面可能会被拉伸裁剪）或适应（画面可能会有黑边），默认值：TRTCVideoFillMode.TRTCVideoFillMode_Fill
     * @param {TRTCVideoMirrorType} params.mirrorType - 画面镜像模式，默认值：TRTCVideoMirrorType.TRTCVideoMirrorType_Auto
     *
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoRotation, TRTCVideoFillMode, TRTCVideoMirrorType } from '@/TrtcCloud/lib/TrtcDefines';
     * const renderParams = {
     *  rotation: TRTCVideoRotation.TRTCVideoRotation_0,
     *  fillMode: TRTCVideoFillMode.TRTCVideoFillMode_Fill,
     *  mirrorType: TRTCVideoMirrorType.TRTCVideoMirrorType_Auto
     * };
     * this.trtcCloud.setLocalRenderParams(renderParams);
     */
    setLocalRenderParams(params) {
        return TrtcCloudImpl._getInstance().setLocalRenderParams(params);
    }
    /**
     * 暂停/恢复发布本地的视频流
     *
     * 该接口可以暂停（或恢复）发布本地的视频画面，暂停之后，同一房间中的其他用户将无法继续看到自己画面。 该接口在指定 TRTCVideoStreamTypeBig 时等效于 start/stopLocalPreview 这两个接口，但具有更好的响应速度。 因为 start/stopLocalPreview 需要打开和关闭摄像头，而打开和关闭摄像头都是硬件设备相关的操作，非常耗时。 相比之下，muteLocalVideo 只需要在软件层面对数据流进行暂停或者放行即可，因此效率更高，也更适合需要频繁打开关闭的场景。 当暂停/恢复发布指定 TRTCVideoStreamTypeBig 后，同一房间中的其他用户将会收到 onUserVideoAvailable 回调通知。 当暂停/恢复发布指定 TRTCVideoStreamTypeSub 后，同一房间中的其他用户将会收到 onUserSubStreamAvailable 回调通知。
     * @param {TRTCVideoStreamType} streamType 要暂停/恢复的视频流类型（仅支持 TRTCVideoStreamTypeBig 和 TRTCVideoStreamTypeSub）
     * @param {Boolean} mute - true：屏蔽；false：开启，默认值：false
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.muteLocalVideo(TRTCVideoStreamType.TRTCVideoStreamTypeBig, true);
     */
    muteLocalVideo(streamType, mute) {
        return TrtcCloudImpl._getInstance().muteLocalVideo(streamType, mute);
    }
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
     * const viewId = this.remoteUserId;
     * this.trtcCloud.startRemoteView(userId, TRTCVideoStreamType.TRTCVideoStreamTypeBig, viewId);
     */
    startRemoteView(userId, streamType, viewId) {
        return TrtcCloudImpl._getInstance().startRemoteView(userId, streamType, viewId);
    }
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
    stopRemoteView(userId, streamType) {
        return TrtcCloudImpl._getInstance().stopRemoteView(userId, streamType);
    }
    /**
     * 设置远端画面的渲染参数，可设置的参数包括有：画面的旋转角度、填充模式以及左右镜像等。
     * @param {String} userId 远端用户 ID
     * @param {TRTCVideoStreamType} streamType 可以设置为主路画面（TRTCVideoStreamTypeBig）或辅路画面（TRTCVideoStreamTypeSub）
     * @param {TRTCRenderParams} params - 图像的参数
     * @param {TRTCVideoRotation} params.rotation - 图像的顺时针旋转角度，支持90、180以及270旋转角度，默认值：TRTCVideoRotation.TRTCVideoRotation_0
     * @param {TRTCVideoFillMode} params.fillMode - 视频画面填充模式，填充（画面可能会被拉伸裁剪）或适应（画面可能会有黑边），默认值：TRTCVideoFillMode.TRTCVideoFillMode_Fill
     * @param {TRTCVideoMirrorType} params.mirrorType - 画面镜像模式，默认值：TRTCVideoMirrorType.TRTCVideoMirrorType_Auto
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoRotation, TRTCVideoFillMode, TRTCVideoMirrorType } from '@/TrtcCloud/lib/TrtcDefines';
     * const renderParams = {
     *  rotation: TRTCVideoRotation.TRTCVideoRotation_0,
     *  fillMode: TRTCVideoFillMode.TRTCVideoFillMode_Fill,
     *  mirrorType: TRTCVideoMirrorType.TRTCVideoMirrorType_Auto
     * };
     * this.trtcCloud.setRemoteRenderParams(userId, TRTCVideoStreamType.TRTCVideoStreamTypeBig, renderParams);
     */
    setRemoteRenderParams(userId, streamType, params) { }
    /**
     * 视频画面截图
     *
     * 您可以通过本接口截取本地的视频画面，远端用户的主路画面以及远端用户的辅路（屏幕分享）画面。
     * @param {String | null} userId 用户 ID，如指定 null 表示截取本地的视频画面
     * @param {TRTCVideoStreamType} streamType 视频流类型，可选择截取主路画面（TRTCVideoStreamTypeBig，常用于摄像头）或辅路画面（TRTCVideoStreamTypeSub，常用于屏幕分享）
     *
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoStreamType } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.snapshotVideo(null, TRTCVideoStreamType.TRTCVideoStreamTypeBig); // 截取本地画面
     * this.trtcCloud.snapshotVideo(this.remoteUserId, TRTCVideoStreamType.TRTCVideoStreamTypeBig); // 截取远端指定用户画面
     */
    snapshotVideo(userId, streamType, listener) {
        return TrtcCloudImpl._getInstance().snapshotVideo(userId, streamType, listener);
    }
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
    startLocalAudio(quality) {
        return TrtcCloudImpl._getInstance().startLocalAudio(quality);
    }
    /**
     * 关闭本地音频的采集和上行<br>
     * 当关闭本地音频的采集和上行，房间里的其它成员会收到 `onUserAudioAvailable(false)` 回调通知
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.stopLocalAudio();
     */
    stopLocalAudio() {
        return TrtcCloudImpl._getInstance().stopLocalAudio();
    }
    /**
     * 静音本地的音频
     *
     * 当静音本地音频后，房间里的其它成员会收到 onUserAudioAvailable(false) 回调通知。
     * 与 stopLocalAudio 不同之处在于，muteLocalAudio 并不会停止发送音视频数据，而是会继续发送码率极低的静音包。
     * 在对录制质量要求很高的场景中，选择 muteLocalAudio 是更好的选择，能录制出兼容性更好的 MP4 文件。
     * 这是由于 MP4 等视频文件格式，对于音频的连续性是要求很高的，简单粗暴地 stopLocalAudio 会导致录制出的 MP4 不易播放。
     *
     * @param {Boolean} mute - true：屏蔽；false：开启，默认值：false
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.muteLocalAudio(true);
     */
    muteLocalAudio(mute) {
        return TrtcCloudImpl._getInstance().muteLocalAudio(mute);
    }
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
    muteRemoteAudio(userId, mute) {
        return TrtcCloudImpl._getInstance().muteRemoteAudio(userId, mute);
    }
    /**
     * 静音掉所有用户的声音，同时不再拉取该远端用户的音频数据流
     *
     * @param {Boolean} mute - true：静音；false：非静音
     *
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.muteAllRemoteAudio(true);
     */
    muteAllRemoteAudio(mute) {
        return TrtcCloudImpl._getInstance().muteAllRemoteAudio(mute);
    }
    /**
     * 设置音频路由
     *
     * 设置“音频路由”，即设置声音是从手机的扬声器还是从听筒中播放出来，因此该接口仅适用于手机等移动端设备。 手机有两个扬声器：一个是位于手机顶部的听筒，一个是位于手机底部的立体声扬声器。
     * 设置音频路由为听筒时，声音比较小，只有将耳朵凑近才能听清楚，隐私性较好，适合用于接听电话。 设置音频路由为扬声器时，声音比较大，不用将手机贴脸也能听清，因此可以实现“免提”的功能。
     *
     * @param {TRTCAudioRoute} route 音频路由，即声音由哪里输出（扬声器、听筒）, 默认值：TRTCAudioRoute.TRTCAudioRouteSpeaker（扬声器）,
     * @memberof TrtcCloud
     * @example
     * import { TRTCAudioRoute } from '@/TrtcCloud/lib/TrtcDefines';
     * this.trtcCloud.setAudioRoute(TRTCAudioRoute.TRTCAudioRouteSpeaker); // TRTCAudioRoute.TRTCAudioRouteEarpiece (听筒)
     */
    setAudioRoute(route) {
        return TrtcCloudImpl._getInstance().setAudioRoute(route);
    }
    /**
     * 启用或关闭音量大小提示
     *
     * 开启此功能后，SDK 会在 onUserVoiceVolume() 中反馈对每一路声音音量大小值的评估。
     *
     * **Note:**
     * - 如需打开此功能，请在 startLocalAudio 之前调用才可以生效。
     *
     * @param {Number} interval - 设置 onUserVoiceVolume 回调的触发间隔，单位为ms，最小间隔为100ms，如果小于等于0则会关闭回调，建议设置为300ms
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.enableAudioVolumeEvaluation(300);
     */
    enableAudioVolumeEvaluation(interval) {
        return TrtcCloudImpl._getInstance().enableAudioVolumeEvaluation(interval);
    }
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      屏幕分享
    //
    /////////////////////////////////////////////////////////////////////////////////
    /**
     * 设置屏幕分享（即辅路）的视频编码参数
     *
     * 该接口可以设定远端用户所看到的屏幕分享（即辅路）的画面质量，同时也能决定云端录制出的视频文件中屏幕分享的画面质量。 请注意如下两个接口的差异：
     *  - setVideoEncoderParam 用于设置主路画面（TRTCVideoStreamTypeBig，一般用于摄像头）的视频编码参数。
     *  - setSubStreamEncoderParam 用于设置辅路画面（TRTCVideoStreamTypeSub，一般用于屏幕分享）的视频编码参数。
     *
     * **Note:**
     *  - 即使您使用主路传输屏幕分享（在调用 startScreenCapture 时设置 type=TRTCVideoStreamTypeBig），依然要使用 setSubStreamEncoderParam 设定屏幕分享的编码参数，而不要使用 setVideoEncoderParam
     * @param {TRTCVideoEncParam} param	辅流编码参数，详情请参考 TRTCVideoEncParam。
     * @memberof TrtcCloud
     * @example
     * const params = {
     *   videoResolution: TRTCVideoResolution.TRTCVideoResolution_640_360,
     *   videoResolutionMode: TRTCVideoResolutionMode.TRTCVideoResolutionModePortrait,
     *   videoFps: 15,
     *   videoBitrate: 900,
     *   minVideoBitrate: 200,
     *   enableAdjustRes: false,
     * };
     * this.trtcCloud.setSubStreamEncoderParam(params);
     */
    setSubStreamEncoderParam(param) {
        return TrtcCloudImpl._getInstance().setSubStreamEncoderParam(param);
    }
    /**
     * 启动屏幕分享
     *
     * **Note:**
     *  - 一个用户同时最多只能上传一条主路（TRTCVideoStreamTypeBig）画面和一条辅路（TRTCVideoStreamTypeSub）画面，
     * 默认情况下，屏幕分享使用辅路画面，如果使用主路画面，建议您提前停止摄像头采集（stopLocalPreview）避免相互冲突。
     *  - **仅支持 iOS 13.0 及以上系统，进行应用内的屏幕分享**
     *
     * @param {TRTCVideoStreamType} streamType 屏幕分享使用的线路，可以设置为主路（TRTCVideoStreamTypeBig）或者辅路（TRTCVideoStreamTypeSub），推荐使用
     * @param {TRTCVideoEncParam} encParams 屏幕分享的画面编码参数，可以设置为 null，表示让 SDK 选择最佳的编码参数（分辨率、码率等）。即使在调用 startScreenCapture 时设置 type=TRTCVideoStreamTypeBig，依然可以使用此接口更新屏幕分享的编码参数。
     * @memberof TrtcCloud
     * @example
     * import { TRTCVideoResolution, TRTCVideoResolutionMode, TRTCVideoStreamType} from '@/TrtcCloud/lib/TrtcDefines';
     * const encParams = {
     *   videoResolution: TRTCVideoResolution.TRTCVideoResolution_640_360,
     *   videoResolutionMode: TRTCVideoResolutionMode.TRTCVideoResolutionModePortrait,
     *   videoFps: 15,
     *   videoBitrate: 900,
     *   minVideoBitrate: 200,
     *   enableAdjustRes: false,
     * };
     * this.trtcCloud.startScreenCapture(TRTCVideoStreamType.TRTCVideoStreamTypeSub, encParams);
     */
    startScreenCapture(streamType = TRTCVideoStreamType.TRTCVideoStreamTypeSub, encParams = null) {
        return TrtcCloudImpl._getInstance().startScreenCapture(streamType, encParams);
    }
    /**
     * 停止屏幕分享
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.stopScreenCapture();
     */
    stopScreenCapture() {
        return TrtcCloudImpl._getInstance().stopScreenCapture();
    }
    /**
     * 暂停屏幕分享
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.pauseScreenCapture();
     */
    pauseScreenCapture() {
        return TrtcCloudImpl._getInstance().pauseScreenCapture();
    }
    /**
     * 恢复屏幕分享
     * @memberof TrtcCloud
     * @example
     * this.trtcCloud.resumeScreenCapture();
     */
    resumeScreenCapture() {
        return TrtcCloudImpl._getInstance().resumeScreenCapture();
    }
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      美颜 + 水印
    //
    /////////////////////////////////////////////////////////////////////////////////
    /**
     * 设置美颜（磨皮）算法
     * TRTC 内置多种不同的磨皮算法，您可以选择最适合您产品定位的方案
     *
     * **Note:**
     * - 设置美颜前，先调用 `setBeautyLevel` 设置美颜级别。否则美颜级别为 0 表示关闭美颜
     *
     * @param {TRTCBeautyStyle} beautyStyle 美颜风格，TRTCBeautyStyleSmooth：光滑；TRTCBeautyStyleNature：自然；TRTCBeautyStylePitu：优图
     * @memberof TrtcCloud
     * @example
     * import { TRTCBeautyStyle } from '@/TrtcCloud/lib/TrtcDefines';
     * const beautyLevel = 5; // 美颜级别，取值范围0 - 9； 0表示关闭，9表示效果最明显。
     * this.trtcCloud.setBeautyLevel(beautyLevel);
     * this.trtcCloud.setBeautyStyle(TRTCBeautyStyle.TRTCBeautyStyleSmooth);
     */
    setBeautyStyle(beautyStyle) {
        return TrtcCloudImpl._getInstance().setBeautyStyle(beautyStyle);
    }
    /**
     * 设置美颜级别
     * @param {Number} beautyLevel	美颜级别，取值范围0 - 9； 0表示关闭，9表示效果最明显。
     *
     * @memberof TrtcCloud
     * @example
     * const beautyLevel = 5; // 美颜级别，取值范围0 - 9； 0表示关闭，9表示效果最明显。
     * this.trtcCloud.setBeautyLevel(beautyLevel);
     */
    setBeautyLevel(beautyLevel) {
        return TrtcCloudImpl._getInstance().setBeautyLevel(beautyLevel);
    }
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      背景音效
    //
    /////////////////////////////////////////////////////////////////////////////////
    /**
     * 开始播放背景音乐
     * 每个音乐都需要您指定具体的 ID，您可以通过该 ID 对音乐的开始、停止、音量等进行设置。<br>
     * **Note:**
     * - 如果要多次播放同一首背景音乐，请不要每次播放都分配一个新的 ID，我们推荐使用相同的 ID。
     * - 若您希望同时播放多首不同的音乐，请为不同的音乐分配不同的 ID 进行播放。
     * - 如果使用同一个 ID 播放不同音乐，SDK 会先停止播放旧的音乐，再播放新的音乐。
     *
     * **Note:**<br>
     * 在 uni-app 中 path 如何获取。
     * - 使用 cdn 地址，例如：`path = https://web.sdk.qcloud.com/component/TUIKit/assets/uni-app/calling-bell-1.mp3;`
     * - 使用本地绝对路径。
     *     1. 通过 [uni.saveFile](https://zh.uniapp.dcloud.io/api/file/file.html#savefile) 获取保存后的相对路径（建议这种路径）。
     *     2. 将上一步的相对路径转成绝对路径，[plus.io.convertLocalFileSystemURL](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL)。
     *
     * @param {AudioMusicParam} musicParam 音乐参数
     * @param {Number} musicParam.id 音乐 ID
     * @param {String} musicParam.path 音效文件的完整路径或 URL 地址。支持的音频格式包括 MP3、AAC、M4A、WAV
     * @param {Number} musicParam.loopCount 音乐循环播放的次数。取值范围为0 - 任意正整数，默认值：0。0表示播放音乐一次；1表示播放音乐两次；以此类推
     * @param {Boolean} musicParam.publish 是否将音乐传到远端。true：音乐在本地播放的同时，远端用户也能听到该音乐；false：主播只能在本地听到该音乐，远端观众听不到。默认值：false。
     * @param {Boolean} musicParam.isShortFile 播放的是否为短音乐文件。true：需要重复播放的短音乐文件；false：正常的音乐文件。默认值：false
     * @param {Number} musicParam.startTimeMS 音乐开始播放时间点，单位: 毫秒。
     * @param {Number} musicParam.endTimeMS 音乐结束播放时间点，单位: 毫秒，0 表示播放至文件结尾。
     * @memberof TrtcCloud
     * @example
     * import { AudioMusicParam } from '@/TrtcCloud/lib/TrtcDefines';
     * const musicParam = {
     *  id: 1,
     *  path: '',
     *  loopCount: 1,
     *  publish: true,
     *  isShortFile: false,
     *  startTimeMS: 0,
     *  endTimeMS: 0,
     * };
     * this.trtcCloud.startPlayMusic(musicParam);
     */
    startPlayMusic(musicParam) {
        return TrtcCloudImpl._getInstance().startPlayMusic(musicParam);
    }
    /**
     * 停止播放背景音乐
     * @param {Number} id	音乐 ID
     *
     * @memberof TrtcCloud
     * @example
     * const musicId = 5;
     * this.trtcCloud.stopPlayMusic(musicId);
     */
    stopPlayMusic(id) {
        return TrtcCloudImpl._getInstance().stopPlayMusic(id);
    }
    /**
     * 暂停播放背景音乐
     * @param {Number} id	音乐 ID
     * @memberof TrtcCloud
     * @example
     * const musicId = 5;
     * this.trtcCloud.pausePlayMusic(musicId);
     */
    pausePlayMusic(id) {
        return TrtcCloudImpl._getInstance().pausePlayMusic(id);
    }
    /**
     * 恢复播放背景音乐
     * @param {Number} id	音乐 ID
     * @memberof TrtcCloud
     * @example
     * const musicId = 5;
     * this.trtcCloud.resumePlayMusic(musicId);
     */
    resumePlayMusic(id) {
        return TrtcCloudImpl._getInstance().resumePlayMusic(id);
    }
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
     * 错误回调，表示 SDK 不可恢复的错误，一定要监听并分情况给用户适当的界面提示<br>
     * @event TRTCCallback#onError
     * @param {Number} code 错误码，[详见](https://cloud.tencent.com/document/product/647/38308#.E9.94.99.E8.AF.AF.E7.A0.81.E8.A1.A8)
     * @param {String} message 错误信息
     * @param {Object} extraInfo 扩展信息字段，个别错误码可能会带额外的信息帮助定位问题
     */
    onError(code, message, extraInfo) { }
    /**
     * 警告回调，用于告知您一些非严重性问题，例如出现卡顿或者可恢复的解码失败<br>
     * @event TRTCCallback#onWarning
     * @param {Number} code 警告码，[详见](https://cloud.tencent.com/document/product/647/38308#.E8.AD.A6.E5.91.8A.E7.A0.81.E8.A1.A8)
     * @param {String} message 警告信息
     * @param {Object} extraInfo 扩展信息字段，个别警告码可能会带额外的信息帮助定位问题
     */
    onWarning(code, message, extraInfo) { }
    /**
     * 进房后的回调<br>
     * 调用 `enterRoom()` 接口执行进房操作后，会收到 `onEnterRoom(result)` 回调<br>
     * 如果加入成功，result 会是一个正数（result > 0），代表加入房间的时间消耗，单位是毫秒（ms）。<br>
     * 如果加入失败，result 会是一个负数（result < 0），代表进房失败的错误码。
     *
     * @event TRTCCallback#onEnterRoom
     * @param {Number} result 进房耗时
     */
    onEnterRoom(result) { }
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
    onExitRoom(reason) { }
    /**
     * 切换角色的事件回调<br>
     * 调用 TRTCCloud 中的 switchRole() 接口会切换主播和观众的角色，该操作会伴随一个线路切换的过程， 待 SDK 切换完成后，会抛出 onSwitchRole() 事件回调
     *
     * @event TRTCCallback#onSwitchRole
     * @param {Number} code 错误码，[详见](https://cloud.tencent.com/document/product/647/38308#.E8.AD.A6.E5.91.8A.E7.A0.81.E8.A1.A8)
     * @param {String} message 错误信息
     */
    onSwitchRole(code, message) { }
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
    onFirstVideoFrame(userId, streamType, width, height) { }
    /**
     * 开始播放远程用户的首帧音频（本地声音暂不通知）<br>
     * 如果 userId 为 null，代表开始渲染本地采集的摄像头画面，需要您先调用 `startLocalPreview` 触发。 如果 userId 不为 null，代表开始渲染远程用户的首帧画面，需要您先调用 `startRemoteView` 触发<br>
     * 只有当您调用 `startLocalPreview()、startRemoteView() 或 startRemoteSubStreamView()` 之后，才会触发该回调
     *
     * @event TRTCCallback#onFirstAudioFrame
     * @param {String} userId 远程用户 ID
     */
    onFirstAudioFrame(userId) { }
    /**
     * 截图完成时回调<br>
     * @event TRTCCallback#onSnapshotComplete
     * @param {String} base64Data 截图对应的 base64 数据
     * @param {String} message 错误信息
     */
    onSnapshotComplete(base64Data, message) { }
    /**
     * 麦克风准备就绪
     */
    onMicDidReady() { }
    /**
     * 摄像头准备就绪
     */
    onCameraDidReady() { }
    /**
     * 网络质量：该回调每2秒触发一次，统计当前网络的上行和下行质量<br>
     * userId 为本地用户 ID 代表自己当前的视频质量
     *
     * @param {String} localQuality 上行网络质量
     * @param {String} remoteQuality 下行网络质量
     */
    onNetworkQuality(localQuality, remoteList) { }
    /**
     * 有用户加入当前房间<br>
     * 出于性能方面的考虑，在两种不同的应用场景下，该通知的行为会有差别：<br>
     * 通话场景（TRTCAppScene.TRTCAppSceneVideoCall 和 TRTCAppScene.TRTCAppSceneAudioCall）：该场景下用户没有角色的区别，任何用户进入房间都会触发该通知。<br>
     * 直播场景（TRTCAppScene.TRTCAppSceneLIVE 和 TRTCAppScene.TRTCAppSceneVoiceChatRoom ）：该场景不限制观众的数量，如果任何用户进出都抛出回调会引起很大的性能损耗，所以该场景下只有主播进入房间时才会触发该通知，观众进入房间不会触发该通知
     *
     * @event TRTCCallback#onRemoteUserEnterRoom
     * @param {String} userId 用户标识 ID
     */
    onRemoteUserEnterRoom(userId) { }
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
    onRemoteUserLeaveRoom(userId, reason) { }
    /**
     * 首帧本地音频数据已经被送出<br>
     * 在 `enterRoom()` 并 `startLocalAudio()` 成功后开始麦克风采集，并将采集到的声音进行编码。 当 SDK 成功向云端送出第一帧音频数据后，会抛出这个回调事件
     *
     * @event TRTCCallback#onSendFirstLocalAudioFrame
     */
    onSendFirstLocalAudioFrame() { }
    /**
     * 首帧本地视频数据已经被送出<br>
     * SDK 会在 `enterRoom()` 并 `startLocalPreview()` 成功后开始摄像头采集，并将采集到的画面进行编码。 当 SDK 成功向云端送出第一帧视频数据后，会抛出这个回调事件
     *
     * @event TRTCCallback#onSendFirstLocalVideoFrame
     * @param {TRTCVideoStreamType} streamType 视频流类型，大画面、小画面或辅流画面（屏幕分享）
     */
    onSendFirstLocalVideoFrame(streamType) { }
    /**
     * 技术指标统计回调<br>
     * 如果您是熟悉音视频领域相关术语，可以通过这个回调获取 SDK 的所有技术指标。 如果您是首次开发音视频相关项目，可以只关注 `onNetworkQuality` 回调
     *
     * **Note:**
     * - 每 2 秒回调一次
     *
     * @param {Object} statics 状态数据
     */
    onStatistics(statics) { }
    /**
     * 远端用户是否存在可播放的音频数据<br>
     * @event TRTCCallback#onUserAudioAvailable
     * @param {String} userId 用户标识 ID
     * @param {Boolean} available 声音是否开启
     */
    onUserAudioAvailable(userId, available) { }
    /**
     * 远端用户是否存在可播放的主路画面（一般用于摄像头）<br>
     * 当您收到 `onUserVideoAvailable(userId, true)` 通知时，表示该路画面已经有可用的视频数据帧到达。 此时，您需要调用 `startRemoteView(userId)` 接口加载该用户的远程画面。 然后，您会收到名为 onFirstVideoFrame(userid) 的首帧画面渲染回调。<br>
     * 当您收到 `onUserVideoAvailable(userId, false)` 通知时，表示该路远程画面已经被关闭，可能由于该用户调用了 `muteLocalVideo()` 或 `stopLocalPreview()`。
     *
     * @event TRTCCallback#onUserVideoAvailable
     * @param {String} userId 用户标识 ID
     * @param {Boolean} available 画面是否开启
     */
    onUserVideoAvailable(userId, available) { }
    /**
     * 用于提示音量大小的回调，包括每个 userId 的音量和远端总音量<br>
     * SDK 可以评估每一路音频的音量大小，并每隔一段时间抛出该事件回调，您可以根据音量大小在 UI 上做出相应的提示，比如“波形图”或“音量槽”。 要完成这个功能， 您需要先调用 enableAudioVolumeEvaluation 开启这个能力并设定事件抛出的时间间隔。 需要补充说明的是，无论当前房间中是否有人说话，SDK 都会按照您设定的时间间隔定时抛出此事件回调，只不过当没有人说话时，userVolumes 为空，totalVolume 为 0。
     *
     * **Note:**
     * - userVolumes 为一个数组，对于数组中的每一个元素，当 userId 为空时表示本地麦克风采集的音量大小，当 userId 不为空时代表远端用户的音量大小
     *
     * @event TRTCCallback#onUserVoiceVolume
     * @param {Array} userVolumes 是一个数组，用于承载所有正在说话的用户的音量大小，取值范围 0 - 100
     * @param {Number} totalVolume 所有远端用户的总音量大小, 取值范围 0 - 100
     */
    onUserVoiceVolume(userVolumes, totalVolume) { }
    /**
     * 屏幕分享开启的事件回调<br>
     * 当您通过 startScreenCapture 等相关接口启动屏幕分享时，SDK 便会抛出此事件回调
     * @event TRTCCallback#onScreenCaptureStarted
     */
    onScreenCaptureStarted() { }
    /**
     * 屏幕分享停止的事件回调<br>
     * 当您通过 stopScreenCapture 停止屏幕分享时，SDK 便会抛出此事件回调
     * @event TRTCCallback#onScreenCaptureStopped
     * @param {Number} reason 停止原因，0：用户主动停止；1：屏幕窗口关闭导致停止；2：表示屏幕分享的显示屏状态变更（如接口被拔出、投影模式变更等）
     */
    onScreenCaptureStopped(reason) { }
    /**
     * 屏幕分享停止的事件回调<br>
     * 当您通过 pauseScreenCapture 停止屏幕分享时，SDK 便会抛出此事件回调
     * @event TRTCCallback#onScreenCapturePaused
     * @param {Number} reason 停止原因，0：用户主动停止；1：屏幕窗口关闭导致停止；2：表示屏幕分享的显示屏状态变更（如接口被拔出、投影模式变更等）
     */
    onScreenCapturePaused(reason) { }
    /**
     * 屏幕分享恢复的事件回调<br>
     * 当您通过 resumeScreenCapture 恢复屏幕分享时，SDK 便会抛出此事件回调
     * @event TRTCCallback#onScreenCaptureResumed
     */
    onScreenCaptureResumed() { }
    /**
     * 某远端用户发布/取消了辅路视频画面<br>
     * “辅路画面”一般被用于承载屏幕分享的画面。当您收到 onUserSubStreamAvailable(userId, true) 通知时，表示该路画面已经有可播放的视频帧到达。 此时，您需要调用 startRemoteView 接口订阅该用户的远程画面，订阅成功后，您会继续收到该用户的首帧画面渲染回调 onFirstVideoFrame(userId)
     *
     * **Note:**
     * - 拉取 Web 端（用 [WebRTC](https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/index.html) 实现屏幕分享）的屏幕分享，收不到 onUserSubStreamAvailable 事件。因为 [WebRTC](https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/index.html) 推的屏幕分享也是主流
     * @param {String} userId 用户 ID
     * @param {Boolean} available 是否可用，true 表示辅流可用
     * @event TRTCCallback#onUserSubStreamAvailable
     */
    onUserSubStreamAvailable(userId, available) { }
    /**
     * 用户视频大小发生改变回调。<br>
     * 当您收到 onUserVideoSizeChanged(userId, streamtype, newWidth, newHeight) 通知时，表示该路画面大小发生了调整，调整的原因可能是该用户调用了 setVideoEncoderParam 或者 setSubStreamEncoderParam 重新设置了画面尺寸。
     * @param {String} userId 用户 ID
     * @param {TRTCVideoStreamType} streamType 视频流类型，仅支持 TRTCVideoStreamTypeBig 和 TRTCVideoStreamTypeSub
     * @param {Number} newWidth 视频流的宽度（像素）
     * @param {Number} newHeight 视频流的高度（像素）
     * @event TRTCCallback#onUserVideoSizeChanged
     */
    onUserVideoSizeChanged(userId, streamType, newWidth, newHeight) { }
    /**
     * 背景音乐开始播放
     * @param {Number} id 播放的 id
     * @param {Number} errCode 播放的状态码
     * @event TRTCCallback#onStart
     */
    onStart(id, errCode) { }
    /**
     * 背景音乐的播放进度
     * @param {Number} id 播放的 id
     * @param {Number} curPtsMS 当前播放的位置
     * @param {Number} durationMS 当前音频总时长
     * @event TRTCCallback#onPlayProgress
     */
    onPlayProgress(id, curPtsMS, durationMS) { }
    /**
     * 背景音乐已经播放完毕
     * @param {Number} id 播放的 id
     * @param {Number} errCode 播放结束的状态码
     * @event TRTCCallback#onComplete
     */
    onComplete(id, errCode) { }
}
