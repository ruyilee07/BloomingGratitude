<script setup>
import { ref } from 'vue';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex :align="'center'">
            <div class="slogan"><b>Public Support</b></div>
            <n-grid>
                <n-gi :span="8">
                    <h2>Xiamen Gongan<br /> Traffic Management Bureau</h2>
                    <n-flex vertical :size="4">
                        <div>
                            <n-text :depth="3">
                                Telephone: +86 592 586 6010
                            </n-text>
                        </div>
                        <div>
                            <n-text :depth="3">
                                Address: No.8, Lianqian Residential District Lianqian West Road, Xiamen,
                                Fujian
                            </n-text>
                        </div>
                    </n-flex>
                </n-gi>
                <n-gi :span="14" :offset="2">
                    <h2>Investment for Traffic Data Access</h2>
                    <p>In order to provide real-time and accurate traffic light data, one crucial requirement is access
                        to traffic network data interfaces. Without this data, the app’s functionality will be limited
                        to manually recording pedestrian light cycles. This would involve going to the traffic lights
                        every day to record the pedestrian signals and then using algorithms to predict the light cycle.
                        However, due to time and resource constraints, I would only be able to manually track the
                        pedestrian signals at the traffic lights near my home.</p>
                    <p>With an investment to gain access to a traffic data API or a similar data source, the scope of
                        the app would expand significantly. By acquiring data for all the traffic lights in Xiamen, the
                        app would be able to provide more accurate and comprehensive predictions for users citywide.
                        This would allow us to scale the app’s functionality and reach a much broader audience, offering
                        the convenience of real-time updates across the entire city.</p>
                    <h2>Collaboration with Xiamen Traffic Bureau</h2>
                    <p>The next step towards making this project a reality involves a collaborative effort with the
                        Xiamen Traffic Bureau. The app's unique way of spreading its usage — by users scanning QR codes
                        placed on pedestrian traffic lights — requires official approval and cooperation from the local
                        government. This approach will make the app accessible to a wider range of users and ensure that
                        the data collection process is integrated seamlessly with the traffic network.</p>
                    <p>To facilitate this, I would need support from my parents to approach the Xiamen Traffic Bureau
                        and initiate discussions regarding a potential collaboration. By working closely with the
                        Traffic Bureau, we can gain the necessary permissions to place QR codes on traffic lights
                        throughout the city and discuss the possibility of acquiring access to traffic data through
                        their systems. This partnership would also help ensure that the app operates in a compliant and
                        effective manner, benefiting both users and the city's traffic management system.</p>
                </n-gi>
            </n-grid>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .slogan {
        font-size: 96px;
        line-height: 86px;
        letter-spacing: -0.075em;
        word-spacing: 0.1em;
        margin-bottom: 42px;
    }
}
</style>