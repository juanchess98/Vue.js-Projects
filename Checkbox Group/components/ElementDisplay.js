app.component('table-elements',{
    
    props: {
        listElements: {
            type: Array,
            required: false
        },
        testElement : {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            elementsToDisplay: [],
        }
    },
    template: 
    /*html*/
    `
    <div class="container">
    <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th><label for="box-corners"><i class="fa-regular fa-square-plus"></i></label><input type="checkbox" @change="alertEmit($event)"  id="box-corners"></th>
            <th><label for="persons"><i class="fa-solid fa-person"></i></label><input type="checkbox" @change="alertEmit($event)"  id="persons"></th>
            <th><label for="bounding-box"><i class="fa-solid fa-cubes"></i></label><input type="checkbox" @change="alertEmit($event)"  id="bounding-box"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in elementsToDisplay">
            <td v-if="element.type ==='bounding-box'" ><i class="fa-solid fa-cubes" :style="{color:element.color}"></i></td>
            <td v-else-if="element.type ==='box-corners'"><i class="fa-regular fa-square-plus" :style="{color:element.color}"></i></td>
            <td v-else><i class="fa-solid fa-person" :style="{color:element.color}"></i></td>
            <td>{{element.type}}</td>
            <td>{{element.quantity}}</td>
          </tr>
        </tbody>
      </table>
</div>
    `,
    methods: {
        showElement(type){
            const filteredList = this.listElements.filter(element => element.type === type)
            return filteredList
            },   
        alertEmit(el){
                if(el.target.checked){
                    console.log(el.target.id);
                    const filteredList = this.showElement(el.target.id)
                    for (let index = 0; index < filteredList.length; index++) {
                        this.elementsToDisplay.push(filteredList[index])
                    }
                }else {
                    this.removeElements(el)
                }

            },
        removeElements(el){
            const idx = []

            if(this.elementsToDisplay) {
                for (let index = 0; index < this.elementsToDisplay.length; index++) {
                    if (this.elementsToDisplay[index].type === el.target.id) {
                        idx.push(index)
                    }
                }
                for (let index = idx.length -1; index >= 0; index--) { 
                    this.elementsToDisplay.splice(idx[index], 1)
                    }
                }
            }
            

    },

    computed: {
        testComputed() {
            if (this.testElement){
                return "It works"
            }
            return 'It doenst work as well'
        }

    }
})
