"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRTCShareSource = exports.TRTCAudioRoute = exports.TRTCRenderParams = exports.TRTCVideoEncParam = exports.TRTCParams = exports.TRTCAudioQuality = exports.TRTCRoleType = exports.TRTCAppScene = exports.TRTCBeautyStyle = exports.TRTCVideoMirrorType = exports.TRTCVideoRotation = exports.TRTCVideoFillMode = exports.TRTCVideoStreamType = exports.TRTCVideoResolutionMode = exports.TRTCVideoResolution = void 0;
/**
 * TRTC 关键类型定义<br>
 * @description 分辨率、质量等级等枚举和常量值的定义
 */
/////////////////////////////////////////////////////////////////////////////////
//
//                    【（一）视频相关枚举值定义】
//
/////////////////////////////////////////////////////////////////////////////////
/**
 * 视频分辨率<br>
 * 此处仅定义横屏分辨率（如 640 × 360），如需使用竖屏分辨率（如 360 × 640），需要同时指定 VideoResolutionMode 为 Portrait
 * @enum {Number}
 */
var TRTCVideoResolution_HACK_JSDOC = {
    /** 宽高比 1:1；分辨率 120x120；建议码率（VideoCall）80kbps; 建议码率（LIVE）120kbps */
    TRTCVideoResolution_120_120: 1,
    /** 宽高比 1:1 分辨率 160x160；建议码率（VideoCall）100kbps; 建议码率（LIVE）150kbps */
    TRTCVideoResolution_160_160: 3,
    /** 宽高比 1:1；分辨率 270x270；建议码率（VideoCall）200kbps; 建议码率（LIVE）300kbps */
    TRTCVideoResolution_270_270: 5,
    /** 宽高比 1:1；分辨率 480x480；建议码率（VideoCall）350kbps; 建议码率（LIVE）500kbps */
    TRTCVideoResolution_480_480: 7,
    /** 宽高比4:3；分辨率 160x120；建议码率（VideoCall）100kbps; 建议码率（LIVE）150kbps */
    TRTCVideoResolution_160_120: 50,
    /** 宽高比 4:3；分辨率 240x180；建议码率（VideoCall）150kbps; 建议码率（LIVE）250kbps */
    TRTCVideoResolution_240_180: 52,
    /** 宽高比 4:3；分辨率 280x210；建议码率（VideoCall）200kbps; 建议码率（LIVE）300kbps */
    TRTCVideoResolution_280_210: 54,
    /** 宽高比 4:3；分辨率 320x240；建议码率（VideoCall）250kbps; 建议码率（LIVE）375kbps */
    TRTCVideoResolution_320_240: 56,
    /** 宽高比 4:3；分辨率 400x300；建议码率（VideoCall）300kbps; 建议码率（LIVE）450kbps */
    TRTCVideoResolution_400_300: 58,
    /** 宽高比 4:3；分辨率 480x360；建议码率（VideoCall）400kbps; 建议码率（LIVE）600kbps */
    TRTCVideoResolution_480_360: 60,
    /** 宽高比 4:3；分辨率 640x480；建议码率（VideoCall）600kbps; 建议码率（LIVE）900kbps */
    TRTCVideoResolution_640_480: 62,
    /** 宽高比 4:3；分辨率 960x720；建议码率（VideoCall）1000kbps; 建议码率（LIVE）1500kbps */
    TRTCVideoResolution_960_720: 64,
    /** 宽高比 16:9；分辨率 160x90；建议码率（VideoCall）150kbps; 建议码率（LIVE）250kbps */
    TRTCVideoResolution_160_90: 100,
    /** 宽高比 16:9；分辨率 256x144；建议码率（VideoCall）200kbps; 建议码率（LIVE）300kbps */
    TRTCVideoResolution_256_144: 102,
    /** 宽高比 16:9；分辨率 320x180；建议码率（VideoCall）250kbps; 建议码率（LIVE）400kbps */
    TRTCVideoResolution_320_180: 104,
    /** 宽高比 16:9；分辨率 480x270；建议码率（VideoCall）350kbps; 建议码率（LIVE）550kbps */
    TRTCVideoResolution_480_270: 106,
    /** 宽高比 16:9；分辨率 640x360；建议码率（VideoCall）500kbps; 建议码率（LIVE）900kbps */
    TRTCVideoResolution_640_360: 108,
    /** 宽高比 16:9；分辨率 960x540；建议码率（VideoCall）850kbps; 建议码率（LIVE）1300kbps */
    TRTCVideoResolution_960_540: 110,
    /** 宽高比 16:9；分辨率 1280x720；建议码率（VideoCall）1200kbps; 建议码率（LIVE）1800kbps */
    TRTCVideoResolution_1280_720: 112,
    /** 宽高比 16:9；分辨率 1920x1080；建议码率（VideoCall）2000kbps; 建议码率（LIVE）3000kbps */
    TRTCVideoResolution_1920_1080: 114,
};
var TRTCVideoResolution;
(function (TRTCVideoResolution) {
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_120_120"] = 1] = "TRTCVideoResolution_120_120";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_160_160"] = 3] = "TRTCVideoResolution_160_160";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_270_270"] = 5] = "TRTCVideoResolution_270_270";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_480_480"] = 7] = "TRTCVideoResolution_480_480";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_160_120"] = 50] = "TRTCVideoResolution_160_120";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_240_180"] = 52] = "TRTCVideoResolution_240_180";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_280_210"] = 54] = "TRTCVideoResolution_280_210";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_320_240"] = 56] = "TRTCVideoResolution_320_240";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_400_300"] = 58] = "TRTCVideoResolution_400_300";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_480_360"] = 60] = "TRTCVideoResolution_480_360";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_640_480"] = 62] = "TRTCVideoResolution_640_480";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_960_720"] = 64] = "TRTCVideoResolution_960_720";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_160_90"] = 100] = "TRTCVideoResolution_160_90";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_256_144"] = 102] = "TRTCVideoResolution_256_144";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_320_180"] = 104] = "TRTCVideoResolution_320_180";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_480_270"] = 106] = "TRTCVideoResolution_480_270";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_640_360"] = 108] = "TRTCVideoResolution_640_360";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_960_540"] = 110] = "TRTCVideoResolution_960_540";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_1280_720"] = 112] = "TRTCVideoResolution_1280_720";
    TRTCVideoResolution[TRTCVideoResolution["TRTCVideoResolution_1920_1080"] = 114] = "TRTCVideoResolution_1920_1080";
})(TRTCVideoResolution = exports.TRTCVideoResolution || (exports.TRTCVideoResolution = {}));
/**
 * 视频分辨率模式<br>
 * TRTCVideoResolution 中仅定义了横屏分辨率（如 640 × 360），如需使用竖屏分辨率（如 360 × 640），需要同时指定 TRTCVideoResolutionMode 为 Portrait
 * @enum {Number}
 */
