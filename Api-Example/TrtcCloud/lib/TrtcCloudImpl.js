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
    TrtcCloudImpl.prototype.on = function (event, callback) {
        // if (this.listenersMap_.has(event)) {
        // 	return;
        // }
        if (typeof event !== 'string') {
        }
        var nativeListener = function (res) {
            var _a = res.data, data = _a === void 0 ? [] : _a;
            var code = data[0];
            var message = data[1] || '';
            var extraInfo = data[2] || {};
            switch (event) {
                case 'onEnterRoom': {
                    var result = code;
                    callback(result);
                    break;
                }
                case 'onExitRoom': {
                    var reason = code;
                    callback(reason);
                    break;
                }
                case 'onFirstVideoFrame': {
                    var userId = code;
                    var streamType = data[1] || 0;
                    var width = data[2] || 0;
                    var height = data[3] || 0;
                    callback({ userId: userId, streamType: streamType, width: width, height: height });
                    break;
                }
                case 'onFirstAudioFrame': {
                    var userId = code || '';
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
                    var localQuality = data[0];
                    var remoteQuality = data[1];
                    callback({ localQuality: localQuality, remoteQuality: remoteQuality });
                    break;
                }
                case 'onRemoteUserEnterRoom': {
                    var userId = code || '';
                    callback(userId);
                    break;
                }
                case 'onRemoteUserLeaveRoom': {
                    var userId = code || '';
                    var reason = message;
                    callback({ userId: userId, reason: reason });
                    break;
                }
                case 'onSendFirstLocalAudioFrame': {
                    callback();
                    break;
                }
                case 'onSendFirstLocalVideoFrame': {
                    var streamType = code;
                    callback(streamType);
                    break;
                }
                case 'onStatistics': {
                    var statics = data[0] || {};
                    callback(statics);
                    break;
                }
                case 'onUserAudioAvailable': {
                    var userId = code || '';
                    var available = message;
                    callback({ userId: userId, available: available });
                    break;
                }
                case 'onUserVideoAvailable': {
                    var userId = code || '';
                    var available = message;
                    callback({ userId: userId, available: available });
                    break;
                }
                case 'onUserVoiceVolume': {
                    var userVolumes = data[0];
                    var totalVolume = data[1];
                    callback({ userVolumes: userVolumes, totalVolume: totalVolume });
                    break;
                }
                default: {
                    callback({ code: code, message: message, extraInfo: extraInfo });
                }
            }
        };
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
        return TrtcNativeTrtcCloudModule.exitRoom();
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
    TrtcCloudImpl.prototype.setAudioRoute = function (route) {
        try {
            TrtcNativeTrtcCloudModule.setAudioRoute(route);
        }
        catch (error) {
        }
    };
    return TrtcCloudImpl;
}());
exports.default = TrtcCloudImpl;
