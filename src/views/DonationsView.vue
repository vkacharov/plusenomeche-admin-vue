<script>
import DonationsList from '../components/DonationsList.vue'

export default {
  components: { DonationsList }
}
</script>

<template>
  <div class="main-content">
    <Suspense>
      <template #default>
        <DonationsList />
      </template>
      <template #fallback>
        <div class="loading">
          Зареждане ...
        </div>
      </template>      
    </Suspense>
  </div>
</template>