<script setup>
import { ref } from 'vue';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <div style="margin-bottom: 48px">
            <div class="slogan"><b>Development<br /> History</b></div>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>March 28, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Final Touches and App Launch</h2>
                    <p>I reached a milestone where the codebase was ready for release, and the only missing piece was
                        the App Icon. Initially, I planned to have a friend with an art background design the icon, but
                        due to his unavailability, I turned to AI to generate a prototype based on my ideas.</p>
                    <n-image style="border-radius: 12px;" :width="72"
                        src="./BloomingGratitude/development/AppIconPrototype.jpg"></n-image>
                    <p>Unsatisfied
                        with the simplicity of the AI version, I then took matters into my own hands and crafted an icon
                        using Sketch.</p>
                    <n-image style="border-radius: 12px;" :width="72"
                        src="./BloomingGratitude/logo/apple-touch-icon.png"></n-image>
                    <p>With the final touches complete, I successfully released App Version 1.0 on the Apple App Store
                        through App Store Connect. For this initial launch, I hosted the app under my tutoring
                        institution's account, which is already enrolled in the Apple Developer Program—saving me the
                        $99 annual fee for now. In the future, when I start earning independently, I plan to migrate the
                        app to my own Apple Developer account.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>March 9, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Finalizing User Onboarding and Confronting AI Limitations</h2>
                    <p>Today, I completed the user registration and login interface along with the onboarding screens,
                        and I refined the database storage for these features. With these updates, the project is
                        entering its final stages—only the user details page and a few style optimizations remain.</p>
                    <h3>Challenge 1</h3>
                    <p>I encountered a couple of challenges due to the inherent limitations of the AI. One
                        major issue is that the AI-generated images cannot have a transparent background. Even when the
                        image meets the desired specifications, it is still a 1024 x 1024 square with a background. This
                        limitation prevents users from freely dragging and placing the images on the My Garden page.
                        Instead, I have organized them into a neat list that resembles a card layout.</p>
                    <h3>Challenge 2</h3>
                    <p>Another challenge is the inconsistency of the AI in integrating the user's gratitude text into
                        the generated image. Despite continuous refinements in prompt engineering, the AI often
                        disregards the instruction to combine the gratitude content with the plant design, leading to
                        outputs that do not align with Blooming Gratitude’s core concept. As a result, I made the
                        decision to remove that part of the prompt, ensuring that the AI consistently generates
                        plant-centric images. Although these compromises deviate from the original vision, they help
                        maintain a coherent design language throughout the app.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>March 2, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Fully Integrating AI Image Generation into the App</h2>
                    <p>I completed the integration of the OpenAI image generation feature within the app. I
                        implemented the first version of prompt engineering, which clearly specifies the desired image
                        style while leaving several customizable slots for user selections on the front-end. This
                        approach ensures that each prompt is tailored to produce a unique plant image based on the
                        user's gratitude entry.</p>
                    <p>Additionally, I used Swift’s URLSession to send requests to the AWS-hosted backend. The backend
                        interacts with the OpenAI API, retrieves the generated image, and sends the image URL back to
                        the app. I then stored these image links locally, effectively embedding the AI functionality
                        into Blooming Gratitude. With this milestone, the core AI image generation feature is now fully
                        operational within the app.</p>
                    <p>Moving forward, the remaining challenge is to establish user authentication. I need to determine
                        the most suitable login method and implement it to complete the user experience.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>February 23, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Integrating AI and Cloud Storage for Enhanced Image Generation</h2>
                    <p>I deepened my understanding of the OpenAI API integration. The OpenAI developer
                        documentation provided examples primarily for Python and NodeJS. Given my stronger background in
                        front-end JavaScript, I opted for NodeJS. I rented a cloud server on AWS and deployed a NodeJS
                        application to handle requests to OpenAI and receive the responses. Since OpenAI returns an
                        ephemeral URL for each generated image, I incorporated Tencent Cloud COS for persistent
                        storage—downloading and saving the images immediately upon receiving them.</p>
                    <p>I implemented the image generation using the DALL·E 2 (3) model. However, I've noticed that the
                        output quality can be inconsistent; sometimes the generated images meet my expectations, while
                        other times they diverge significantly from the desired style. To address this, I'm working on
                        refining my prompt engineering. My current strategy mandates that each prompt includes the
                        chosen image style(s) (with multi-select options), the content of the User Plant, and clear
                        instructions for the model to combine these elements to generate a unique plant image.</p>
                    <p>Additionally, my next challenge is integrating the API deployed on AWS into my iOS app. This will
                        allow seamless communication between the app and the backend service that handles AI image
                        generation and cloud storage. Overall, this milestone has been pivotal in ensuring the app’s
                        ability to transform gratitude entries into visually appealing, uniquely generated plant images,
                        moving Blooming Gratitude closer to a fully realized, interactive experience.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>February 9, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Advancing Functionality and User Onboarding</h2>
                    <p>Continuing with the design prototypes, I completed several key pages for Blooming Gratitude. This
                        milestone included developing the onboarding screen for first-time users, ensuring that new
                        users receive a clear and welcoming introduction to the app. I also implemented local data
                        storage using AppStorage to save each gratitude entry, along with two transitional pages that
                        enhance the overall flow.
                    </p>
                    <n-flex>
                        <n-image :width="120" src="./BloomingGratitude/development/history-1.webp" />
                        <n-image :width="120" src="./BloomingGratitude/development/history-2.webp" />
                        <n-image :width="120" src="./BloomingGratitude/development/history-3.webp" />
                        <n-image :width="120" src="./BloomingGratitude/development/history-4.webp" />
                        <n-image :width="120" src="./BloomingGratitude/development/history-5.webp" />
                    </n-flex>
                    <p>Looking forward, my next step is to integrate OpenAI’s image generation API. This will refine the
                        process by which each gratitude entry transforms into a unique, AI-generated plant image,
                        further enriching the user experience and bringing the app's creative vision to life.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>February 6, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Mastering iOS App Development Fundamentals</h2>
                    <p>Up to today, I have dedicated myself to learning and mastering all the necessary steps for
                        developing and launching an iOS app, while becoming proficient with every essential tool. This
                        process has given me a robust understanding of the entire development lifecycle, from project
                        setup to app deployment.</p>
                    <p>I successfully initialized the project in Xcode and implemented the basic functionality of the
                        bottom button on the Blooming Gratitude homepage. These early achievements have laid a strong
                        foundation for the app’s navigation and interaction design, ensuring a smooth and engaging user
                        experience.</p>
                    <p>Looking ahead, I plan to enrich the daily gratitude content and complete the onboarding process
                        for first-time users. This next phase will further enhance Blooming Gratitude, making it not
                        only a tool for reflection but also an inviting space that guides users into a meaningful and
                        creative journey every day.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>January 21, 2025</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Laying the Foundation for Blooming Gratitude</h2>
                    <p>On this day, the core vision for Blooming Gratitude took shape. I finalized the concept of
                        transforming daily expressions of gratitude into AI-generated plant images. Users would be able
                        to choose the plant type, color, and style, and then place these unique creations freely on the
                        home screen.
                    </p>
                    <p>Along with the visual design and functionality layout, I also defined the user flow: from
                        launching the app and planting the very first gratitude entry, to returning to the home screen
                        and building a personalized digital garden. This milestone marked the beginning of Blooming
                        Gratitude’s journey toward inspiring positivity and creativity every day.</p>
                </n-gi>
            </n-grid>
        </div>
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