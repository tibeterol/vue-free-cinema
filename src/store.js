import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            user : {
                firstName : '',
                lastName : '',
                email : '',
                selectedMovie : '',
                selectedSeats : []
            }
        }
    },
    mutations : {
        chooseMovie(state,payload){
            state.user.selectedMovie = payload;
        },
        submitForm(state,payload){
            state.user.firstName = payload.firstName;
            state.user.lastName = payload.lastName;
            state.user.email = payload.email;
            state.user.selectedMovie = payload.selectedMovie;
        },
        addSelectedSeats(state,payload){
            state.user.selectedSeats.push(payload);
        },
        setSelectedSeats(state,payload){
            state.user.selectedSeats = state.user.selectedSeats.filter(s=>s!==payload);
        }
    },
    actions : {
        chooseMovie(context,payload){
            context.commit('chooseMovie',payload);
        },
        submitForm(context,payload){
            context.commit('submitForm',payload);
        },
        addSelectedSeats(context,payload){
             context.commit('addSelectedSeats',payload);
        },
        setSelectedSeats(context,payload){
            context.commit('setSelectedSeats',payload);
        }
    },
    getters : {
        chosenMovie(state){
            return state.user.selectedMovie;
        },
        seatCounter(state){
            return state.user.selectedSeats.length;
        },
        getSelectedSeats(state){
            return state.user.selectedSeats;
        }
    }

});

export default store;