

const list_test = [
    {type: 'bounding-box', color: 'green', quantity: 5}, 
    {type: 'bounding-box', color: 'orange', quantity: 30},
    {type: 'bounding-box', color: 'violet', quantity: 5},
    {type: 'box-corners', color: 'green', quantity: 5},
    {type: 'box-corners', color: 'orange', quantity: 5},
    {type: 'box-corners', color: 'violet', quantity: 5},
    {type: 'persons', color: 'green', quantity: 5},
    {type: 'persons', color: 'orange', quantity: 5},
    {type: 'persons', color: 'violet', quantity: 5},
]
const elementsToDisplay = []

function showElement(type, elements) {
    /*console.log(elements.filter(element => element.type === type));*/
    return elements.filter(element => element.type === type)

}
function alertEmit(elementsToDisplay, id, elements){

            elementsToDisplay.push(showElement(id, elements))
            /*console.log(showElement(id, elements))
            console.log(elementsToDisplay);*/
            return elementsToDisplay
        }

alertEmit(elementsToDisplay, 'bounding-box', list_test)


