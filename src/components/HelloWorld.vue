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
    text-align: center;
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 34px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
}
.board-column-header {
    text-align: center;
    padding: 5px 0;
}
.board-column-content .board-item {
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 34px;
    font-size: 12px;
    margin: 5px 0;
    background-color: #fff;
    line-height: 34px;
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
}
</style>