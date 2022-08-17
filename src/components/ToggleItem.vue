<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: boolean;
  checkedColor?: string;
  uncheckedColor?: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: boolean): void;
  (e: 'click', value: boolean): void;
}>();

const classes = computed(() => ({
  'toggle--checked': props.value,
  'toggle--unchecked': !props.value,
}));

const style = computed(() => ({
  backgroundColor: props.value
    ? props.checkedColor ?? '#1867c0'
    : props.uncheckedColor ?? '#a8a8a8',
}));

const onClick = () => {
  const newValue = !props.value;
  emit('update:value', newValue);
  emit('click', newValue);
};
</script>

<template>
  <div class="toggle" :class="classes" @click="onClick">
    <div class="toggle__track" :style="style" />
    <div class="toggle__thumb" :style="style" />
  </div>
</template>

<style scoped lang="scss">
.toggle {
  cursor: pointer;
  position: relative;
  width: 38px;
  height: 30px;
  display: flex;
  align-items: center;

  &--checked {
    .toggle__thumb {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      transform: translate(20px);
    }
  }

  &--unchecked {
    .toggle__thumb {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      transform: translate(0px);
    }
  }

  &__track {
    width: 36px;
    height: 14px;
    border-radius: 8px;
    opacity: 0.6;
  }

  &__thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}
</style>
