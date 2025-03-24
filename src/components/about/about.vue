<script setup>
import { ref } from 'vue';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <n-grid class="block1__inner">
                <n-gi :span="8">
                </n-gi>
                <n-gi :span="14" :offset="2">
                </n-gi>
            </n-grid>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <n-grid class="block2__inner">
                    <n-gi :span="14">
                    </n-gi>
                    <n-gi :span="8" :offset="2">
                    </n-gi>
                </n-grid>
            </n-flex>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .block1__inner {
            margin-top: -87px;
            align-items: center;

            .avatar {
                border-radius: 12px;
                box-shadow: var(--boxShadow-deep);
            }
        }
    }

    .block2 {
        min-height: 100vh;

        .block2__inner {
            align-items: center;
        }
    }
}
</style>