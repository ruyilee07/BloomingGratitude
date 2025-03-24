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
            <div class="slogan"><b>Development<br /> History</b></div>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 15, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Building a Single-Page Vue Application</h2>
                    <p>I used Vue Router to build a single-page application (SPA) that serves as a promotional platform
                        for my app. The SPA includes five key pages: Home, Mission, Development History, About, and a
                        special "Public Support" page. This setup allows users to easily navigate between sections
                        without reloading the entire page, offering a smooth user experience.</p>
                    <p>The "Home" page serves as an introduction to the app, while the "Mission" page outlines the app's
                        goals and the problem it aims to solve. The "Development History" page provides a detailed
                        account of the app's creation, and the "About" page offers information about me and my work. The
                        "Public Support" page is dedicated to seeking the support of the Xiamen Traffic Bureau. This
                        page highlights my plan to place QR codes on traffic lights, which users can scan to access the
                        app—this will be the app’s primary promotional method. However, before proceeding, I need to
                        secure the approval of the traffic bureau to implement this idea.</p>
                    <p>By using Vue Router, I was able to organize the application’s pages efficiently, providing users
                        with an intuitive navigation experience.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 10, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Completing the Interface Design</h2>
                    <p>I used the HTML, CSS, and JavaScript skills I had learned to complete the basic interface for my
                        app. However, I encountered several technical challenges along the way.</p>
                    <h3>Challenge 1</h3>
                    <p>One issue I faced was choosing the right font for the countdown digits. After searching online, I
                        found the "digital-7" font, which matched the style of the countdown timer on real traffic
                        lights. However, I noticed that the number "1" had a different width compared to the other
                        digits, which made the display look inconsistent. After some more searching, I found the "E1234"
                        font, which resolved the issue and gave me a consistent look across all digits.</p>
                    <h3>Challenge 2</h3>
                    <p>Another challenge was designing the traffic light itself. Initially, I tried using containers
                        with background colors and border-radius to represent the lights, but the result didn't match my
                        expectations. In the end, I decided to use Photoshop to extract the traffic light image from a
                        photo and then applied CSS positioning to overlay the countdown numbers on the image. This
                        solution gave me the precise look I was aiming for and successfully recreated the traffic light
                        style.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 3, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Website Deployment Using GitHub Pages</h2>
                    <p>I successfully deployed my website using GitHub Pages. This process involved utilizing GitHub
                        Actions to automate the deployment pipeline, ensuring seamless updates and deployment to the
                        hosting environment. The website itself is built using Vue.js, which allows for the development
                        of reactive, modern web applications with a smooth user experience.
                    </p>
                    <p>The decision to host the website on GitHub Pages was driven by several factors:</p>
                    <ol>
                        <li>
                            <p><b>Free Hosting and Integration with GitHub</b>: GitHub Pages provides a free, reliable
                                platform
                                for hosting static websites, which is ideal for this project since it does not require a
                                complex server-side infrastructure. The integration with GitHub made it easier to manage
                                version control and the deployment process.</p>
                        </li>
                        <li>
                            <p><b>Automation with GitHub Actions</b>: GitHub Actions allowed me to automate the
                                deployment
                                process, making it efficient and error-free. With each commit to the repository, GitHub
                                Actions automatically builds and deploys the site to GitHub Pages, ensuring that the
                                website
                                is always up to date without manual intervention.</p>
                        </li>
                        <li>
                            <p><b>Vue.js Compatibility</b>: GitHub Pages is well-suited for static websites, and since
                                my
                                site is built with Vue.js, which compiles down to static assets (HTML, CSS, JavaScript),
                                it
                                fits perfectly with GitHub Pages' capabilities.</p>
                        </li>
                    </ol>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>October 27, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Conceptualizing the App</h2>
                    <p>I started reflecting on areas in my life where I could make improvements. During this reflection,
                        I noticed a persistent issue with a traffic light near my home. Specifically, the green light
                        duration for pedestrians is much shorter than the red light, and there is no clear indication of
                        how many seconds remain on the green light. This created problems for me, as I often found
                        myself unsure whether I should rush to cross when I was still some distance away from the light.
                        Additionally, the long red light durations led to a lot of wasted time, causing frustration and
                        stress.</p>
                    <h2>Planing the App</h2>
                    <p>To address this, I decided to develop an app that could help people better manage their time at
                        traffic lights by providing real-time information about the light durations. The app would be
                        easily accessible, and I wanted to keep its maintenance costs low. After considering various
                        options, I chose to develop the solution as a web app. This would allow it to be accessible from
                        any device without the need for complex installations or high maintenance overhead.</p>
                    <p>The main objective of this app would be to offer a simple and intuitive interface, helping users
                        know when it’s safe to cross and how long they might have to wait, reducing unnecessary
                        frustration and improving the overall experience.</p>
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