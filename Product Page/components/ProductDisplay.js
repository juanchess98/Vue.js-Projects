app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
            /* Prop Validation*/
        }

    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image" >
            <img :class="{'out-of-stock-img': !inStock}" v-bind:src="image"  alt=""> 
        </div>
        <div class="product-info">  
            <h1>{{ title }}</h1>
            <p v-if="inStock > 10">In Stock</p>
            <p v-else-if="inStock <=  10 && inStock > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <p> Shipping: {{ shipping }}
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" 
                
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
        </div>      
            <button class="button" :class= "{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
            <button class="button" v-on:click="removeFromCart">Remove from Cart</button>
        </div>
    </div>
    <review-list  v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted='addReview'></review-form>
    
</div>`,
data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0, 
        details: ['50% Cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50},
            { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity:5},

        ],
        reviews : []
    }
},
methods: {
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        this.variants[this.selectedVariant].quantity -= 1 
    },
    updateVariant(index){
        this.selectedVariant = index
    
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        this.variants[this.selectedVariant].quantity += 1

    },
    addReview(review) {
        this.reviews.push(review)
        console.log(this.reviews);
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }

}
})