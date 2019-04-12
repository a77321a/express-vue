<template>
    <div>
        111
    </div>
</template>

<script>
import {getUser} from './api'
export default {
    name:"index",
    data(){
        return{
            userName:'',
            userId:''
        }
    },
    created(){
        this.getUser()
    },
    methods:{
        getUser(){
            getUser().then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
