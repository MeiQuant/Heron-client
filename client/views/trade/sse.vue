<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="level">
            <p class="level-left title is-4 is-marginless">行情</p>
            <exchangeTabs></exchangeTabs>
          </div>

          <options exchange="SSE"></options>
        </div>
      </div>
    </div>

    <trade></trade>

  </div>
</template>

<script>
import { Trade, ExchangeTabs, Options } from 'components/trade'

export default {

  components: {
    Trade,
    ExchangeTabs,
    Options
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
