<script>
	import Aegis from 'aegis-weex-sdk';
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module 
	export default {
		onLaunch() {
			const projectName = 'uniappApiExampleExt';
			uni.$aegis = new Aegis({
				id: 'iHWefAYqWuCkDjhucc',
				spa: true,
				reportApiSpeed: true,
				reportAssetSpeed: true,
				pagePerformance: true,
				hostUrl: 'https://tamaegis.com',
			});
			uni.$uploadToTAM = (eventString, sdkAppId) => {
				uni.$aegis.reportEvent({
					name: eventString.split('#')[0] || '',
					ext1: eventString,
					ext2: projectName,
					ext3: sdkAppId,
				});
			};
			uni.$createTrtcCloudUpload = sdkAppId => uni.$uploadToTAM('createTrtcCloud', sdkAppId);
			uni.$enterRoomSuccessUpload = sdkAppId => uni.$uploadToTAM('enterRoom-success', sdkAppId);
			uni.$enterRoomFailedUpload = (sdkAppId, errorMsg) => uni.$uploadToTAM(`enterRoom-failed#error: ${errorMsg}`, sdkAppId);
			uni.$onErrorUpload = (sdkAppId, errorMsg) => uni.$uploadToTAM(`onError-failed#error: ${errorMsg}`, sdkAppId);
			uni.$startLocalPreviewUpload = sdkAppId => uni.$uploadToTAM('startLocalPreview', sdkAppId);
			uni.$startRemoteViewSuccessUpload = sdkAppId => uni.$uploadToTAM('startRemoteView-success', sdkAppId);
			uni.$startRemoteViewFailedUpload = (sdkAppId, errorMsg) => uni.$uploadToTAM(`startRemoteView-failed#error: ${errorMsg}`, sdkAppId);

			console.log('App Launch')
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/trtc-nvue.css';
</style>
