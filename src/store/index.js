import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function readCartsFromStorage(){
    var carStr = localStorage.getItem("carts-info");
    if(carStr == null || carStr.trim()==""){
        return []
    }else{
        return JSON.parse(carStr)
    }
    // return carStr
}

function WriteCartsToStorage(carts){
    localStorage.setItem("carts-info",JSON.stringify(carts));
}

export default new Vuex.Store({
    state:{
        // carts是一个数组，通过调用函数读取
        carts:readCartsFromStorage()
        
    },
    getters:{
        totalCount:state=>{
            var result  = 0;
            state.carts.forEach(v=>{
                result += v.count;
            })
            return result
        },
        getIds:state=>{
            return state.carts.map(v=>v.id).join(",")
        },
        getCountById:state=>id=>{
            var temp = state.carts.find(v=>v.id==id);
            return temp.count;
        }
    },
    mutations :{
        addToCarts(state,cart){
            console.log(state.carts)
            let temp = state.carts.find(v=>{
                return v.id == cart.id;
            })
            if(temp){
                temp.count += cart.count
            }else{
                state.carts.push(cart);
            }
            WriteCartsToStorage(state.carts);
        },
        updateCarts(state,cartList){
            cartList.forEach(v=>{
                let cart  = state.carts.find(e=>{
                    return e.id == v.id;
                })
                cart.count = v.count
            })
            WriteCartsToStorage(state.cartes);
        }
    },
   

})