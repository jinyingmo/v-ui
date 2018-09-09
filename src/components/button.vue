<template>
    <button :class="btn_classes"><slot></slot></button>
</template>
<script>
    import {isType} from '../utils/utils'
    
    export default {
        name:'button',
        data(){
            return {
                
            }
        },
        props: {
            type: {
                validator: function (value) {
                    return isType(value)
                },
                default: 'default'
            }
        },
        methods: {
           
        },
        computed: {
            btn_classes() {
                return [
                    `btn`,
                    `btn-${this.type}`
                ];
            }
        }
    }
</script>

<style lang="less">
    @import "../style/button.less";
</style>