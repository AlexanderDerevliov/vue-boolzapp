
const {createApp} = Vue 

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Fabio Foresti',
                    avatar: ' ./img/avatar_1.jpg',
                    visible: true,
                    messages: [ 
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai fatto la valutazione?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Come è andata?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto! Questo mese si fattura',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Sasera lavoro e tu?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Io sono libero, buon lavoro allora',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Marco lavoro',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Domani a che ora?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Solita ora, a domani',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'A domani!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Kevin',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Zio Giovanni',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Ilaria ',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao amore, come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Bene amore e tu?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Anche io ma mi manchi molto',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:53:00',
                            message: 'Anche tu mi manchi',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Simone',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Zia che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContact: 0,
            newMessage: '',
            reply: {message: 'Ciaoo!!',
                    status: 'received'
                   },
            search: ''
        }
    },
    methods: {
        addNewMessage(newMessage){
            if(newMessage === ''){

                return false

            }
            this.newMessage = {message: newMessage,
                               status: 'sent'}

            this.contacts[this.activeContact].messages.push(this.newMessage)
            
            setTimeout(this.giveReply, 1500)
            
            this.newMessage = ''     
        },
        giveReply(){
            this.contacts[this.activeContact].messages.push(this.reply)
        }
    },
    computed: {
        filteredResult(){
           return this.contacts.filter(contact =>{
           return contact.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
           }) 
        }
    }
}).mount('#app')