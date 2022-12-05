<script>
    export default {
        props: {
            aggregates: {
                type: Object,
                default: () => {}
            }
        },
    }
</script>

<template>
  <div class="aggregates">
    <ul>
      <li>
        <label>Общ брой: </label><span>{{aggregates.totalNumber}}</span>
      </li>
      <li>
        <label>Обща сума: </label><span> {{aggregates.totalSum}} </span>
      </li>
    </ul>
  </div>
</template>

<style>
    .aggregates ul {
    list-style: none;
    }
</style>