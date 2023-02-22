const { createApp } = Vue

createApp({
    data() {
        return {

            // HEADER LINKS ARRAY

            head_links: ['Home', 'Who we are', 'What we do', 'Where we Work', 'Careers', 'News'],

            // FOOTER LINKS ARRAY

            bot_links: ['Home', 'Who we are', 'What we do', 'Where we work', 'Careers', 'Get in touch now'],

            // SLIDER ARRAY

            slides: [
                {
                    image: "images/testimonials-2.jpg",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit repellendus sed qui nesciunt incidunt?",
                    name: "Luis Desalvo, CREO Tech"
                },

                {
                    image: "images/testimonials-1.jpg",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quae tempore laboriosam aliquam voluptas.",
                    name: "Anna Cunnigham, ARMACHAM TECHNOLOGY"
                }
            ],

            activeSlide: 0,
        }
    },

    methods: {

        // BACK TO TOP FUNCTION

        back_to_top() {
            document.documentElement.scrollTop = 0;
        },

        // SLIDER CONTROLS

        next() {
            if (this.activeSlide + 1 < this.slides.length) {
                this.activeSlide++;
            } else {
                this.activeSlide = 0;
            }
        },

        previous() {
            if (this.activeSlide - 1 >= 0) {
                this.activeSlide--;
            } else {
                this.activeSlide = this.slides.length - 1;
            }
        },
    }
}).mount('#app')