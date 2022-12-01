<script>
import DonorsList from '../components/DonorsList.vue'

export default {
  components: { DonorsList },
}
</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <DonorsList />
      </template>
      <template #fallback>
        <div class="loading">
          Зареждане ...
        </div>
      </template>      
    </Suspense>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    align-items: center;
  }


</style>

