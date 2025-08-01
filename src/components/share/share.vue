<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios';
import router from '../../router/router';
import { useLocale } from './lang'
import { decryptJS } from './crypto';

const { lang } = useLocale()

const T = ref(null)

const readyRender = ref(false)

const opened = ref(false)

const showTip = ref(true)

const gratitude = ref(null)

onBeforeMount(async () => {
    const gratitudeID = router.currentRoute.value.params.gratitudeID
    try {
        const TBuffer = await axios(`${import.meta.env.BASE_URL}${lang.value}.json`)
        T.value = TBuffer.data
        console.log(`${import.meta.env.BASE_URL}${lang.value}.json`)
        console.log(T.value)
        const buffer = await axios.get(`https://hillib.scholarhills.com/api/ruyi/plant/${gratitudeID}`)
        gratitude.value = buffer.data
        const plainText = await decryptJS({
            ciphertext: gratitude.value.content,
            nonce: gratitude.value.nonce,
            tag: gratitude.value.tag
        })
        gratitude.value.content = plainText
        readyRender.value = true;
    } catch (e) {
        console.log(e)
    }
})

function handleOpenMail() {
    showTip.value = false
    setTimeout(() => {
        opened.value = true;
    }, 1000);
}

function handleDownload() {
    window.open("https://apps.apple.com/us/app/blooming-gratitude/id6741553160");
}
</script>

<template>
    <div v-if="readyRender" class="share-container">
        <transition>
            <div v-if="!opened" @click="handleOpenMail" class="letter-image">
                <div class="animated-mail">
                    <div class="back-fold"></div>
                    <div class="letter">
                        <div class="letter-border"></div>
                        <div class="letter-title"></div>
                        <div class="letter-context"></div>
                        <div class="letter-stamp">
                            <div class="letter-stamp-inner"></div>
                        </div>
                    </div>
                    <div class="top-fold"></div>
                    <div class="body"></div>
                    <div class="left-fold"></div>
                </div>
                <transition>
                    <div v-if="showTip" class="shadow">
                        {{ T.Button_Open }}
                    </div>
                </transition>
            </div>
            <div v-else class="letter-content">
                <!--  特效 - 彩带 - 闪烁 -->
                <div class="inner">
                    <n-flex vertical :size="48">
                        <n-flex vertical>
                            <div class="img-wrapper">
                                <n-image :src="gratitude.imgUrl"></n-image>
                            </div>
                            <n-text :depth="3">
                                Planted at
                                <n-time :time="new Date(gratitude.createdAt)" :formmat="'MMM:d:YYYY'"></n-time>
                            </n-text>
                            <div>
                                <div style="font-size: 1.2rem">{{ gratitude.content }}</div>
                            </div>
                        </n-flex>
                    </n-flex>
                </div>
            </div>
        </transition>
        <transition>
            <div v-if="opened" class="download" @click="handleDownload">
                <n-flex :align="'center'">
                    <img style="width: 2.8rem" src="/apple-touch-icon.png" />
                    <n-flex vertical :size="2">
                        <div>{{ T.App_Name }}</div>
                        <n-text :depth="3">Click to download</n-text>
                    </n-flex>
                </n-flex>
            </div>
        </transition>
    </div>
</template>

<style lang='less' scoped>
.share-container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-items: center;
    background: #F9F6F1;

    .letter-content {
        position: relative;

        .image-wrapper {
            width: 100%;
            aspect-ratio: 1/1;
            background: #f0f0f0;
            border-radius: 2rem;
            box-shadow: var(--boxShadow-light);
            overflow: hidden;
            position: relative;
        }

        :deep(img) {
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover !important;
            border-radius: 2rem;
            box-shadow: var(--boxShadow-light);
        }

        .inner {
            padding: 2rem;

            .title {
                font-size: 1.6rem;
                font-weight: bold;
            }
        }
    }

    .download {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        padding: 0.5rem;
        box-shadow: var(--boxShadow-light);
        border-radius: 8px;

        img {
            border-radius: 8px;
        }
    }
}

.letter-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    cursor: pointer;
}

.animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    transition: .4s;
    -webkit-transition: .4s;
    -moz-transition: .4s;

    .body {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 100px 200px;
        border-color: transparent transparent #e95f55 transparent;
        z-index: 2;
    }

    .top-fold {
        position: absolute;
        top: 50px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 100px 0 100px;
        transform-origin: 50% 0%;
        transition: transform .4s .4s, z-index .2s .4s;
        -webkit-transform-origin: 50% 0%;
        -webkit-transition: transform .4s .4s, z-index .2s .4s;
        -moz-transform-origin: 50% 0%;
        -moz-transition: transform .4s .4s, z-index .2s .4s;
        border-color: #cf4a43 transparent transparent transparent;
        z-index: 2;
    }

    .back-fold {
        position: absolute;
        bottom: 0;
        width: 200px;
        height: 100px;
        background: #cf4a43;
        z-index: 0;
    }

    .left-fold {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 0 50px 100px;
        border-color: transparent transparent transparent #e15349;
        z-index: 2;
    }

    .letter {
        position: absolute;
        left: 20px;
        bottom: 0;
        width: 160px;
        height: 60px;
        background: white;
        z-index: 1;
        overflow: hidden;
        transition: .4s .2s;
        -webkit-transition: .4s .2s;
        -moz-transition: .4s .2s;

        .letter-border {
            height: 10px;
            width: 100%;
            background: repeating-linear-gradient(-45deg,
                    #cb5a5e,
                    #cb5a5e 8px,
                    transparent 8px,
                    transparent 18px);
        }

        .letter-title {
            margin-top: 10px;
            margin-left: 5px;
            height: 10px;
            width: 40%;
            background: #cb5a5e;
        }

        .letter-context {
            margin-top: 10px;
            margin-left: 5px;
            height: 10px;
            width: 20%;
            background: #cb5a5e;
        }

        .letter-stamp {
            margin-top: 30px;
            margin-left: 120px;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            background: #cb5a5e;
            opacity: 0.3;
        }
    }
}

.shadow {
    font-family: "Dancing Script", cursive;
    font-size: 1.7rem;
    color: #fff;
    position: absolute;
    top: 85px;
    left: 50%;
    width: 400px;
    height: 30px;
    text-align: center;
    transition: .4s;
    -webkit-transition: .4s;
    -moz-transition: .4s;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    z-index: 999;
}

.letter-image:hover {
    .animated-mail {
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
    }

    .animated-mail .top-fold {
        transition: transform .4s, z-index .2s;
        transform: rotateX(180deg);
        -webkit-transition: transform .4s, z-index .2s;
        -webkit-transform: rotateX(180deg);
        -moz-transition: transform .4s, z-index .2s;
        -moz-transform: rotateX(180deg);
        z-index: 0;
    }

    .animated-mail .letter {
        height: 180px;
    }
}
</style>