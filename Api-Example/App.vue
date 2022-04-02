<script>
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module 
	export default {
		onLaunch() {
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
