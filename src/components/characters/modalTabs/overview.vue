<template>
    <a-row :gutter="[24,8]">
        <a-col
            :span="8"
            :style="{ display: 'flex', justifyContent: 'center' }"
        >
            <img
                :src="getAvatarPath(charName)"
                :alt="charName"
                class="charImgFullHeight"
            >
        </a-col>
        <a-col :span="16">
            <a-divider>Общая информация</a-divider>
            <a-row type="flex" align="top" :gutter="[24,8]">
                <a-col :span="5">
                    <a-row><span>Имя:</span></a-row>
                    <a-row><span>День рождения:</span></a-row>
                    <a-row><span>Элемент:</span></a-row>
                    <a-row><span>Оружие:</span></a-row>
                    <a-row><span>Описание:</span></a-row>
                </a-col>
                <a-col :span="19">
                    <a-row><span>{{ overviewInfo.name }}</span></a-row>
                    <a-row><span>{{ overviewInfo.birthday }}</span></a-row>
                    <a-row><span>{{ overviewInfo.element }}</span></a-row>
                    <a-row><span>{{ overviewInfo.weapon }}</span></a-row>
                    <a-row><span class="overviewInfoDesc">{{ overviewInfo.desc }}</span></a-row>
                </a-col>
            </a-row>
            <a-divider />
            <a-row type="flex" align="bottom">
                <span class="descAbout">
                    {{ overviewInfo.descAbout }}
                </span>
            </a-row>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { useStore } from "vuex";

import {
    computed,
    watch,
    defineComponent
} from 'vue';

export default defineComponent({
    setup() {
        const store = useStore();
        const selectedChar = computed(() => store.state.Modal.selectedChar);
        const charName = computed(() => selectedChar.value.name);
        const overviewInfo = computed(() => selectedChar.value.aboutCharTabs.overview);
        
        function getAvatarPath(charName: string) {
            if (charName) return require(`../../../assets/images/charsFullHeight/${charName}.png`)
            else return
        }
        function getElementPath(charElement: string) {
            if (charElement) return require(`../../../assets/images/elements/${charElement}.png`)
            else return
        }

        watch(selectedChar, (count, prevCount) => {
            getAvatarPath(selectedChar.value.name);
            getElementPath(selectedChar.value.element);
        })

        return {
            selectedChar,
            charName,
            overviewInfo,
            getAvatarPath,
            getElementPath,
        }

    }
});
</script>

<style lang="scss" scoped>
    .charImgFullHeight {
        height: calc(67vh);
    }
    .overviewInfoDesc {
        white-space: pre-wrap;
    }
    .descAbout {
        color: rgba($color: #000000, $alpha: .3);
    }
</style>