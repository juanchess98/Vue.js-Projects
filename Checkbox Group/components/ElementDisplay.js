app.component('table-elements',{
    
    props: {
        listElements: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            elementsToDisplay: [],
            idSelectedElements : []
        }
    },
    template: 
    /*html*/
    `
    <div class="container">
    <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th><checkbox-icon :icon="'fa-regular fa-square-plus'" :id="'box-corners'" @change-box="updateElements"></checkbox-icon></th>
            <th><checkbox-icon :icon="'fa-solid fa-person'" :id="'persons'" @change-box="updateElements"></checkbox-icon></th>
            <th><checkbox-icon :icon="'fa-solid fa-cubes'" :id="'bounding-box'" @change-box="updateElements"></checkbox-icon></th>
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
        
        updateElements(el){

            // Use indexOf and filter 
            if(el.target.checked){
                this.idSelectedElements.push(el.target.id)
            } else {
                var idx = this.idSelectedElements.indexOf(el.target.id)
                this.idSelectedElements.splice(idx, 1)
            }
            this.elementsToDisplay = this.listElements.filter(element => this.idSelectedElements.indexOf(element.type) > -1)
        }


        /* Alternative longer way

        showElement(type){
        const filteredList = this.listElements.filter(element => element.type === type)
        return filteredList
        },
        alertEmit(el){ 
            var this.listElements
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
            var idx = []

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
            */

    }
})
