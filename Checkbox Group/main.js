const app =  Vue.createApp({
    data() {
        return {
            elements: [
                {type: 'bounding-box', color: 'green', quantity: 5}, 
                {type: 'bounding-box', color: 'orange', quantity: 30},
                {type: 'bounding-box', color: 'violet', quantity: 5},
                {type: 'box-corners', color: 'green', quantity: 5},
                {type: 'box-corners', color: 'orange', quantity: 5},
                {type: 'box-corners', color: 'violet', quantity: 5},
                {type: 'persons', color: 'green', quantity: 5},
                {type: 'persons', color: 'orange', quantity: 5},
                {type: 'persons', color: 'violet', quantity: 5}],
            test1: true
        }
        }
        
})  