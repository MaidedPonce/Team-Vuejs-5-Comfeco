<template>
    <div class="list"> 
        <ul>
            <button v-for="tab in tabs" :key="tab">
                <a :class="{ active: tab === selected }" @click="setTab(tab)">{{ tab }}</a>
            </button>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Submenu',
    props: {
        tabs: {
            type: Array,
            required: true,
        },
        selected: {
            type: String,
            required: true
        }
    },
    methods: {
        setTab(tab) {
            this.$emit('selected', tab)
        }
    }
}
</script>

<style>
</style>