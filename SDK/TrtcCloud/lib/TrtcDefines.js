"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRTCCloudDef = exports.TRTCAudioQuality = exports.TRTCVideoStreamType = exports.TRTCRoleType = exports.TRTCAppScene = exports.TRTCParams = void 0;
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
var TRTCCloudDef = /** @class */ (function () {
    function TRTCCloudDef() {
    }
    TRTCCloudDef.TRTC_AUDIO_ROUTE_SPEAKER = 0; // 扬声器, 默认选择扬声器
    TRTCCloudDef.TRTC_AUDIO_ROUTE_EARPIECE = 1; // 听筒
    return TRTCCloudDef;
}());
exports.TRTCCloudDef = TRTCCloudDef;
