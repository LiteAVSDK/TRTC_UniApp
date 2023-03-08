var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NAME } from './constants';
import { TRTCRoleType, TRTCAudioQuality, TRTCVideoRotation, TRTCVideoFillMode, TRTCVideoMirrorType, TRTCVideoStreamType, TRTCVideoEncParam, TRTCAppScene, TRTCAudioRoute, TRTCBeautyStyle, } from './TrtcDefines';
import TrtcError, { TXLiteJSError, generateError_ } from './TrtcCode';
const TrtcNativeTrtcCloudModule = uni.requireNativePlugin('TRTCCloudUniPlugin-TRTCCloudImpl');
const TXAudioEffectManagerModule = uni.requireNativePlugin('TRTCCloudUniPlugin-TRTCCloudImpl-TXAudioEffectManagerModule');
const TrtcEvent = uni.requireNativePlugin('globalEvent');
let trtcCloud = null; // trtcCloud 单例
export default class TrtcCloudImpl {
    constructor() {
        this.listenersMap_ = new Map();
    }
    static _createInstance() {
        try {
            if (trtcCloud) {
                return trtcCloud;
            }
            TrtcNativeTrtcCloudModule.sharedInstance();
            trtcCloud = new TrtcCloudImpl();
            return trtcCloud;
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    static _getInstance() {
        if (trtcCloud) {
            return trtcCloud;
        }
        throw new TrtcError({
            code: TXLiteJSError.INVALID_OPERATION,
            message: 'get trtcCloud failed, please create trtcCloud first',
        });
    }
    static _destroyInstance() {
        try {
            trtcCloud = null;
            TrtcNativeTrtcCloudModule.destroySharedInstance();
        }
        catch (error) {
            throw new TrtcError({
                code: error.code || TXLiteJSError.UNKNOWN,
                message: error.message,
                name: error.name,
            });
        }
    }
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
    on(event, callback) {
        if (typeof event !== NAME.STRING || typeof callback !== NAME.FUNCTION) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the on method parameter types. event type is a ${typeof event}; callback type is a ${typeof callback}`,
            });
        }
        const nativeListener = (res) => __awaiter(this, void 0, void 0, function* () {
            const { data = [] } = res;
            const code = data[0];
            const message = data[1] || '';
            const extraInfo = data[2] || {};
            switch (event) {
                case 'onEnterRoom': {
                    const result = code;
                    callback(result);
                    break;
                }
                case 'onExitRoom': {
                    const reason = code;
                    callback(reason);
                    break;
                }
                case 'onFirstVideoFrame': {
                    const userId = code;
                    const streamType = data[1] || 0;
                    const width = data[2] || 0;
                    const height = data[3] || 0;
                    callback({ userId, streamType, width, height });
                    break;
                }
                case 'onFirstAudioFrame': {
                    const userId = code || '';
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
                    const localQuality = data[0];
                    const remoteQuality = data[1];
                    callback({ localQuality, remoteQuality });
                    break;
                }
                case 'onRemoteUserEnterRoom': {
                    const userId = code || '';
                    callback(userId);
                    break;
                }
                case 'onRemoteUserLeaveRoom': {
                    const userId = code || '';
                    const reason = message;
                    callback({ userId, reason });
                    break;
                }
                case 'onSendFirstLocalAudioFrame': {
                    callback();
                    break;
                }
                case 'onSendFirstLocalVideoFrame': {
                    const streamType = code;
                    callback(streamType);
                    break;
                }
                case 'onStatistics': {
                    const statics = data[0] || {};
                    callback(statics);
                    break;
                }
                case 'onUserAudioAvailable': {
                    const userId = code || '';
                    const available = message;
                    callback({ userId, available });
                    break;
                }
                case 'onUserVideoAvailable': {
                    const userId = code || '';
                    const available = message;
                    callback({ userId, available });
                    break;
                }
                case 'onUserVoiceVolume': {
                    const userVolumes = data[0];
                    const totalVolume = data[1];
                    callback({ userVolumes, totalVolume });
                    break;
                }
                case 'onSwitchRole': {
                    callback({ code, message });
                    break;
                }
                case 'onScreenCaptureStarted': {
                    callback({ code, message });
                    break;
                }
                case 'onScreenCapturePaused': {
                    callback({ code, message });
                    break;
                }
                case 'onScreenCaptureResumed': {
                    callback({ code, message });
                    break;
                }
                case 'onScreenCaptureStopped': {
                    callback({ code, message });
                    break;
                }
                case 'onUserSubStreamAvailable': {
                    const userId = code || '';
                    const available = message;
                    callback({ userId, available });
                    break;
                }
                case 'onSnapshotComplete': {
                    // base64 直接保存到本地图库
                    // const { code: snapShotCode, message: msg } = await this.saveImage_(code);
                    // callback({ snapShotCode, message: msg });
                    callback({ base64Data: code, message });
                    break;
                }
                case 'onUserVideoSizeChanged': {
                    callback(data);
                    break;
                }
                case 'onStart': {
                    callback({ id: code, errCode: message });
                    break;
                }
                case 'onPlayProgress': {
                    callback({ id: code, curPtsMS: message, durationMS: extraInfo });
                    break;
                }
                case 'onComplete': {
                    callback({ id: code, errCode: message });
                    break;
                }
                case 'onError': {
                    console.error(`onError: ${code}, ${message}, ${extraInfo}`);
                    callback(generateError_({ message }, code, extraInfo));
                    break;
                }
                default: {
                    callback({ code, message, extraInfo });
                }
            }
        });
        this.listenersMap_.set(event, nativeListener); // 多次设置同一个事件时，后面的 callback 覆盖前面
        TrtcEvent.addEventListener(event, nativeListener);
    }
    off(event) {
        if (typeof event !== NAME.STRING) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the off method parameter types. event type is a ${typeof event} not a ${NAME.STRING}`,
            });
        }
        try {
            if (event === '*') {
                this.listenersMap_.forEach((value, key) => {
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
            throw generateError_(error);
        }
    }
    enterRoom(params, scene) {
        if (scene !== TRTCAppScene.TRTCAppSceneVideoCall && scene !== TRTCAppScene.TRTCAppSceneLIVE && scene !== TRTCAppScene.TRTCAppSceneAudioCall && scene !== TRTCAppScene.TRTCAppSceneVoiceChatRoom) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the enterRoom method parameters. scene is not of TRTCAppScene`,
            });
        }
        try {
            const enterRoomParams = Object.assign(Object.assign({}, params), { role: params.role || TRTCRoleType.TRTCRoleAnchor, appScene: scene });
            TrtcNativeTrtcCloudModule.enterRoom(enterRoomParams);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    exitRoom() {
        try {
            TrtcNativeTrtcCloudModule.exitRoom();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    switchRole(role) {
        if (role !== TRTCRoleType.TRTCRoleAnchor && role !== TRTCRoleType.TRTCRoleAudience) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the switchRole method parameter. role is not of TRTCRoleType`,
            });
        }
        try {
            role && TrtcNativeTrtcCloudModule.switchRole(role);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    startLocalPreview(isFrontCamera = true, viewId) {
        if (typeof isFrontCamera !== NAME.BOOLEAN || !viewId || typeof viewId !== NAME.STRING) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the startLocalPreview method parameters`,
            });
        }
        try {
            let param = { isFrontCamera: !!isFrontCamera };
            param = viewId ? Object.assign(Object.assign({}, param), { userId: viewId }) : param;
            TrtcNativeTrtcCloudModule.startLocalPreview(param);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    setVideoEncoderParam(param) {
        try {
            TrtcNativeTrtcCloudModule.setVideoEncoderParam(param);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    stopLocalPreview() {
        try {
            TrtcNativeTrtcCloudModule.stopLocalPreview();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    switchCamera(isFrontCamera) {
        if (typeof isFrontCamera !== NAME.BOOLEAN) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the switchCamera method parameter`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.switchCamera(isFrontCamera);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    setLocalRenderParams(params) {
        try {
            const { rotation = TRTCVideoRotation.TRTCVideoRotation_0, fillMode = TRTCVideoFillMode.TRTCVideoFillMode_Fill, mirrorType = TRTCVideoMirrorType.TRTCVideoMirrorType_Auto } = params;
            TrtcNativeTrtcCloudModule.setLocalRenderParams({
                rotation,
                fillMode,
                mirrorType,
            });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    muteLocalVideo(streamType, mute) {
        if (streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub || typeof mute !== NAME.BOOLEAN) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the muteLocalVideo method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteLocalVideo({ streamType, mute: !!mute });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    startRemoteView(userId, streamType, viewId) {
        if (!userId || streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSmall && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub || !viewId) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the startRemoteView method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.startRemoteView({ userId, streamType, viewId });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    stopRemoteView(userId, streamType) {
        if (!userId || streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSmall && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the stopRemoteView method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.stopRemoteView({ userId, streamType });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    // 远端渲染设置
    setRemoteRenderParams(userId, streamType, params) {
        try {
            if (!userId || (streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub)) {
                throw new TrtcError({
                    code: TXLiteJSError.INVALID_PARAMETER,
                    message: `${NAME.LOG_PREFIX} please check the snapshotVideo method parameters`,
                });
            }
            const { rotation = TRTCVideoRotation.TRTCVideoRotation_0, fillMode = TRTCVideoFillMode.TRTCVideoFillMode_Fill, mirrorType = TRTCVideoMirrorType.TRTCVideoMirrorType_Auto } = params;
            TrtcNativeTrtcCloudModule.setRemoteRenderParams({
                userId,
                streamType,
                rotation,
                fillMode,
                mirrorType
            });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    // 截图
    snapshotVideo(userId, streamType) {
        if (streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the snapshotVideo method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.snapshotVideo({ userId: userId || null, streamType });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    startLocalAudio(quality = TRTCAudioQuality.TRTCAudioQualityDefault) {
        if (quality !== TRTCAudioQuality.TRTCAudioQualitySpeech && quality !== TRTCAudioQuality.TRTCAudioQualityDefault && quality !== TRTCAudioQuality.TRTCAudioQualityMusic) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the startLocalAudio method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.startLocalAudio(quality);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    stopLocalAudio() {
        try {
            TrtcNativeTrtcCloudModule.stopLocalAudio();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    muteLocalAudio(mute) {
        if (typeof mute !== NAME.BOOLEAN) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the muteLocalAudio method parameters, mute type is a ${typeof mute} not a ${NAME.BOOLEAN}`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteLocalAudio(!!mute);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    muteRemoteAudio(userId, mute) {
        if (typeof mute !== NAME.BOOLEAN || !userId) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the muteRemoteAudio method parameters`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteRemoteAudio({ userId, mute: !!mute });
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    muteAllRemoteAudio(mute) {
        if (typeof mute !== NAME.BOOLEAN) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the muteAllRemoteAudio method parameters, mute type is a ${typeof mute} not a ${NAME.BOOLEAN}`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.muteAllRemoteAudio(!!mute);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    setAudioRoute(route) {
        if (route !== TRTCAudioRoute.TRTCAudioRouteSpeaker && route !== TRTCAudioRoute.TRTCAudioRouteEarpiece) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the setAudioRoute method parameter, route is not of TRTCAudioRoute`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setAudioRoute(route);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    enableAudioVolumeEvaluation(interval) {
        if (typeof interval !== NAME.NUMBER) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the enableAudioVolumeEvaluation method parameter, interval type is a ${typeof interval} not a ${NAME.NUMBER}`,
            });
        }
        try {
            interval > 0 && TrtcNativeTrtcCloudModule.enableAudioVolumeEvaluation(interval);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    // ///////////////////////////////////////////////////////////////////////////////
    //
    //                      美颜 + 水印
    //
    // ///////////////////////////////////////////////////////////////////////////////
    setBeautyStyle(beautyStyle) {
        if (beautyStyle !== TRTCBeautyStyle.TRTCBeautyStyleSmooth && beautyStyle !== TRTCBeautyStyle.TRTCBeautyStyleNature && beautyStyle !== TRTCBeautyStyle.TRTCBeautyStylePitu) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the setBeautyStyle method parameter, beautyStyle is not of TRTCBeautyStyle`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setBeautyStyle(beautyStyle);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    setBeautyLevel(beautyLevel) {
        if (typeof beautyLevel !== NAME.NUMBER || (beautyLevel < 0 || beautyLevel > 9)) {
            throw new TrtcError({
                code: TXLiteJSError.INVALID_PARAMETER,
                message: `${NAME.LOG_PREFIX} please check the setBeautyLevel method parameter, beautyLevel should in the range 0-9`,
            });
        }
        try {
            TrtcNativeTrtcCloudModule.setBeautyLevel(beautyLevel);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    // ///////////////////////////////////////////////////////////////////////////////
    //
    //                      背景音效
    //
    // ///////////////////////////////////////////////////////////////////////////////
    startPlayMusic(musicParam) {
        try {
            TXAudioEffectManagerModule.startPlayMusic(musicParam);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    stopPlayMusic(id) {
        try {
            TXAudioEffectManagerModule.stopPlayMusic(id);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    pausePlayMusic(id) {
        try {
            TXAudioEffectManagerModule.pausePlayMusic(id);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    resumePlayMusic(id) {
        try {
            TXAudioEffectManagerModule.resumePlayMusic(id);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    // ///////////////////////////////////////////////////////////////////////////////
    //
    //                      屏幕分享
    //
    // ///////////////////////////////////////////////////////////////////////////////
    setSubStreamEncoderParam(param) {
        try {
            TrtcNativeTrtcCloudModule.setSubStreamEncoderParam(param);
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    startScreenCapture(streamType = TRTCVideoStreamType.TRTCVideoStreamTypeSub, encParams = null) {
        try {
            let platform = uni.getSystemInfoSync().platform;
            if ((streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeSub && streamType !== TRTCVideoStreamType.TRTCVideoStreamTypeBig)) {
                streamType = TRTCVideoStreamType.TRTCVideoStreamTypeSub;
            }
            const screenCaptureParams = Object.assign({ streamType }, encParams);
            if (platform === NAME.ANDROID) {
                TrtcNativeTrtcCloudModule.startScreenCapture(screenCaptureParams);
            }
            if (platform === NAME.IOS) {
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
            throw generateError_(error);
        }
    }
    stopScreenCapture() {
        try {
            TrtcNativeTrtcCloudModule.stopScreenCapture();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    pauseScreenCapture() {
        try {
            TrtcNativeTrtcCloudModule.pauseScreenCapture();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
    resumeScreenCapture() {
        try {
            TrtcNativeTrtcCloudModule.resumeScreenCapture();
        }
        catch (error) {
            throw generateError_(error);
        }
    }
}
