<script setup>
import { ref } from 'vue';
import router from '../../router/router';
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div style="margin-top: -87px">
                <n-grid style="align-items: center;">
                    <n-gi :span="12">
                        <n-flex :justify="'center'">
                            <n-image :width="240" src="./BloomingGratitude/home/Sample.webp" preview-disabled></n-image>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="12">
                        <div>
                            <div class="slogan">Plant the Seeds of Gratitude,<br />Watch Joy Bloom.</div>
                            <div class="subtitle">Transform your daily thankfulness into vibrant, personalized art.
                            </div>
                        </div>
                        <div>
                            <n-button type="primary" round class="startBtn" tag="a" target="_blank"
                                href="https://apps.apple.com/us/app/blooming-gratitude/id6741553160">
                                Download Here
                            </n-button>
                        </div>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .n-image {
        border-radius: 3px;
    }

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .slogan {
            font-size: 36px;
            font-weight: bold;
            line-height: 1.4;
        }

        .subtitle {
            margin-top: 48px;
            margin-bottom: 24px;
            font-size: 18px;
        }

        .startBtn {
            margin-top: 12px;
        }
    }

    .block2 {
        min-height: 100vh;

        .n-grid {
            align-items: center;
        }
    }

    .block3 {
        min-height: 100vh;
    }
}
</style>