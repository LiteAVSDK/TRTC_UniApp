"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRTCVideoEncParam = exports.TRTCRenderParams = exports.TRTCVideoResolutionMode = exports.TRTCVideoResolution = exports.TXBeautyStyle = exports.TRTCVideoMirrorType = exports.TRTCVideoFillMode = exports.TRTCVideoRotation = exports.TRTCCloudDef = exports.TRTCShareSource = exports.TRTCAudioQuality = exports.TRTCVideoStreamType = exports.TRTCRoleType = exports.TRTCAppScene = exports.TRTCParams = exports.NAME = void 0;
exports.NAME = {
    ANDROID: 'android',
    IOS: 'ios',
};
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
var TRTCAppScene;
(function (TRTCAppScene) {
    TRTCAppScene[TRTCAppScene["TRTCAppSceneVideoCall"] = 0] = "TRTCAppSceneVideoCall";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneLIVE"] = 1] = "TRTCAppSceneLIVE";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneAudioCall"] = 2] = "TRTCAppSceneAudioCall";
    TRTCAppScene[TRTCAppScene["TRTCAppSceneVoiceChatRoom"] = 3] = "TRTCAppSceneVoiceChatRoom";
})(TRTCAppScene = exports.TRTCAppScene || (exports.TRTCAppScene = {}));
var TRTCRoleType;
(function (TRTCRoleType) {
    TRTCRoleType[TRTCRoleType["TRTCRoleAnchor"] = 20] = "TRTCRoleAnchor";
    TRTCRoleType[TRTCRoleType["TRTCRoleAudience"] = 21] = "TRTCRoleAudience";
})(TRTCRoleType = exports.TRTCRoleType || (exports.TRTCRoleType = {}));
var TRTCVideoStreamType;
(function (TRTCVideoStreamType) {
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeBig"] = 0] = "TRTCVideoStreamTypeBig";
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeSmall"] = 1] = "TRTCVideoStreamTypeSmall";
    TRTCVideoStreamType[TRTCVideoStreamType["TRTCVideoStreamTypeSub"] = 2] = "TRTCVideoStreamTypeSub";
})(TRTCVideoStreamType = exports.TRTCVideoStreamType || (exports.TRTCVideoStreamType = {}));
var TRTCAudioQuality;
(function (TRTCAudioQuality) {
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualitySpeech"] = 1] = "TRTCAudioQualitySpeech";
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualityDefault"] = 2] = "TRTCAudioQualityDefault";
    TRTCAudioQuality[TRTCAudioQuality["TRTCAudioQualityMusic"] = 3] = "TRTCAudioQualityMusic";
})(TRTCAudioQuality = exports.TRTCAudioQuality || (exports.TRTCAudioQuality = {}));
var TRTCShareSource;
(function (TRTCShareSource) {
    TRTCShareSource["InApp"] = "InApp";
    TRTCShareSource["ByReplaykit"] = "ByReplaykit";
})(TRTCShareSource = exports.TRTCShareSource || (exports.TRTCShareSource = {}));
var TRTCCloudDef = /** @class */ (function () {
    function TRTCCloudDef() {
    }
    TRTCCloudDef.TRTC_AUDIO_ROUTE_SPEAKER = 0; // 扬声器, 默认选择扬声器
    TRTCCloudDef.TRTC_AUDIO_ROUTE_EARPIECE = 1; // 听筒
    return TRTCCloudDef;
}());
exports.TRTCCloudDef = TRTCCloudDef;
var TRTCVideoRotation;
(function (TRTCVideoRotation) {
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_0"] = 0] = "TRTCVideoRotation_0";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_90"] = 1] = "TRTCVideoRotation_90";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_180"] = 2] = "TRTCVideoRotation_180";
    TRTCVideoRotation[TRTCVideoRotation["TRTCVideoRotation_270"] = 3] = "TRTCVideoRotation_270";
})(TRTCVideoRotation = exports.TRTCVideoRotation || (exports.TRTCVideoRotation = {}));
var TRTCVideoFillMode;
(function (TRTCVideoFillMode) {
    TRTCVideoFillMode[TRTCVideoFillMode["TRTCVideoFillMode_Fill"] = 0] = "TRTCVideoFillMode_Fill";
    TRTCVideoFillMode[TRTCVideoFillMode["TRTCVideoFillMode_Fit"] = 1] = "TRTCVideoFillMode_Fit";
})(TRTCVideoFillMode = exports.TRTCVideoFillMode || (exports.TRTCVideoFillMode = {}));
;
var TRTCVideoMirrorType;
(function (TRTCVideoMirrorType) {
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Auto"] = 0] = "TRTCVideoMirrorType_Auto";
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Enable"] = 1] = "TRTCVideoMirrorType_Enable";
    TRTCVideoMirrorType[TRTCVideoMirrorType["TRTCVideoMirrorType_Disable"] = 2] = "TRTCVideoMirrorType_Disable";
})(TRTCVideoMirrorType = exports.TRTCVideoMirrorType || (exports.TRTCVideoMirrorType = {}));
var TXBeautyStyle;
(function (TXBeautyStyle) {
    TXBeautyStyle[TXBeautyStyle["TXBeautyStyleSmooth"] = 0] = "TXBeautyStyleSmooth";
    TXBeautyStyle[TXBeautyStyle["TXBeautyStyleNature"] = 1] = "TXBeautyStyleNature";
    TXBeautyStyle[TXBeautyStyle["TXBeautyStylePitu"] = 2] = "TXBeautyStylePitu";
})(TXBeautyStyle = exports.TXBeautyStyle || (exports.TXBeautyStyle = {}));
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
var TRTCVideoResolutionMode;
(function (TRTCVideoResolutionMode) {
    TRTCVideoResolutionMode[TRTCVideoResolutionMode["TRTCVideoResolutionModeLandscape"] = 0] = "TRTCVideoResolutionModeLandscape";
    TRTCVideoResolutionMode[TRTCVideoResolutionMode["TRTCVideoResolutionModePortrait"] = 1] = "TRTCVideoResolutionModePortrait";
})(TRTCVideoResolutionMode = exports.TRTCVideoResolutionMode || (exports.TRTCVideoResolutionMode = {}));
;
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
 * 5.2 视频编码参数
 *
 * 该设置决定了远端用户看到的画面质量（同时也是云端录制出的视频文件的画面质量）。
 *
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
