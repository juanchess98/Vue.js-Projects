const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            details: ['50% Cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},

            ],
            sizes: ['small', 'medium', 'large']
        }
    }
})

