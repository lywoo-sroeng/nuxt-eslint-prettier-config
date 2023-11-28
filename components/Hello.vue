<script lang="ts">
const defaultValues = {
  name: '',
  age: 1,
}
</script>

<script lang="ts" setup>
type Props = {
  name: string
  age?: number
}

const defaultValues1 = {
  name: 'unknown',
  age: 0,
}

const props = withDefaults(defineProps<Props>(), defaultValues)
</script>

<template>
  <div>
    {{ props }}
    <br />
    {{ defaultValues1 }}
  </div>
</template>

<style scoped></style>
