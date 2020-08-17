<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-mobile is-tablet is-desktop">
        <div class="column is-12-mobile is-12-tablet is-12-desktop">
          <div class="content">
            <ul>
              <li>
                <UpdatedInfo />
              </li>
              <li>
                <WhatIsThisSite />
              </li>
              <li>
                <Addons />
              </li>
              <li>
                <ContentsAreNotAlwaysLatest />
              </li>
              <li>
                <KishuIzonMoji />
              </li>
              <li>
                <HelpDetail />
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
import WhatIsThisSite from '@/components/TitleNotifications/WhatIsThisSite'
import ContentsAreNotAlwaysLatest from '@/components/TitleNotifications/ContentsAreNotAlwaysLatest'
import KishuIzonMoji from '@/components/TitleNotifications/KishuIzonMoji'
import HelpDetail from '@/components/TitleNotifications/HelpDetail'
import Addons from '@/components/TitleNotifications/Addons'
import Netabare from '@/components/TitleNotifications/Netabare'
import UpdatedInfo from '@/components/TitleNotifications/UpdatedInfo'

export default {
  components: {
    UpdatedInfo,
    WhatIsThisSite,
    ContentsAreNotAlwaysLatest,
    KishuIzonMoji,
    HelpDetail,
    Addons,
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
