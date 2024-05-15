const { createApp } = Vue

createApp({
    data() {
        return {
           
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            listaIndirizzi: [],
        }
    },
    methods: {
        getEmail() {
            return axios.get(this.indirizzo).then((result) => {
                return result.data.response
            })
        },
         
       
    }
   
}).mount('#app')