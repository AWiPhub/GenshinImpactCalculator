<template>
    <a-row :gutter="[24,8]">
        <a-col
            :span="10"
            :style="{ display: 'flex', justifyContent: 'center' }"
        >
            <img
                :src="getWeaponPath(weaponNameImg)"
                :alt="weaponNameImg"
                class="charImgFullHeight"
            >
        </a-col>
        <a-col :span="14">
            <a-divider>Общая информация</a-divider>
            <a-row type="flex" align="top" :gutter="[24,8]">
                <a-col :span="4">
                    <a-row><span>Имя:</span></a-row>
                    <a-row><span>Тип:</span></a-row>
                    <a-row><span>Описание:</span></a-row>
                </a-col>
                <a-col :span="20">
                    <a-row><span>{{ overviewInfo.name }}</span></a-row>
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
        const selectedWeapon = computed(() => store.state.Modal.selectedWeapon);
        const weaponNameImg = computed(() => selectedWeapon.value.IMGname);
        const overviewInfo = computed(() => selectedWeapon.value.aboutCharTabs.overview);
        
        function getWeaponPath(weaponNameImg: string) {
            if (weaponNameImg) return require(`../../../assets/images/weaponsFull/${weaponNameImg}.png`)
            else return
        }

        watch(selectedWeapon, (count, prevCount) => {
            getWeaponPath(selectedWeapon.value.IMGname);
        })

        return {
            selectedWeapon,
            weaponNameImg,
            overviewInfo,
            getWeaponPath,
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