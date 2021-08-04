<template>
    <a-card
        style="width: 330px"
        :style="getCharRate === 5 ? 'background: rgba(220, 187, 165, .5)' : 'background: rgba(255, 255, 255, .3)'"
    >
        <img
            class="element"
            :src="getElementPath"
            :alt="getCharElement"
        >
        <a-row>
            <a-col>
                <img
                    style="width: 75px"
                    :src="getAvatarPath"
                    :alt="getCharName"
                >
            </a-col>
            <a-col
                :style="{ marginLeft: '16px' }"
            >
                <a-row
                    :style="{ fontSize: '24px', color: '#fff' }"
                >
                    <span>{{ getCharName }}</span>
                </a-row>
                <a-row>
                    <a-rate :value="getCharRate" disabled />
                </a-row>
            </a-col>
        </a-row>
    </a-card>
</template>
<script lang="ts">
import {
    defineComponent,
    computed,
} from "vue";

export default defineComponent({
    props: ["char"],
    setup(props) {
        const character = props;
        const getCharName = computed(() => character).value.char.name;
        const getCharElement = computed(() => character).value.char.element;
        const getCharRate = computed(() => character).value.char.stars;

        return {
            getCharName,
            getAvatarPath: require(`../../assets/images/charsAvatars/${getCharName}.png`),
            getElementPath: require(`../../assets/images/elements/${getCharElement}.png`),
            getCharRate,
        }
    }
})
</script>

<style lang="scss">
.ant-card {
    cursor: pointer !important;
    margin: 10px;
}
.ant-card-body {
    padding: 16px;
    transition: all .2s;
    &:hover {
        background: rgba(255, 255, 255, .05)
    }
}
.ant-rate-star:not(:last-child) {
    margin-right: 0px;
}
.ant-rate {
    font-size: 36px;
    line-height: 30px;
}
.ant-rate-star:hover {
    cursor: pointer !important;
}
.element {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 8px;
    top: 16px;
}
.ant-rate-star-first, .ant-rate-star-second {
    color: rgba($color: #000000, $alpha: 0);
}
</style>