var TRTCVideoResolutionMode_HACK_JSDOC = {
    /** 横屏分辨率 */
    TRTCVideoResolutionModeLandscape: 0,
    /** 竖屏分辨率 */
    TRTCVideoResolutionModePortrait: 1,
};
var TRTCVideoResolutionMode;
(function (TRTCVideoResolutionMode) {
    TRTCVideoResolutionMode[TRTCVideoResolutionMode["TRTCVideoResolutionModeLandscape"] = 0] = "TRTCVideoResolutionModeLandscape";
    TRTCVideoResolutionMode[TRTCVideoResolutionMode["TRTCVideoResolutionModePortrait"] = 1] = "TRTCVideoResolutionModePortrait";
})(TRTCVideoResolutionMode = exports.TRTCVideoResolutionMode || (exports.TRTCVideoResolutionMode = {}));
;
/**
 * 视频流类型<br>
 * TRTC 内部有三种不同的音视频流，分别是：
 * - 高清大画面：一般用来传输摄像头的视频数据
 * - 低清小画面：小画面和大画面的内容相互，但是分辨率和码率都比大画面低，因此清晰度也更低
 * - 辅流画面：一般用于屏幕分享，同一时间在同一个房间中只允许一个用户发布辅流视频，其他用户必须要等该用户关闭之后才能发布自己的辅流
 *
 * **Note:**
 * - 不支持单独开启低清小画面，小画面必须依附于大画面而存在，SDK 会自动设定低清小画面的分辨率和码率
 * @enum {Number}
 */
