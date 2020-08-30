<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <div class="content">
            <ul>
              <li>
                <KishuIzonMoji />
              </li>
              <li>
                <Netabare />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KishuIzonMoji from '@/components/TitleNotifications/KishuIzonMoji'
import Netabare from '@/components/TitleNotifications/Netabare'

export default {
  components: {
    KishuIzonMoji,
    Netabare,
  },
}
</script>

<style scoped>
.columns {
  margin: 1px;
}

.column {
  padding: 1px;
}
</style>
