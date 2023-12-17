<template>
  <div class="border-y border-chrome">
    <div @click="toggle"
         role="button"
         tabindex="0"
         class="py-12 max-md:px-[16px] text-gray flex items-center leading-[18px]"
    >
      <BbIcon name="caret" width="12" height="12"
              class="ml-[6px] mr-[12px] transition-transform duration-100"
              :class="iconClass"
      />
      {{ title }}
    </div>
    <BbTransitionExpand>
      <div class="max-md:px-[16px]" :class="slotWrapClass" v-if="isExpanded">
        <slot></slot>
      </div>
    </BbTransitionExpand>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import BbIcon from "./BbIcon.vue";
import BbTransitionExpand from "./BbTransitionExpand.vue";

defineProps({
  title: { type: String, required: true },
})

let isExpanded = ref(false);
const toggle = () => {
  isExpanded.value = !isExpanded.value;
}

const iconClass = computed((): Record<string, boolean> => ({
  "rotate-90": isExpanded.value,
}));

const slotWrapClass = computed((): Record<string, boolean> => ({
  "pb-[12px]": isExpanded.value,
}));
</script>