var TRTCVideoStreamType_HACK_JSDOC = {
    /** 大画面视频流 */
    TRTCVideoStreamTypeBig: 0,
    /** 小画面视频流 */
    TRTCVideoStreamTypeSmall: 1,
    /** 辅流（屏幕分享） */
    TRTCVideoStreamTypeSub: 2,
};
var TRTCVideoStreamType;
(function (TRTCVideoStreamType) {
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeBig"] = 0] = "TRTCVideoStreamTypeBig";
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeSmall"] = 1] = "TRTCVideoStreamTypeSmall";
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeSub"] = 2] = "TRTCVideoStreamTypeSub";
})(TRTCVideoStreamType = exports.TRTCVideoStreamType || (exports.TRTCVideoStreamType = {}));
/**
 * 视频画面填充模式<br>
 * 如果画面的显示分辨率不等于画面的原始分辨率，就需要您设置画面的填充模式:
 * - TRTCVideoFillMode_Fill，图像铺满屏幕，超出显示视窗的视频部分将被截掉，所以画面显示可能不完整。
 * - TRTCVideoFillMode_Fit，图像长边填满屏幕，短边区域会被填充黑色，但画面的内容肯定是完整的。
 * @enum {Number}
 */
var TRTCVideoFillMode_HACK_JSDOC = {
    /** 图像铺满屏幕，超出显示视窗的视频部分将被截掉 */
    TRTCVideoFillMode_Fill: 0,
    /** 图像长边填满屏幕，短边区域会被填充黑色 */
    TRTCVideoFillMode_Fit: 1,
};
var TRTCVideoFillMode;
(function (TRTCVideoFillMode) {
    TRTCVideoFillMode[TRTCVideoFillMode["TRTCVideoFillMode_Fill"] = 0] = "TRTCVideoFillMode_Fill";
    TRTCVideoFillMode[TRTCVideoFillMode["TRTCVideoFillMode_Fit"] = 1] = "TRTCVideoFillMode_Fit";
})(TRTCVideoFillMode = exports.TRTCVideoFillMode || (exports.TRTCVideoFillMode = {}));
;
/**
 * 视频画面旋转方向<br>
 * TRTC SDK 提供了对本地和远程画面的旋转角度设置 API，如下的旋转角度都是指顺时针方向的。
 * @enum {Number}
 */
var TRTCVideoRotation_HACK_JSDOC = {
    /** 顺时针旋转0度 */
    TRTCVideoRotation_0: 0,
    /** 顺时针旋转90度 */
    TRTCVideoRotation_90: 1,
    /** 顺时针旋转180度 */
    TRTCVideoRotation_180: 2,
    /** 顺时针旋转270度 */
    TRTCVideoRotation_270: 3,
};
var TRTCVideoRotation;
(function (TRTCVideoRotation) {
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_0"] = 0] = "TRTCVideoRotation_0";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_90"] = 1] = "TRTCVideoRotation_90";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_180"] = 2] = "TRTCVideoRotation_180";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_270"] = 3] = "TRTCVideoRotation_270";
})(TRTCVideoRotation = exports.TRTCVideoRotation || (exports.TRTCVideoRotation = {}));
/**
 * 画面渲染镜像类型<br>
 * TRTC 的画面镜像提供下列设置模式
 * @enum {Number}
 */
