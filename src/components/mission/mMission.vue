<script setup>
import { onMounted, ref } from 'vue';

const block2 = ref(null);
const block3 = ref(null);
const block4 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: getDistanceFromTop(frame), behavior: "smooth" });
};

const getDistanceFromTop = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
};

onMounted(() => {
    console.log(block2.value.clientHeight, block3.value.clientHeight, block4.value.clientHeight)
})
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div class="block1__inner">
                <div>
                    <h2>Why did I make this?</h2>
                    <p>In our hectic, modern lives, it’s all too easy to be overwhelmed by stress, negativity, and the
                        constant demands of the world around us. Many people find themselves caught in a cycle of
                        rushing from one obligation to the next, often losing sight of the deeper reasons behind their
                        existence. This barrage of everyday pressures can obscure the beauty and meaning in our lives,
                        leaving us feeling disconnected and unfulfilled.</p>
                    <p>I created Blooming Gratitude because I have experienced firsthand the transformative power of
                        daily thankfulness. Every day, I find solace and inspiration in recognizing even the smallest
                        blessings, and it’s this practice that has helped me shift my perspective in times of challenge.
                        I believe that when we consciously acknowledge what we’re grateful for, we open ourselves to a
                        richer, more fulfilling life.</p>
                    <h2>Mission</h2>
                    <p>My mission is to empower people to embrace gratitude every day, transforming even the smallest
                        moments into powerful reminders of joy and purpose.</p>
                </div>
            </div>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <div class="block2__inner">
                    <div>
                        <h1>Design Details</h1>
                        <p>Blooming Gratitude is more than just a simple note-taking app; it’s a visually engaging
                            platform that transforms your moments of thankfulness into a flourishing digital garden.
                            Here’s a closer look at how it works:</p>
                        <h2>Plant Creation with AI</h2>
                        <p>Whenever you write down something you’re grateful for, you’re prompted to choose a plant. You
                            can define its <b>type</b>, <b>color</b>, and <b>artistic style</b>, ensuring each entry
                            becomes a personal,
                            creative expression. Once you tap the “Plant” button, the app uses AI to generate a unique
                            image of your chosen plant—instantly turning your gratitude into a vibrant, shareable
                            illustration.</p>
                    </div>
                    <div>
                        <n-flex :justify="'center'" style="margin-top: 24px">
                            <n-flex vertical>
                                <n-image :width="240" src="./BloomingGratitude/mission/Design-1.webp"></n-image>
                                <n-flex :justify="'center'">
                                    <n-text :depth="3"></n-text>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                    </div>
                </div>
            </n-flex>
        </div>
        <div ref="block3">
            <n-flex class="block3" :align="'center'">
                <div class="block3__inner">
                    <div>
                        <h2>Growing Your Collection</h2>
                        <p>Each time you record a new moment of gratitude, you “plant” a new digital flower or foliage.
                            Over time, your gratitude grows into an ever-expanding collection of plants. This not only
                            motivates you to reflect on the positive aspects of your life regularly but also creates a
                            sense of accomplishment and delight as your garden flourishes.
                        </p>
                    </div>
                    <div class="showdetail" style="margin-top: 24px">
                        <n-flex :justify="'center'">
                            <n-flex vertical>
                                <n-image :width="240" src="./BloomingGratitude/mission/Design-2.webp"></n-image>
                            </n-flex>
                        </n-flex>
                    </div>
                </div>
            </n-flex>
        </div>
        <div ref="block4">
            <n-flex class="block4" :align="'center'">
                <div class="block4__inner">
                    <div>
                        <h1>My Garden: Organized & Inspiring</h1>
                        <p>In the <b>My Garden</b> page, Blooming Gratitude automatically organizes your plants
                            according to
                            their type and style. This classification system encourages users to explore and collect
                            different varieties, colors, and art styles, turning the act of gratitude into a fun and
                            fulfilling experience. As you watch your garden diversify, you’ll find new inspiration to
                            continue nurturing positivity in your daily life.
                        </p>
                    </div>
                    <div class="showdetail" style="margin-top: 24px">
                        <n-flex :justify="'center'">
                            <n-flex vertical>
                                <n-image style="border-radius: 12px" :width="240"
                                    src="./BloomingGratitude/mission/Design-3.webp" preview-disabled></n-image>
                            </n-flex>
                        </n-flex>
                    </div>
                </div>
            </n-flex>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    padding: 24px;

    .block1 {
        .block1__inner {

            .slogan {
                font-size: 48px;
                line-height: 1;
                letter-spacing: -0.075em;
                word-spacing: 0em;
            }
        }
    }

    .block2 {
        margin-top: 48px;

        .block2__inner {
            align-items: center;
        }
    }

    .block3 {
        margin-top: 48px;

        .block3__inner {
            align-items: center;
        }
    }

    .block4 {
        margin-top: 48px;

        .block4__inner {
            align-items: center;
        }
    }
}
</style>