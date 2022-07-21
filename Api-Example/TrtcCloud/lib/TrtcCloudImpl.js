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
var TrtcDefines_1 = require("./TrtcDefines");
// eslint-disable-next-line no-undef
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
            console.log("- impl _createInstance error = ".concat(error));
        }
    };
    TrtcCloudImpl._getInstance = function () {
        if (trtcCloud) {
            return trtcCloud;
        }
        throw new Error('get trtcCloud failed, please create trtcCloud first');
    };
    TrtcCloudImpl._destroyInstance = function () {
        try {
            trtcCloud = null;
            TrtcNativeTrtcCloudModule.destroySharedInstance();
        }
        catch (error) {
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
        // if (this.listenersMap_.has(event)) {
        // 	return;
        // }
        if (typeof event !== 'string') {
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
            console.log('off error ', error);
        }
    };
    TrtcCloudImpl.prototype.enterRoom = function (params, scene) {
        try {
            var enterRoomParams = __assign(__assign({}, params), { role: params.role || TrtcDefines_1.TRTCRoleType.TRTCRoleAnchor, appScene: scene });
            TrtcNativeTrtcCloudModule.enterRoom(enterRoomParams);
        }
        catch (error) {
            console.log("- impl enterRoom error = ".concat(error));
        }
    };
    TrtcCloudImpl.prototype.exitRoom = function () {
        TrtcNativeTrtcCloudModule.exitRoom();
    };
    TrtcCloudImpl.prototype.switchRole = function (role) {
        try {
            if (role !== TrtcDefines_1.TRTCRoleType.TRTCRoleAnchor && role !== TrtcDefines_1.TRTCRoleType.TRTCRoleAudience) {
                return;
            }
            role && TrtcNativeTrtcCloudModule.switchRole(role);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.startLocalPreview = function (isFrontCamera, viewId) {
        if (isFrontCamera === void 0) { isFrontCamera = true; }
        try {
            var param = { isFrontCamera: !!isFrontCamera };
            param = viewId ? __assign(__assign({}, param), { userId: viewId }) : param;
            TrtcNativeTrtcCloudModule.startLocalPreview(param);
        }
        catch (error) {
            console.log("- impl startLocalPreview error = ".concat(error));
        }
    };
    TrtcCloudImpl.prototype.stopLocalPreview = function () {
        try {
            TrtcNativeTrtcCloudModule.stopLocalPreview();
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.switchCamera = function (isFrontCamera) {
        try {
            if (typeof isFrontCamera !== 'boolean') {
                return;
            }
            TrtcNativeTrtcCloudModule.switchCamera(isFrontCamera);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.setLocalRenderParams = function (params) {
        try {
            var platform = uni.getSystemInfoSync().platform;
            if (platform === TrtcDefines_1.NAME.IOS) {
                return;
            }
            var _a = params.rotation, rotation = _a === void 0 ? TrtcDefines_1.TRTCVideoRotation.TRTCVideoRotation_0 : _a, _b = params.fillMode, fillMode = _b === void 0 ? TrtcDefines_1.TRTCVideoFillMode.TRTCVideoFillMode_Fill : _b, _c = params.mirrorType, mirrorType = _c === void 0 ? TrtcDefines_1.TRTCVideoMirrorType.TRTCVideoMirrorType_Auto : _c;
            TrtcNativeTrtcCloudModule.setLocalRenderParams({
                rotation: rotation,
                fillMode: fillMode,
                mirrorType: mirrorType
            });
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.muteLocalVideo = function (streamType, mute) {
        try {
            if ((streamType === TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeBig) || (streamType === TrtcDefines_1.TRTCVideoStreamType.TRTCVideoStreamTypeSub)) {
                TrtcNativeTrtcCloudModule.muteLocalVideo({ streamType: streamType, mute: !!mute });
            }
            else {
                // TODO: 抛出参数错误
                console.error('impl-muteLocalVideo, streamType is not TRTCVideoStreamTypeBig or TRTCVideoStreamTypeSub!');
            }
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.startRemoteView = function (userId, streamType, viewId) {
        try {
            TrtcNativeTrtcCloudModule.startRemoteView({ userId: userId, streamType: streamType, viewId: viewId });
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.stopRemoteView = function (userId, streamType) {
        try {
            TrtcNativeTrtcCloudModule.stopRemoteView({ userId: userId, streamType: streamType });
        }
        catch (error) {
        }
    };
    // 截图
    TrtcCloudImpl.prototype.snapshotVideo = function (userId, streamType) {
        try {
            TrtcNativeTrtcCloudModule.snapshotVideo({ userId: userId || null, streamType: streamType });
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.startLocalAudio = function (quality) {
        try {
            var qualityParam = quality || TrtcDefines_1.TRTCAudioQuality.TRTCAudioQualityDefault;
            TrtcNativeTrtcCloudModule.startLocalAudio(qualityParam);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.stopLocalAudio = function () {
        try {
            TrtcNativeTrtcCloudModule.stopLocalAudio();
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.muteLocalAudio = function (mute) {
        try {
            TrtcNativeTrtcCloudModule.muteLocalAudio(!!mute);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.muteRemoteAudio = function (userId, mute) {
        try {
            if (userId) {
                TrtcNativeTrtcCloudModule.muteRemoteAudio({ userId: userId, mute: !!mute });
            }
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.muteAllRemoteAudio = function (mute) {
        try {
            TrtcNativeTrtcCloudModule.muteAllRemoteAudio(!!mute);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.setAudioRoute = function (route) {
        try {
            TrtcNativeTrtcCloudModule.setAudioRoute(route);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.enableAudioVolumeEvaluation = function (interval) {
        try {
            if (interval) {
                TrtcNativeTrtcCloudModule.enableAudioVolumeEvaluation(interval);
            }
        }
        catch (error) {
        }
    };
    /////////////////////////////////////////////////////////////////////////////////
    //
    //                      美颜 + 水印
    //
    /////////////////////////////////////////////////////////////////////////////////
    TrtcCloudImpl.prototype.setBeautyStyle = function (beautyStyle) {
        try {
            TrtcNativeTrtcCloudModule.setBeautyStyle(beautyStyle);
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.setBeautyLevel = function (beautyLevel) {
        try {
            TrtcNativeTrtcCloudModule.setBeautyLevel(beautyLevel);
        }
        catch (error) {
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
            if (platform === TrtcDefines_1.NAME.ANDROID) {
                TrtcNativeTrtcCloudModule.startScreenCapture(screenCaptureParams);
            }
            if (platform === TrtcDefines_1.NAME.IOS) {
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
        }
    };
    TrtcCloudImpl.prototype.stopScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.stopScreenCapture();
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.pauseScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.pauseScreenCapture();
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.resumeScreenCapture = function () {
        try {
            TrtcNativeTrtcCloudModule.resumeScreenCapture();
        }
        catch (error) {
        }
    };
    TrtcCloudImpl.prototype.setSubStreamEncoderParam = function (encParams) {
        try {
            TrtcNativeTrtcCloudModule.setSubStreamEncoderParam(encParams);
        }
        catch (error) {
        }
    };
    return TrtcCloudImpl;
}());
exports.default = TrtcCloudImpl;
