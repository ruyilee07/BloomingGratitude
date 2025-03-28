<script setup>
import { ref } from 'vue';
import router from '../../router/router';

function handleToAppPage() {

} 
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div>
                <div>
                    <div>
                        <n-flex>
                            <n-image src="./BloomingGratitude/home/Sample.webp" preview-disabled></n-image>
                        </n-flex>
                    </div>
                    <div>
                        <div style="text-align: center;">
                            <div class="slogan">Plant the Seeds of Gratitude,<br />Watch Joy Bloom.</div>
                            <div class="subtitle">Transform your daily thankfulness into vibrant, personalized art.
                            </div>
                            <n-button type="primary" round class="startBtn" @click="handleToAppPage">
                                Download Here
                            </n-button>
                        </div>
                    </div>
                </div>
            </div>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    padding: 24px;

    .n-image {
        border-radius: 3px;

        :deep(img) {
            width: 100%;
        }
    }

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .slogan {
            font-size: 36px;
            font-weight: bold;
            line-height: 1.4;
            margin-top: 48px;
        }

        .subtitle {
            margin-top: 48px;
            margin-bottom: 24px;
            font-size: 18px;
        }

        .startBtn {
            margin: 12px 0 48px 0;
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