<script setup>
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div class="block1__inner">
                <div>
                    <n-avatar :size="400" src="./BloomingGratitude/about/Avatar.jpg" />
                </div>
                <div>
                    <div style="font-size: 96px"><b>Hello!</b></div>
                    <n-p :depth="3" style="font-size: 18px">My name is Ruyi Li. I am eager to pursue an undergraduate
                        degree in finance, driven by my curiosity about the world of economics and the dynamic nature of
                        financial markets. Beyond excelling in class, I actively participate in and organize various
                        events outside the classroom. These experiences have honed my leadership skills, teaching me the
                        importance of initiative, teamwork, and community engagement.</n-p>
                    <n-p :depth="3" style="font-size: 18px">If you'd like to know more about me, just click the button
                        below to visit my personal website, where I share details about my learning journey and the
                        projects I'm passionate about.</n-p>
                    <n-button type="primary" round tag="a" target="_blank" style="margin-top: 12px"
                        href="https://ruyili.hillcodex.com/#/">
                        Go to my personal website
                    </n-button>
                </div>
            </div>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    padding: 24px;

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .block1__inner {
            align-items: center;
        }
    }
}
</style>