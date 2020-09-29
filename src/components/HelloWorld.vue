<template>
    <div>
        <div class="board-column-header">
            {{ headerText }}
        </div>
        <draggable :list="list"  v-bind="$attrs" class="board-column-content" :set-data="setData">
            <div v-for="(element, index) in list" :key="index" class="board-item">
                {{ element.name }}
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    components: {
        draggable
    },
    props:{
        headerText: {
            type: String,
            default: 'Header'
        },
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        setData(dataTransfer) {
            dataTransfer.setData('Text', '')
        }
    },
};
</script>

<style>
.board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.board-column-content .board-item {
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 64px;
    margin: 5px 0;
    background-color: #fff;
    line-height: 54px;
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
}
</style>