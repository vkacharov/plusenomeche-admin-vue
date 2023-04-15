<script>
import AllocationsList from '../components/AllocationsList.vue'

export default {
  components: { AllocationsList }
}
</script>

<template>
  <div class="main-content">
    <Suspense>
      <template #default>
        <AllocationsList />
      </template>
      <template #fallback>
        <div class="loading">
          Зареждане ...
        </div>
      </template>      
    </Suspense>
  </div>
</template>