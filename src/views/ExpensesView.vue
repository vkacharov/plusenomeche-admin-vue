<script>
import ExpensesList from '../components/ExpensesList.vue'

export default {
  components: { ExpensesList }
}
</script>

<template>
  <div class="main-content">
    <Suspense>
      <template #default>
        <ExpensesList />
      </template>
      <template #fallback>
        <div class="loading">
          Зареждане ...
        </div>
      </template>      
    </Suspense>
  </div>
</template>