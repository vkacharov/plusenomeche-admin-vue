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
        <label>Брой: </label><span>{{aggregates.numberOfDonations}}</span>
      </li>
      <li>
        <label>Обща сума: </label><span> {{aggregates.donatedAmountSum}} </span>
      </li>
    </ul>
  </div>
</template>