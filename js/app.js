const { createApp } = Vue

createApp({
    data() {
        return {

            // HEADER LINKS ARRAY

            head_links: ['Home', 'Who we are', 'What we do', 'Where we Work', 'Careers', 'News'],

            // FOOTER LINKS ARRAY

            bot_links: ['Home', 'Who we are', 'What we do', 'Where we work', 'Careers', 'Get in touch now']
        }
    },

    methods: {
        back_to_top() {
            document.documentElement.scrollTop = 0;
        }
    }
}).mount('#app')