var TRTCVideoMirrorType_HACK_JSDOC = {
    /** 只适用于移动端， 本地预览时，前置摄像头镜像，后置摄像头不镜像 */
    TRTCVideoMirrorType_Auto: 0,
    /** 所有画面均镜像 */
    TRTCVideoMirrorType_Enable: 1,
    /** 所有画面均不镜像 */
    TRTCVideoMirrorType_Disable: 2
};
var TRTCVideoMirrorType;
(function (TRTCVideoMirrorType) {
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Auto"] = 0] = "TRTCVideoMirrorType_Auto";
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Enable"] = 1] = "TRTCVideoMirrorType_Enable";
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Disable"] = 2] = "TRTCVideoMirrorType_Disable";
})(TRTCVideoMirrorType = exports.TRTCVideoMirrorType || (exports.TRTCVideoMirrorType = {}));
/**
 * 美颜（磨皮）算法<br>
 * TRTC SDK 内置了多种不同的磨皮算法，您可以选择最适合您产品定位的方案。
 * @enum {Number}
 */
var TRTCBeautyStyle_HACK_JSDOC = {
    /** 光滑，算法比较激进，磨皮效果比较明显，适用于秀场直播 */
    TRTCBeautyStyleSmooth: 0,
    /** 自然，算法更多地保留了面部细节，磨皮效果更加自然，适用于绝大多数直播场景 */
    TRTCBeautyStyleNature: 1,
    /** 优图，由优图实验室提供，磨皮效果介于光滑和自然之间，比光滑保留更多皮肤细节，比自然磨皮程度更高 */
    TRTCBeautyStylePitu: 2,
};
var TRTCBeautyStyle;
(function (TRTCBeautyStyle) {
    TRTCBeautyStyle[TRTCBeautyStyle["TRTCBeautyStyleSmooth"] = 0] = "TRTCBeautyStyleSmooth";
    TRTCBeautyStyle[TRTCBeautyStyle["TRTCBeautyStyleNature"] = 1] = "TRTCBeautyStyleNature";
    TRTCBeautyStyle[TRTCBeautyStyle["TRTCBeautyStylePitu"] = 2] = "TRTCBeautyStylePitu";
})(TRTCBeautyStyle = exports.TRTCBeautyStyle || (exports.TRTCBeautyStyle = {}));
/////////////////////////////////////////////////////////////////////////////////
//
//                    【（二）网络相关枚举值定义】
//
/////////////////////////////////////////////////////////////////////////////////
/**
 * 应用场景<br>
 * TRTC 可用于视频会议和在线直播等多种应用场景，针对不同的应用场景，TRTC SDK 的内部会进行不同的优化配置：
 * - TRTCAppSceneVideoCall    ：视频通话场景，适合[1对1视频通话]、[300人视频会议]、[在线问诊]、[视频聊天]、[远程面试]等。
 * - TRTCAppSceneLIVE         ：视频互动直播，适合[视频低延时直播]、[十万人互动课堂]、[视频直播 PK]、[视频相亲房]、[互动课堂]、[远程培训]、[超大型会议]等。
 * - TRTCAppSceneAudioCall    ：语音通话场景，适合[1对1语音通话]、[300人语音会议]、[语音聊天]、[语音会议]、[在线狼人杀]等。
 * - TRTCAppSceneVoiceChatRoom：语音互动直播，适合：[语音低延时直播]、[语音直播连麦]、[语聊房]、[K 歌房]、[FM 电台]等。
 * @enum {Number}
 */
