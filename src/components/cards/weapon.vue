<template>
    <a-card
        style="width: 400px"
        :style="getWeaponRate === 5 ? 'background: rgba(220, 187, 165, .5)' : 'background: rgba(255, 255, 255, .3)'"
    >
        <a-row>
            <a-col>
                <img
                    style="width: 75px"
                    :src="getWeaponImg"
                    :alt="getWeaponName"
                >
            </a-col>
            <a-col
                :style="{ marginLeft: '16px' }"
            >
                <a-row
                    :style="{ fontSize: '24px', color: '#fff' }"
                >
                    <span>{{ getWeaponName }}</span>
                </a-row>
                <a-row>
                    <a-rate :value="getWeaponRate" disabled />
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
    props: ["weapon"],
    setup(props) {
        const Weapon = props;
        const getWeaponName = computed(() => Weapon).value.weapon.name;
        const getWeaponImg = computed(() => Weapon).value.weapon.IMGname;
        const getWeaponRate = computed(() => Weapon).value.weapon.stars;

        return {
            getWeaponName,
            getWeaponImg: require(`../../assets/images/weaponsAvatar/${getWeaponImg}.png`),
            getWeaponRate,
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
.ant-rate-star-first, .ant-rate-star-second {
    color: rgba($color: #000000, $alpha: 0);
}
</style>