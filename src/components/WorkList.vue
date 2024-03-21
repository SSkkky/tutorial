<template>
    <div>
        <h2>📖 work list 📖</h2>
        <p>{{ msg }}</p>
    </div>

    <button @click="$emit('parent', 1000)">부모함수실행!</button>
    <!-- 부모의 parent 속성을 잡을 수 있음, 인자값 -->
</template>

<script>
export default {
    props:{
        msg : String,
        parent : Function
    }
}
</script>

<style lang="scss" scoped></style>