var TRTCAppScene_HACK_JSDOC = {
    /**
     * 视频通话场景，支持720P、1080P高清画质，单个房间最多支持300人同时在线，最高支持50人同时发言。<br>
     * 适合：[视频低延时直播]、[十万人互动课堂]、[视频直播 PK]、[视频相亲房]、[互动课堂]、[远程培训]、[超大型会议]等。<br>
     * 注意：此场景下，您必须通过 TRTCParams 中的 role 字段指定当前用户的角色。
     */
    TRTCAppSceneVideoCall: 0,
    /**
     * 视频互动直播，支持平滑上下麦，切换过程无需等待，主播延时小于300ms；支持十万级别观众同时播放，播放延时低至1000ms。<br>
     * 在线直播场景，内部编码器和网络协议优化侧重性能和兼容性，性能和清晰度表现更佳。
     */
    TRTCAppSceneLIVE: 1,
    /**
     * 语音通话场景，支持 48kHz，支持双声道。单个房间最多支持300人同时在线，最高支持50人同时发言。<br>
     * 适合：[1对1语音通话]、[300人语音会议]、[语音聊天]、[语音会议]、[在线狼人杀]等。
     */
    TRTCAppSceneAudioCall: 2,
    /**
     * 语音互动直播，支持平滑上下麦，切换过程无需等待，主播延时小于300ms；支持十万级别观众同时播放，播放延时低至1000ms。<br>
     * 适合：[语音低延时直播]、[语音直播连麦]、[语聊房]、[K 歌房]、[FM 电台]等。<br>
     * 注意：此场景下，您必须通过 TRTCParams 中的 role 字段指定当前用户的角色。
     */
    TRTCAppSceneVoiceChatRoom: 3,
};
var TRTCAppScene;
(function (TRTCAppScene) {
    TRTCAppScene[TRTCAppScene["TRTCAppSceneVideoCall"] = 0] = "TRTCAppSceneVideoCall";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneLIVE"] = 1] = "TRTCAppSceneLIVE";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneAudioCall"] = 2] = "TRTCAppSceneAudioCall";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneVoiceChatRoom"] = 3] = "TRTCAppSceneVoiceChatRoom";
})(TRTCAppScene = exports.TRTCAppScene || (exports.TRTCAppScene = {}));
/**
 * 角色，仅适用于直播场景（TRTCAppSceneLIVE 和 TRTCAppSceneVoiceChatRoom）<br>
 * 在直播场景中，多数用户只是观众，只有个别用户是主播，这种角色区分可以有利于 TRTC 进行更好的定向优化。
 * - Anchor：主播，可以上行视频和音频，一个房间里最多支持50个主播同时上行音视频。
 * - Audience：观众，只能观看，不能上行视频和音频，一个房间里的观众人数没有上限。
 *
 * @enum {Number}
 */
var TRTCRoleType_HACK_JSDOC = {
    /** 主播 */
    TRTCRoleAnchor: 20,
    /** 观众 */
    TRTCRoleAudience: 21,
};
var TRTCRoleType;
(function (TRTCRoleType) {
    TRTCRoleType[TRTCRoleType["TRTCRoleAnchor"] = 20] = "TRTCRoleAnchor";
    TRTCRoleType[TRTCRoleType["TRTCRoleAudience"] = 21] = "TRTCRoleAudience";
})(TRTCRoleType = exports.TRTCRoleType || (exports.TRTCRoleType = {}));
/////////////////////////////////////////////////////////////////////////////////
//
//                    【（三）音频相关枚举值定义】
//
/////////////////////////////////////////////////////////////////////////////////
/**
 * 音频质量<br>
 * @enum {Number}
 */
