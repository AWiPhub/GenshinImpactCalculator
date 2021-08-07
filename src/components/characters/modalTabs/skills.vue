<template>
    <a-descriptions layout="vertical" bordered>
        <a-descriptions-item
            v-for="(skill, index) in skills"
            :key="skill[index]"
        >
            <template #label>
                <a-row type="flex" justify="center">
                    <img
                        :src="getSkillImg(charName, skill.icon)"
                        :alt="skill.name"
                        :style="{ marginBottom: '10px' }"
                    >
                </a-row>
                <a-row type="flex" justify="center">
                    <span :style="{ textAlign: 'center' }">{{ skill.name }}</span>
                </a-row>
                <a-row type="flex" justify="center">
                    <span :style="{ color: 'rgba(0, 0, 0, .4)', textAlign: 'center' }">{{ skill.type }}</span>
                </a-row>
            </template>
            <template v-if="skill.icon == 1">
                <a-row><span><b>Обычная атака:</b> {{ skill.defaultAttack }}</span></a-row><br>
                <a-row><span><b>Заряженная атака:</b> {{ skill.chargedAttack }}</span></a-row><br>
                <a-row><span><b>Атака в падении:</b> {{ skill.fallAttack }}</span></a-row>
            </template>
            <template v-else>
                <a-row v-if="skill.desc"><span>{{ skill.desc }}</span></a-row>
                <br v-if="skill.desc && skill.options">
                <a-row v-if="skill.options">
                    <span>{{ skill.options.name }}</span>
                    <span
                        v-for="(item, index) in skill.options.items"
                        :key="index"
                    >
                        <ul>
                            <li>{{ item }}</li>
                        </ul>
                    </span>
                </a-row>
            </template>
        </a-descriptions-item>
    </a-descriptions>
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
        const skills = computed(() => selectedChar.value.aboutCharTabs.skills);
        
        function getSkillImg(charName: string, icon: string) {
            if (icon) return require(`../../../assets/images/skills/${charName}/${icon}.png`)
            else return
        }

        watch(selectedChar, (count, prevCount) => {
            getSkillImg(charName.value, skills.value.icon);
        })
        
        return {
            skills,
            charName,
            getSkillImg
        }

    }
});
</script>

<style lang="scss">
ul {
    margin-top: 5px;
    padding-left: 25px;
    margin-bottom: 2px;
}
.ant-descriptions-item-label {
    width: 33.33%
}
.ant-descriptions-item-content {
    vertical-align: top;
}
</style>