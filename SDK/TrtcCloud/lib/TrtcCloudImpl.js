"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var TrtcDefines_1 = require("./TrtcDefines");
var TrtcCode_1 = __importStar(require("./TrtcCode"));
var TrtcNativeTrtcCloudModule = uni.requireNativePlugin('TRTCCloudUniPlugin-TRTCCloudImpl');
var TrtcEvent = uni.requireNativePlugin('globalEvent');
var trtcCloud = null; // trtcCloud 单例
var TrtcCloudImpl = /** @class */ (function () {
    function TrtcCloudImpl() {
        this.listenersMap_ = new Map();
    }
    TrtcCloudImpl._createInstance = function () {
        try {
            if (trtcCloud) {
                return trtcCloud;
            }
            TrtcNativeTrtcCloudModule.sharedInstance();
            trtcCloud = new TrtcCloudImpl();
            return trtcCloud;
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl._getInstance = function () {
        if (trtcCloud) {
            return trtcCloud;
        }
        throw new TrtcCode_1.default({
            code: TrtcCode_1.TXLiteJSError.INVALID_OPERATION,
            message: 'get trtcCloud failed, please create trtcCloud first',
        });
    };
    TrtcCloudImpl._destroyInstance = function () {
        try {
            trtcCloud = null;
            TrtcNativeTrtcCloudModule.destroySharedInstance();
        }
        catch (error) {
            throw new TrtcCode_1.default({
                code: error.code || TrtcCode_1.TXLiteJSError.UNKNOWN,
                message: error.message,
                name: error.name
            });
        }
    };
    // 截图保存
    // async saveImage_(base64Data) {
    //   return new Promise((resolve, reject) => {
    //     let bitmap = new plus.nativeObj.Bitmap();
    //     bitmap.loadBase64Data(base64Data, () => {
    //       const url = "_doc/" + new Date().getTime() + ".png";  // url为时间戳命名方式
    //       console.log('saveHeadImgFile', url);
    //       bitmap.save(url, { overwrite: true }, (i) => {
    //         uni.saveImageToPhotosAlbum({
    //           filePath: url,
    //           success: function() {
    //             uni.showToast({
    //               title: '图片保存成功',
    //               icon: 'none'
    //             })
    //             bitmap.clear();
    //             resolve({ code: 0, message: '图片保存成功' });
    //           }
    //         });
    //       }, (e) => {
    //         uni.showToast({
    //           title: '图片保存失败, 请重新截图',
    //           icon: 'none'
    //         })
    //         bitmap.clear();
    //         resolve({ code: -1, message: '图片保存失败, 请重新截图' });
    //       });
    //     });
    //   });
    // }
    TrtcCloudImpl.prototype.on = function (event, callback) {
        var _this = this;
        if (typeof event !== constants_1.NAME.STRING || typeof callback !== constants_1.NAME.FUNCTION) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the on method parameter types. event type is a ").concat(typeof event, "; callback type is a ").concat(typeof callback),
            });
        }
        var nativeListener = function (res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, data, code, message, extraInfo, result, reason, userId, streamType, width, height, userId, localQuality, remoteQuality, userId, userId, reason, streamType, statics, userId, available, userId, available, userVolumes, totalVolume, userId, available;
            return __generator(this, function (_b) {
                _a = res.data, data = _a === void 0 ? [] : _a;
                code = data[0];
                message = data[1] || '';
                extraInfo = data[2] || {};
                switch (event) {
                    case 'onEnterRoom': {
                        result = code;
                        callback(result);
                        break;
                    }
                    case 'onExitRoom': {
                        reason = code;
                        callback(reason);
                        break;
                    }
                    case 'onFirstVideoFrame': {
                        userId = code;
                        streamType = data[1] || 0;
                        width = data[2] || 0;
                        height = data[3] || 0;
                        callback({ userId: userId, streamType: streamType, width: width, height: height });
                        break;
                    }
                    case 'onFirstAudioFrame': {
                        userId = code || '';
                        callback(userId);
                        break;
                    }
                    case 'onMicDidReady': {
                        callback();
                        break;
                    }
                    case 'onCameraDidReady': {
                        callback();
                        break;
                    }
                    case 'onNetworkQuality': {
                        localQuality = data[0];
                        remoteQuality = data[1];
                        callback({ localQuality: localQuality, remoteQuality: remoteQuality });
                        break;
                    }
                    case 'onRemoteUserEnterRoom': {
                        userId = code || '';
                        callback(userId);
                        break;
                    }
                    case 'onRemoteUserLeaveRoom': {
                        userId = code || '';
                        reason = message;
                        callback({ userId: userId, reason: reason });
                        break;
                    }
                    case 'onSendFirstLocalAudioFrame': {
                        callback();
                        break;
                    }
                    case 'onSendFirstLocalVideoFrame': {
                        streamType = code;
                        callback(streamType);
                        break;
                    }
                    case 'onStatistics': {
                        statics = data[0] || {};
                        callback(statics);
                        break;
                    }
                    case 'onUserAudioAvailable': {
                        userId = code || '';
                        available = message;
                        callback({ userId: userId, available: available });
                        break;
                    }
                    case 'onUserVideoAvailable': {
                        userId = code || '';
                        available = message;
                        callback({ userId: userId, available: available });
                        break;
                    }
                    case 'onUserVoiceVolume': {
                        userVolumes = data[0];
                        totalVolume = data[1];
                        callback({ userVolumes: userVolumes, totalVolume: totalVolume });
                        break;
                    }
                    case 'onSwitchRole': {
                        callback({ code: code, message: message });
                        break;
                    }
                    case 'onScreenCaptureStarted': {
                        callback({ code: code, message: message });
                        break;
                    }
                    case 'onScreenCapturePaused': {
                        callback({ code: code, message: message });
                        break;
                    }
                    case 'onScreenCaptureResumed': {
                        callback({ code: code, message: message });
                        break;
                    }
                    case 'onScreenCaptureStopped': {
                        callback({ code: code, message: message });
                        break;
                    }
                    case 'onUserSubStreamAvailable': {
                        userId = code || '';
                        available = message;
                        callback({ userId: userId, available: available });
                        break;
                    }
                    case 'onSnapshotComplete': {
                        // base64 直接保存到本地图库
                        // const { code: snapShotCode, message: msg } = await this.saveImage_(code);
                        // callback({ snapShotCode, message: msg });
                        callback({ base64Data: code, message: message });
                        break;
                    }
                    case 'onError': {
                        callback((0, TrtcCode_1.generateError_)({ message: message }, code, extraInfo));
                    }
                    default: {
                        callback({ code: code, message: message, extraInfo: extraInfo });
                    }
                }
                return [2 /*return*/];
            });
        }); };
        this.listenersMap_.set(event, nativeListener); // 多次设置同一个事件时，后面的 callback 覆盖前面
        TrtcEvent.addEventListener(event, nativeListener);
    };
    TrtcCloudImpl.prototype.off = function (event) {
        if (typeof event !== constants_1.NAME.STRING) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the off method parameter types. event type is a ").concat(typeof event, " not a ").concat(constants_1.NAME.STRING),
            });
        }
        try {
            if (event === '*') {
                this.listenersMap_.forEach(function (value, key) {
                    TrtcEvent.removeEventListener(key, value);
                });
                this.listenersMap_.clear();
            }
            else {
                TrtcEvent.removeEventListener(event, this.listenersMap_.get(event));
                this.listenersMap_.delete(event);
            }
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.enterRoom = function (params, scene) {
        if (scene !== TrtcDefines_1.TRTCAppScene.TRTCAppSceneVideoCall && scene !== TrtcDefines_1.TRTCAppScene.TRTCAppSceneLIVE && scene !== TrtcDefines_1.TRTCAppScene.TRTCAppSceneAudioCall && scene !== TrtcDefines_1.TRTCAppScene.TRTCAppSceneVoiceChatRoom) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the enterRoom method parameters. scene is not of TRTCAppScene"),
            });
        }
        try {
            var enterRoomParams = __assign(__assign({}, params), { role: params.role || TrtcDefines_1.TRTCRoleType.TRTCRoleAnchor, appScene: scene });
            TrtcNativeTrtcCloudModule.enterRoom(enterRoomParams);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.exitRoom = function () {
        try {
            TrtcNativeTrtcCloudModule.exitRoom();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.switchRole = function (role) {
        if (role !== TrtcDefines_1.TRTCRoleType.TRTCRoleAnchor && role !== TrtcDefines_1.TRTCRoleType.TRTCRoleAudience) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the switchRole method parameter. role is not of TRTCRoleType"),
            });
        }
        try {
            role && TrtcNativeTrtcCloudModule.switchRole(role);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.startLocalPreview = function (isFrontCamera, viewId) {
        if (isFrontCamera === void 0) { isFrontCamera = true; }
        if (typeof isFrontCamera !== constants_1.NAME.BOOLEAN || !viewId || typeof viewId !== constants_1.NAME.STRING) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the startLocalPreview method parameters"),
            });
        }
        try {
            var param = { isFrontCamera: !!isFrontCamera };
            param = viewId ? __assign(__assign({}, param), { userId: viewId }) : param;
            TrtcNativeTrtcCloudModule.startLocalPreview(param);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.stopLocalPreview = function () {
        try {
            TrtcNativeTrtcCloudModule.stopLocalPreview();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.switchCamera = function (isFrontCamera) {
        if (typeof isFrontCamera !== constants_1.NAME.BOOLEAN) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the switchCamera method parameter"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.switchCamera(isFrontCamera);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.setLocalRenderParams = function (params) {
        try {
            var _a = params.rotation, rotation = _a === void 0 ? TrtcDefines_1.TRTCVideoRotation.TRTCVideoRotation_0 : _a, _b = params.fillMode, fillMode = _b === void 0 ? TrtcDefines_1.TRTCVideoFillMode.TRTCVideoFillMode_Fill : _b, _c = params.mirrorType, mirrorType = _c === void 0 ? TrtcDefines_1.TRTCVideoMirrorType.TRTCVideoMirrorType_Auto : _c;
            TrtcNativeTrtcCloudModule.setLocalRenderParams({
                rotation: rotation,
                fillMode: fillMode,
                mirrorType: mirrorType
            });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.muteLocalVideo = function (streamType, mute) {
        if (streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub || typeof mute !== constants_1.NAME.BOOLEAN) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the muteLocalVideo method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteLocalVideo({ streamType: streamType, mute: !!mute });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.startRemoteView = function (userId, streamType, viewId) {
        if (!userId || streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSmall && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub || !viewId) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the startRemoteView method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.startRemoteView({ userId: userId, streamType: streamType, viewId: viewId });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.stopRemoteView = function (userId, streamType) {
        if (!userId || streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSmall && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the stopRemoteView method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.stopRemoteView({ userId: userId, streamType: streamType });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    // 远端渲染设置
    TrtcCloudImpl.prototype.setRemoteRenderParams = function (userId, streamType, params) {
        try {
            if (!userId || (streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub)) {
                throw new TrtcCode_1.default({
                    code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                    message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the snapshotVideo method parameters"),
                });
            }
            var _a = params.rotation, rotation = _a === void 0 ? TrtcDefines_1.TRTCVideoRotation.TRTCVideoRotation_0 : _a, _b = params.fillMode, fillMode = _b === void 0 ? TrtcDefines_1.TRTCVideoFillMode.TRTCVideoFillMode_Fill : _b, _c = params.mirrorType, mirrorType = _c === void 0 ? TrtcDefines_1.TRTCVideoMirrorType.TRTCVideoMirrorType_Auto : _c;
            TrtcNativeTrtcCloudModule.setRemoteRenderParams({
                userId: userId,
                streamType: streamType,
                rotation: rotation,
                fillMode: fillMode,
                mirrorType: mirrorType
            });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    // 截图
    TrtcCloudImpl.prototype.snapshotVideo = function (userId, streamType) {
        if (streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the snapshotVideo method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.snapshotVideo({ userId: userId || null, streamType: streamType });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.startLocalAudio = function (quality) {
        if (quality === void 0) { quality = TrtcDefines_1.TRTCAudioQuality.TRTCAudioQualityDefault; }
        if (quality !== TrtcDefines_1.TRTCAudioQuality.TRTCAudioQualitySpeech && quality !== TrtcDefines_1.TRTCAudioQuality.TRTCAudioQualityDefault && quality !== TrtcDefines_1.TRTCAudioQuality.TRTCAudioQualityMusic) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the startLocalAudio method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.startLocalAudio(quality);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.stopLocalAudio = function () {
        try {
            TrtcNativeTrtcCloudModule.stopLocalAudio();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.muteLocalAudio = function (mute) {
        if (typeof mute !== constants_1.NAME.BOOLEAN) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the muteLocalAudio method parameters, mute type is a ").concat(typeof mute, " not a ").concat(constants_1.NAME.BOOLEAN),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteLocalAudio(!!mute);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.muteRemoteAudio = function (userId, mute) {
        if (typeof mute !== constants_1.NAME.BOOLEAN || !userId) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the muteRemoteAudio method parameters"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteRemoteAudio({ userId: userId, mute: !!mute });
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.muteAllRemoteAudio = function (mute) {
        if (typeof mute !== constants_1.NAME.BOOLEAN) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the muteAllRemoteAudio method parameters, mute type is a ").concat(typeof mute, " not a ").concat(constants_1.NAME.BOOLEAN),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteAllRemoteAudio(!!mute);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.setAudioRoute = function (route) {
        if (route !== TrtcDefines_1.TRTCAudioRoute.TRTCAudioRouteSpeaker && route !== TrtcDefines_1.TRTCAudioRoute.TRTCAudioRouteEarpiece) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the setAudioRoute method parameter, route is not of TRTCAudioRoute"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setAudioRoute(route);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.enableAudioVolumeEvaluation = function (interval) {
        if (typeof interval !== constants_1.NAME.NUMBER) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the enableAudioVolumeEvaluation method parameter, interval type is a ").concat(typeof interval, " not a ").concat(constants_1.NAME.NUMBER),
            });
        }
        try {
            interval > 0 && TrtcNativeTrtcCloudModule.enableAudioVolumeEvaluation(interval);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      美颜 + 水印
    //
    /////////////////////////////////////////////////////////////////////////////////
    TrtcCloudImpl.prototype.setBeautyStyle = function (beautyStyle) {
        if (beautyStyle !== TrtcDefines_1.TRTCBeautyStyle.TRTCBeautyStyleSmooth && beautyStyle !== TrtcDefines_1.TRTCBeautyStyle.TRTCBeautyStyleNature && beautyStyle !== TrtcDefines_1.TRTCBeautyStyle.TRTCBeautyStylePitu) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the setBeautyStyle method parameter, beautyStyle is not of TRTCBeautyStyle"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setBeautyStyle(beautyStyle);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.setBeautyLevel = function (beautyLevel) {
        if (typeof beautyLevel !== constants_1.NAME.NUMBER || (beautyLevel < 0 || beautyLevel > 9)) {
            throw new TrtcCode_1.default({
                code: TrtcCode_1.TXLiteJSError.INVALID_PARAMETER,
                message: "".concat(constants_1.NAME.LOG_PREFIX, " please check the setBeautyLevel method parameter, beautyLevel should in the range 0-9"),
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setBeautyLevel(beautyLevel);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      屏幕分享
    //
    /////////////////////////////////////////////////////////////////////////////////
    TrtcCloudImpl.prototype.setSubStreamEncoderParam = function (param) {
        try {
            if (param && !(param instanceof TrtcDefines_1.TRTCVideoEncParam)) {
                console.error('startScreenCapture, param is not instanceof TRTCVideoEncParam!');
                return;
            }
            TrtcNativeTrtcCloudModule.setSubStreamEncoderParam(param);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.startScreenCapture = function (streamType, encParams) {
        if (streamType === void 0) { streamType = TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub; }
        if (encParams === void 0) { encParams = null; }
        try {
            var platform = uni.getSystemInfoSync().platform;
            if ((streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub && streamType !== TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig)) {
                streamType = TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub;
            }
            // if (encParams && !(encParams instanceof TRTCVideoEncParam)) {
            //   console.error('startScreenCapture, encParams is not instanceof TRTCVideoEncParam!');
            //   return;
            // }
            var screenCaptureParams = __assign({ streamType: streamType }, encParams);
            if (platform === constants_1.NAME.ANDROID) {
                TrtcNativeTrtcCloudModule.startScreenCapture(screenCaptureParams);
            }
            if (platform === constants_1.NAME.IOS) {
                // 开始应用内的屏幕分享（仅支持 iOS 13.0 及以上系统）
                TrtcNativeTrtcCloudModule.startScreenCaptureInApp(screenCaptureParams);
                // if (shareSource === TRTCShareSource.InApp) {
                //   TrtcNativeTrtcCloudModule.startScreenCaptureInApp(screenCaptureParams);
                // }
                // // 开始全系统的屏幕分享（仅支持 iOS 11.0 及以上系统）
                // if (shareSource === TRTCShareSource.ByReplaykit) {
                //   TrtcNativeTrtcCloudModule.startScreenCaptureByReplaykit({ ...screenCaptureParams, appGroup: null });
                // }
            }
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.stopScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.stopScreenCapture();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.pauseScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.pauseScreenCapture();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.resumeScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.resumeScreenCapture();
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    TrtcCloudImpl.prototype.setSubStreamEncoderParam = function (encParams) {
        try {
            TrtcNativeTrtcCloudModule.setSubStreamEncoderParam(encParams);
        }
        catch (error) {
            throw (0, TrtcCode_1.generateError_)(error);
        }
    };
    return TrtcCloudImpl;
}());
exports.default = TrtcCloudImpl;
