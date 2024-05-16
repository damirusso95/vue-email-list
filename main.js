const { createApp } = Vue

createApp({
    data() {
        return {
            mails: [],
            emailN: 10,
            indirizzo: "https://flynn.boolean.careers/exercises/api/random/mail",
        }
    },

    methods: {
        getMail(){
          for(let i = 0; i < this.emailN; i++){
            axios.get(this.indirizzo)
            .then((res)=>{
              this.mails.push(res.data.response);
    
            })
    
          }
        }
      },

      mounted(){
        this.getMail()
      }
}).mount('#app')