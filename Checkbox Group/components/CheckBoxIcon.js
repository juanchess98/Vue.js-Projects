app.component('checkbox-icon', {
    props: {
      icon: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    emits: ["changeBox"],
    data() {
      return {
      }
    },
    template:
      /*html*/
      `<input type="checkbox" @change="emitEvent($event)"  
      :id="id"><label for="box-corners"><i :class="icon"></i></label> 
      `
    ,
    methods: {
      emitEvent(el) {
        this.$emit("changeBox", el)
      },
    },
  })