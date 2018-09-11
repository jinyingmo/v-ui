<template>
    <button :class="btn_classes" :disabled="disabled" @click="handleClick">
        <i :class="icons" v-if="loading || icon != ''"></i>
        <span class="btn-text" v-if="!loading"><slot></slot></span>
        <span class="btn-text" v-if="loading">loading...</span>
    </button>
</template>
<script>
    import {isType, isSize, isIcon} from '../utils/utils'
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
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
                validator: function (value) {
                    return isIcon(value)
                },
                default: ''
            },
            size: {
                validator: function (value) {
                    return isSize(value)
                },
                default: 'medium'
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick: function(e) {
                if(this.loading){
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.$emit('click', event)
            }
        },
        computed: {
            btn_classes() {
                return [
                    `btn`,
                    `btn-${this.type}`,
                    `btn-${this.size}`
                ];
            },
            icons() {
                return [
                    `btn-icon`,
                    this.loading?'btn-icon-loading':`btn-icon-${this.icon}`
                ];
            }
        }
    }
</script>

<style lang="less">
    @import "../style/button.less";
</style>