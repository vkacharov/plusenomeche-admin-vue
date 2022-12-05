<script>
import CausesList from '../components/CausesList.vue'

export default {
  components: { CausesList }
}
</script>

<template>
  <div class="main-content">
    <Suspense>
      <template #default>
        <CausesList />
      </template>
      <template #fallback>
        <div class="loading">
          Зареждане ...
        </div>
      </template>      
    </Suspense>
  </div>
</template>