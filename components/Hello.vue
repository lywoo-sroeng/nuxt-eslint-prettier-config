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

function fn1() {
  //
  fn2('')
}

const fn2 = (name: string) => {
  //
}

fn1()
</script>

<template>
  <div class="mx-2 flex bg-pink-50 px-7 text-pink-500">
    {{ props }}
    <br />
    {{ defaultValues1 }}
  </div>
</template>

<style scoped></style>