var TRTCAudioQuality_HACK_JSDOC = {
    /** 人声模式：适用于以人声沟通为主的应用场景，该模式下音频传输的抗性较强，TRTC 会通过各种人声处理技术保障在弱网络环境下的流畅度最佳 */
    TRTCAudioQualitySpeech: 1,
    /** 标准模式（或者默认模式）：介于 Speech 和 Music 之间的档位，对音乐的还原度比人声模式要好，但传输数据量比音乐模式要低很多，对各种场景均有不错的适应性，如无特殊需求推荐选择之。 */
    TRTCAudioQualityDefault: 2,
    /** 音乐模式：适用于对声乐要求很苛刻的场景，该模式下音频传输的数据量很大，TRTC 会通过各项技术确保音乐信号在各频段均能获得高保真的细节还原度 */
    TRTCAudioQualityMusic: 3
};
var TRTCAudioQuality;
(function (TRTCAudioQuality) {
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualitySpeech"] = 1] = "TRTCAudioQualitySpeech";
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualityDefault"] = 2] = "TRTCAudioQualityDefault";
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualityMusic"] = 3] = "TRTCAudioQualityMusic";
})(TRTCAudioQuality = exports.TRTCAudioQuality || (exports.TRTCAudioQuality = {}));
/////////////////////////////////////////////////////////////////////////////////
//
//                      【（四）TRTC 核心类型定义】
//
/////////////////////////////////////////////////////////////////////////////////
/**
 * 进房相关参数<br>
 * 只有该参数填写正确，才能顺利调用 enterRoom 进入 roomId 所指定的音视频房间。
 * @param {Number}       sdkAppId      - 【字段含义】应用标识（必填），腾讯视频云基于 sdkAppId 完成计费统计。<br>
 *                                       【推荐取值】在腾讯云 [TRTC 控制台](https://console.cloud.tencent.com/rav/) 中创建应用，之后可以在账号信息页面中得到该 ID。<br>
 * @param {String}       userId        - 【字段含义】用户标识（必填）。当前用户的 userId，相当于用户名，UTF-8编码。<br>
 *                                       【推荐取值】如果一个用户在您的账号系统中的 ID 为“abc”，则 userId 即可设置为“abc”。<br>
 * @param {String}       userSig       - 【字段含义】用户签名（必填），当前 userId 对应的验证签名，相当于登录密码。<br>
 *                                       【推荐取值】请参考 [如何计算UserSig](https://cloud.tencent.com/document/product/647/17275)。<br>
 * @param {Number}       roomId        - 【字段含义】房间号码（必填），指定房间号，在同一个房间里的用户（userId）可以彼此看到对方并进行视频通话, roomId 和 strRoomId 必须填一个, 若您选用 strRoomId，则 roomId 需要填写为0。<br>
 *                                       【推荐取值】您可以随意指定，但请不要重复，如果您的用户账号 ID 是数字类型的，可以直接用创建者的用户 ID 作为 roomId。<br>
 * @param {String}       strRoomId     - 【字段含义】字符串房间号码（选填），roomId 和 strRoomId 必须填一个。若两者都填，则优先选择 roomId。<br>
 *                                       【推荐取值】您可以随意指定，但请不要重复。<br>
 * @param {TRTCRoleType} role          - 【字段含义】直播场景下的角色，仅适用于直播场景（TRTCAppSceneLIVE 和 TRTCAppSceneVoiceChatRoom），视频通话场景下指定无效。<br>
 *                                       【推荐取值】默认值：主播（TRTCRoleAnchor）<br>
 * @param {String}       privateMapKey - 【字段含义】房间签名（非必填），如果您希望某个房间只能让特定的某些 userId 进入，就需要使用 privateMapKey 进行权限保护。<br>
 *                                       【推荐取值】仅建议有高级别安全需求的客户使用，参考文档：[进房权限保护](https://cloud.tencent.com/document/product/647/32240)<br>
 * @param {String}       businessInfo  - 【字段含义】业务数据（非必填），某些非常用的高级特性才需要用到此字段。<br>
 *                                       【推荐取值】不建议使用<br>
 * @param {String}       streamId      - 【字段含义】绑定腾讯云直播 CDN 流 ID[非必填]，设置之后，您就可以在腾讯云直播 CDN 上通过标准直播方案（FLV或HLS）播放该用户的音视频流。<br>
 *                                       【推荐取值】限制长度为64字节，可以不填写，一种推荐的方案是使用 “sdkappid_roomid_userid_main” 作为 streamid，这样比较好辨认且不会在您的多个应用中发生冲突。<br>
 *                                       【特殊说明】要使用腾讯云直播 CDN，您需要先在[控制台](https://console.cloud.tencent.com/trtc/) 中的功能配置页开启“启动自动旁路直播”开关。<br>
 *                                       【参考文档】[CDN 旁路直播](https://cloud.tencent.com/document/product/647/16826)。
 * @param {String}       userDefineRecordId - 【字段含义】设置云端录制完成后的回调消息中的 "userdefinerecordid"  字段内容，便于您更方便的识别录制回调。<br>
 *                                            【推荐取值】限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。<br>
 *                                            【参考文档】[云端录制](https://cloud.tencent.com/document/product/647/16823)。
 */
