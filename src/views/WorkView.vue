<template>
    <div>
        <h1>Work</h1>
        <WorkList
            msg="work list msg ..."
            :parent="testFn"
        /> <!-- : v-bind 약식 -->
    </div>
</template>

<script>
import WorkList from '@/components/WorkList.vue';

export default {
    methods:{
        testFn(num){
            console.log(num)
        }
    },  
    components: {
        WorkList
    }
}
</script>

<style lang="scss" scoped></style>