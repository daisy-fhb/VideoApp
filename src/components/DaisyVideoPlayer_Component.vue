<template>

    <div>
        <!--标题-->
        <van-row type="flex" justify="center" class="m-header">
            <van-col span="24">
                Daisy Video
            </van-col>
        </van-row>

        <!--通告-->
        <van-notice-bar mode="link">
            E-Mail: daisyfhb@gmail.com ;
            This music player belongs to the Personal Research Institute. If there is copyright infringement, please contact me to delete it.
        </van-notice-bar>

<!--        <van-swipe :autoplay="3000">-->
<!--            <van-swipe-item v-for="(image, index) in images" :key="index">-->
<!--                <img v-lazy="image.url" width="200px"/>-->
<!--                <van-cell :title="image.title" :value="index" />-->
<!--            </van-swipe-item>-->
<!--        </van-swipe>-->
        <div class="container">
            <div class="player">
                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions"
                ></video-player>
            </div>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue'
    import {Toast} from 'vant'
    import VideoPlayer from 'vue-video-player'
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    Vue.use(VideoPlayer)
    Vue.use(Toast);

    export default {
        name: "DaisyVideoPlayer_Component",
        methods: {
            getQueryString(name) {
                let reg = `(^|&)${name}=([^&]*)(&|$)`
                let r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            }
        },
        data() {
            return {
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "./video/GH010330.mp4" //你的m3u8地址（必填）
                    }],
                    poster: "poster.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                     controlBar: {
                      timeDivider: true,
                      durationDisplay: true,
                      remainingTimeDisplay: false,
                      fullscreenToggle: true //全屏按钮
                     }
                }
            }
        },
        computed: {},
        mounted() {
            this.$notify('欢迎来到王者荣耀~');
        }
    }
</script>

<style scoped>
    .m-header {
        height: 50px;
        line-height: 50px;
        background: #245fd7;
        color: #fff;
    }
</style>
