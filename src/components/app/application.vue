<script setup>
import { ref, watch } from 'vue'
import axios from "axios";
import { useThemeVars } from "naive-ui";
import { changeColor } from 'seemly'

const themeVars = useThemeVars();

const light = ref(false);

const lightColor = ref("#ff0000")

const percentage = ref(100);

const duration = ref(35000);

const countdownRef = ref(null);

const countdownVal = ref([0, 100]);

const renderCountdown = ({
    hours,
    minutes,
    seconds
}) => {
    return `${String(seconds).padStart(2, "0")}`;
};

watch(light, newVal => {
    if (newVal) {
        lightColor.value = "#04ff00";
    } else {
        lightColor.value = "#ff0000";
    }
})

function handleFinish() {
    duration.value = 10000;
    light.value = !light.value
    countdownRef.value?.reset()
}

// function readJSON(path) {
//     return axios('tutorial/app/light.json' + path + '.json')
// }
</script>

<template>
    <div>
        <div class="container">
            <n-flex :align="'center'">
                <div class="iconContainer">
                    <n-icon color="#0068EF" :size="24">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 32 32">
                            <defs></defs>
                            <path
                                d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z"
                                fill="currentColor"></path>
                            <circle id="_Inner-Path_" cx="16" cy="13" r="4" fill="none"></circle>
                        </svg>
                    </n-icon>
                </div>
                <div>
                    <div style="font-size: 18px"><b>Xiamen</b></div>
                    <div>
                        思明北路与湖滨西路汇集路口红绿灯
                    </div>
                </div>
            </n-flex>
            <n-flex class="trafficLight__container" :align="'center'" :justify="'center'">
                <div>
                    <div style="position: relative; margin-bottom: 12px">
                        <n-image preview-disabled width="280"
                            src="./tutorial/app/traffic-light-pedestrian.webp"></n-image>
                        <div :class="['countdown', !light ? 'red-glowing-text' : 'green-glowing-text']"
                            :style="{ color: lightColor }">
                            <n-countdown ref="countdownRef" :duration="duration" :render="renderCountdown"
                                @finish="handleFinish" />
                        </div>
                        <div class="icons">
                            <n-icon v-if="!light" :color="lightColor" class="standingIcon" :size="96">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512">
                                    <circle cx="256" cy="56" r="56" fill="currentColor"></circle>
                                    <path
                                        d="M304 128h-96a64.19 64.19 0 0 0-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 184 300v-99.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8V489a23 23 0 0 0 23 23a23 23 0 0 0 23-23V346.34a10.24 10.24 0 0 1 9.33-10.34A10 10 0 0 1 266 346v143a23 23 0 0 0 23 23a23 23 0 0 0 23-23V200.27a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 368 300V192a64.19 64.19 0 0 0-64-64z"
                                        fill="currentColor"></path>
                                </svg>
                            </n-icon>
                            <n-icon v-else :color="lightColor" class="walkingIcon" :size="96">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="32" fill="currentColor"></path>
                                    <path d="M127.38 291.78v-74.07s37-74.07 74.07-74.07" fill="none"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="32"></path>
                                    <path
                                        d="M368.09 291.78a18.49 18.49 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7z"
                                        fill="currentColor"></path>
                                    <circle cx="257" cy="69.56" r="37.04" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="16" fill="currentColor"></circle>
                                </svg>
                            </n-icon>
                        </div>
                    </div>
                    <div>
                        <div v-if="!light">
                            <div>
                                <div class="clickButton">
                                    戳我<br />催促
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <n-flex style="height: 280px; width: 280px;" :align="'center'">
                                <div style="width: 100%">
                                    <div>
                                        <b>{{ "100 m" }}</b>
                                    </div>
                                    <n-progress style="width: 100%" type="line" :percentage="percentage" :height="24"
                                        :border-radius="4" :fill-border-radius="0" :color="themeVars.successColor"
                                        :circle-gap="0.5"
                                        :rail-color="changeColor(themeVars.successColor, { alpha: 0.2 })"
                                        :indicator-text-color="themeVars.successColor" :show-indicator="false" />
                                    <div style="font-size: 64px"><b>请通行</b></div>
                                    <n-qr-code id="qr-code"
                                        value="https://oscarlin7.github.io/tutorial/#/application" />
                                </div>
                            </n-flex>
                        </div>
                    </div>
                </div>
            </n-flex>
        </div>
    </div>
</template>

<style lang='less' scoped>
@font-face {
    font-family: 'Digital7';
    src: url('E1234.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.container {
    padding: 48px 24px;

    .iconContainer {
        width: 32px;
        height: 32px;
        padding: 8px;
        border-radius: 8px;
        border: 2px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .trafficLight__container {
        text-align: center;
        height: calc(100vh - 52px - 48px - 48px);

        .countdown {
            position: absolute;
            top: 48px;
            left: calc(50% - 52px);
            font-size: 82px;
            font-family: "Digital7";
            letter-spacing: -24px;
        }

        .icons {
            position: absolute;
            bottom: 32px;
            left: calc(50% - 46px);
        }

        .walkingIcon {
            font-size: 50px;
            animation: blink 1s infinite;
        }

        .clickButton {
            border-radius: 50%;
            height: 256px;
            padding: 8px 16px 16px 16px;
            font-size: 64px;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            background: linear-gradient(45deg, #ff6a00, #ff0000);
            border: none;
            border-radius: 50px;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;

            &:hover {
                background: linear-gradient(45deg, #ff0000, #ff6a00);
                transform: translateY(-4px);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }

            &:active {
                transform: translateY(2px);
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            }
        }
    }
}

.red-glowing-text {
    font-weight: bold;
    color: white;
    text-align: center;
    text-shadow:
        0 0 5px #ff0000,
        0 0 10px #ff0000,
        0 0 20px #ff0000,
        0 0 40px #ff0000,
        0 0 80px #ff0000,
        0 0 90px #ff0000,
        0 0 100px #ff0000;
}

.green-glowing-text {
    font-weight: bold;
    color: white;
    text-align: center;
    text-shadow:
        0 0 5px #04ff00,
        0 0 10px #04ff00,
        0 0 20px #04ff00,
        0 0 40px #04ff00,
        0 0 80px #04ff00,
        0 0 90px #04ff00,
        0 0 100px #04ff00;
}

.standingIcon {
    filter: drop-shadow(0 0 5px #ff0000a1) drop-shadow(0 0 10px #ff0000a1) drop-shadow(0 0 20px #ff0000a1) drop-shadow(0 0 40px #ff0000a1);
}

.walkingIcon {
    filter: drop-shadow(0 0 5px #00ff00) drop-shadow(0 0 10px #00ff00) drop-shadow(0 0 20px #00ff00) drop-shadow(0 0 40px #00ff00);
}
</style>