var TRTCParams = /** @class */ (function () {
    function TRTCParams(sdkAppId, userId, roomId, userSig, strRoomId, privateMapKey, role, businessInfo, streamId, userDefineRecordId) {
        this.sdkAppId = sdkAppId;
        this.userId = userId;
        this.roomId = roomId;
        this.userSig = userSig;
        this.strRoomId = strRoomId;
        this.privateMapKey = privateMapKey;
        this.role = role;
        this.businessInfo = businessInfo;
        this.streamId = streamId;
        this.userDefineRecordId = userDefineRecordId;
    }
    return TRTCParams;
}());
exports.TRTCParams = TRTCParams;
/**
 * 视频编码参数<br>
 * 该设置决定了远端用户看到的画面质量（同时也是云端录制出的视频文件的画面质量）。
 * @param {TRTCVideoResolution}     videoResolution - 【字段含义】 视频分辨率<br>
 *                                                    【推荐取值】 <br>
 *                                                     - 视频通话建议选择360 × 640及以下分辨率，resMode 选择 Portrait。<br>
 *                                                     - 手机直播建议选择 540 × 960，resMode 选择 Portrait。<br>
 *                                                     - Window 和 iMac 建议选择 640 × 360 及以上分辨率，resMode 选择 Landscape。
 *                                                    【特别说明】 TRTCVideoResolution 默认只能横屏模式的分辨率，例如640 × 360。<br>
 *                                                                如需使用竖屏分辨率，请指定 resMode 为 Portrait，例如640 × 360结合 Portrait 则为360 × 640。<br>
 * @param {TRTCVideoResolutionMode} resMode         - 【字段含义】分辨率模式（横屏分辨率 - 竖屏分辨率）<br>
 *                                                    【推荐取值】手机直播建议选择 Portrait，Window 和 Mac 建议选择 Landscape。<br>
 *                                                    【特别说明】如果 videoResolution 指定分辨率 640 × 360，resMode 指定模式为 Portrait，则最终编码出的分辨率为360 × 640。<br>
 * @param {Number}                  videoFps        - 【字段含义】视频采集帧率<br>
 *                                                    【推荐取值】15fps 或 20fps，10fps 以下会有轻微卡顿感，5fps 以下卡顿感明显，20fps 以上的帧率则过于浪费（电影的帧率也只有 24fps）。<br>
 *                                                    【特别说明】很多 Android 手机的前置摄像头并不支持15fps以上的采集帧率，部分过于突出美颜功能的 Android 手机前置摄像头的采集帧率可能低于10fps。<br>
 * @param {Number}                  videoBitrate    - 【字段含义】视频上行码率<br>
 *                                                    【推荐取值】推荐设置请参考本文件前半部分 TRTCVideoResolution 定义处的注释说明<br>
 *                                                    【特别说明】码率太低会导致视频中有很多的马赛克<br>
 * @param {Number}                  minVideoBitrate  -【字段含义】最低视频码率，SDK 会在网络不佳的情况下主动降低视频码率，最低会降至 minVideoBitrate 所设定的数值。
 *                                                    【推荐取值】<br>
 *                                                      - 如果您追求“允许卡顿但要保持清晰”的效果，可以设置 minVideoBitrate 为 videoBitrate 的 60%；
 *                                                      - 如果您追求“允许模糊但要保持流畅”的效果，可以设置 minVideoBitrate 为 200kbps；
 *                                                      - 如果您将 videoBitrate 和 minVideoBitrate 设置为同一个值，等价于关闭 SDK 的自适应调节能力；
 *                                                      - 默认值：0，此时最低码率由 SDK 根据分辨率情况，自动设置合适的数值。<br>
 *                                                    【特别说明】<br>
 *                                                     - 当您把分辨率设置的比较高时，minVideoBitrate 不适合设置的太低，否则会出现画面模糊和大范围的马赛克宏块。
 *                                                       比如把分辨率设置为 720p，把码率设置为 200kbps，那么编码出的画面将会出现大范围区域性马赛克。
 * @param {Boolean}                 enableAdjustRes - 【字段含义】是否允许调整分辨率<br>
 *                                                    【推荐取值】 <br>
 *                                                     - 手机直播建议选择 NO。<br>
 *                                                     - 视频通话模式，若更关注流畅性，建议选择 YES，此时若遇到带宽有限的弱网，SDK 会自动降低分辨率以保障更好的流畅度（仅针对 TRTCVideoStreamTypeBig 生效）。
 *                                                     - 默认值：NO。<br>
 *                                                    【特别说明】若有录制需求，选择 YES 时，请确保通话过程中，调整分辨率不会影响您的录制效果。<br>
 */
var TRTCVideoEncParam = /** @class */ (function () {
    function TRTCVideoEncParam(videoResolution, resMode, videoFps, videoBitrate, minVideoBitrate, enableAdjustRes) {
        if (videoResolution === void 0) { videoResolution = TRTCVideoResolution.TRTCVideoResolution_640_360; }
        if (resMode === void 0) { resMode = TRTCVideoResolutionMode.TRTCVideoResolutionModePortrait; }
        if (videoFps === void 0) { videoFps = 15; }
        if (videoBitrate === void 0) { videoBitrate = 550; }
        if (minVideoBitrate === void 0) { minVideoBitrate = 0; }
        if (enableAdjustRes === void 0) { enableAdjustRes = false; }
        this.videoResolution = videoResolution;
        this.videoResolutionMode = resMode;
        this.videoFps = videoFps;
        this.videoBitrate = videoBitrate;
        this.minVideoBitrate = minVideoBitrate;
        this.enableAdjustRes = enableAdjustRes;
    }
    return TRTCVideoEncParam;
}());
exports.TRTCVideoEncParam = TRTCVideoEncParam;
;
/**
 * 画面渲染参数<br>
 * 您可以通过设置此参数来控制画面的旋转、填充、镜像模式
 * @param {TRTCVideoRotation} rotation  - 【字段含义】视频画面旋转方向
 * @param {TRTCVideoFillMode} fillMode  - 【字段含义】视频画面填充模式
 * @param {TRTCVideoMirrorType} mirrorType  - 【字段含义】画面渲染镜像类型
 */
var TRTCRenderParams = /** @class */ (function () {
    function TRTCRenderParams(rotation, fillMode, mirrorType) {
        if (rotation === void 0) { rotation = TRTCVideoRotation.TRTCVideoRotation_0; }
        if (fillMode === void 0) { fillMode = TRTCVideoFillMode.TRTCVideoFillMode_Fit; }
        if (mirrorType === void 0) { mirrorType = TRTCVideoMirrorType.TRTCVideoMirrorType_Disable; }
        this.rotation = rotation;
        this.fillMode = fillMode;
        this.mirrorType = mirrorType;
    }
    return TRTCRenderParams;
}());
exports.TRTCRenderParams = TRTCRenderParams;
/**
 * 音频路由（即声音的播放模式）<br>
 * @enum {Number}
 */
var TRTCAudioRoute_HACK_JSDOC = {
    /** 使用扬声器播放（即“免提”），扬声器位于手机底部，声音偏大，适合外放音乐 */
    TRTCAudioRouteSpeaker: 0,
    /** 使用听筒播放，听筒位于手机顶部，声音偏小，适合需要保护隐私的通话场景 */
    TRTCAudioRouteEarpiece: 1,
};
var TRTCAudioRoute;
(function (TRTCAudioRoute) {
    TRTCAudioRoute[TRTCAudioRoute["TRTCAudioRouteSpeaker"] = 0] = "TRTCAudioRouteSpeaker";
    TRTCAudioRoute[TRTCAudioRoute["TRTCAudioRouteEarpiece"] = 1] = "TRTCAudioRouteEarpiece";
})(TRTCAudioRoute = exports.TRTCAudioRoute || (exports.TRTCAudioRoute = {}));
/////////////////////////////////////////////////////////////////////////////////
//
//                    【其它参数】
//
/////////////////////////////////////////////////////////////////////////////////
var TRTCShareSource;
(function (TRTCShareSource) {
    TRTCShareSource["InApp"] = "InApp";
    TRTCShareSource["ByReplaykit"] = "ByReplaykit";
})(TRTCShareSource = exports.TRTCShareSource || (exports.TRTCShareSource = {}));
