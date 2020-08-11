<template>
  <section class="section">
    <nav class="navbar is-fixed-bottom level">
      <p
        class="level-item is-size-4 has-text-centered pledges-list"
        @click="showModal"
      >
        該当プレッジ一覧へ（{{ numberOfMatchedPledgeNames }}個）
      </p>

      <div class="modal" :class="{ 'is-active': modalIsShown }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">該当プレッジ</p>
          </header>
          <section class="modal-card-body has-text-left">
            <div v-if="matchedPledgeNames.length === 0">
              該当プレッジはありません。
            </div>
            <div v-else>
              <div class="block">
                <ul>
                  <div
                    v-for="pledge in matchedPledges"
                    :key="pledge['pledgeName']['english']"
                  >
                    <p class="is-size-5 has-text-weight-bold">
                      {{ pledge['pledgeName']['japanese'] }}
                    </p>
                    <ul>
                      <div
                        v-for="rewardJapanese in pledge['rewards']['japanese']"
                        :key="rewardJapanese"
                      >
                        <li>・{{ rewardJapanese }}</li>
                      </div>
                    </ul>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot move-button-to-right">
            <button class="button is-success" @click="pushCloseButton">
              閉じる
            </button>
          </footer>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      modalIsShown: false,
      closeButtonIsPressed: false,
    }
  },
  computed: {
    matchedPledges: function () {
      return this.allPledges().filter(
        pledge => pledge['isMatchedWithUserSelection'] === true,
      )
    },
    matchedPledgeNames: function () {
      return this.matchedPledges.map(pledge => pledge['pledgeName'])
    },
    numberOfMatchedPledgeNames: function () {
      return this.matchedPledgeNames.length
    },
  },
  methods: {
    showModal() {
      this.closeButtonIsPressed = false
      this.modalIsShown = true
    },
    pushCloseButton() {
      this.closeButtonIsPressed = true
      this.modalIsShown = false
    },
    allPledges: function () {
      return [
        {
          pledgeName: {
            english: 'Digital Version',
            japanese: 'デジタルバージョン',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalVersion'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              'ダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Double Digital Pack',
            japanese: 'ダブルデジタルパック',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDoubleDigitalPack'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Double Physical Pack',
            japanese: 'ダブルフィジカル',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDoublePhysicalPack'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Digital & Physical',
            japanese: 'デジタルアンドフィジカル',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalAndPhysical'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Badge of Honor',
            japanese: 'Badge of Honor',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isBadgeOfHonor'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Mark of the Bard',
            japanese: 'Mark of the Bard',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isMarkOfTheBard'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Order of the Vermillion',
            japanese: 'Order of the Vermillion',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheVermillion'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Order of the Harmonious',
            japanese: 'Order of the Harmonious',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheHarmonious'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Order of the Archivists',
            japanese: 'Order of the Archivists',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheArchivists'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Trinity of Orders',
            japanese: 'Trinity of Orders',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityOfOrders'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Vermillion Squire',
            japanese: 'isVermillionSquire',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionSquire'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Harmonious Squire',
            japanese: 'Harmonious Squire',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousSquire'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Archivist Squire',
            japanese: 'Archivist Squire',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistSquire'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Trinity Squire',
            japanese: 'Trinity Squire',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinitySquire'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Vermillion Knight',
            japanese: 'Vermillion Knight',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionKnight'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Harmonious Knight',
            japanese: 'Harmonious Knight',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousKnight'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Archivist Knight',
            japanese: 'Archivist Knight',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistKnight'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Trinity Knight',
            japanese: 'Trinity Knight',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityKnight'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Vermillion Noble',
            japanese: 'Vermillion Noble',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionNoble'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Harmonious Noble',
            japanese: 'Harmonious Noble',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousNoble'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Archivist Noble',
            japanese: 'Archivist Noble',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistNoble'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Trinity Noble',
            japanese: 'Trinity Noble',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityNoble'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Name of the Steadfast',
            japanese: 'Name of the Steadfast',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isNameOfTheSteadfast'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Indelible Hand',
            japanese: 'Indelible Hand',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isIndelibleHand'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Enduring Requiem',
            japanese: 'isEnduringRequiem',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isEnduringRequiem'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Cat-tribution',
            japanese: 'Cat-tribution',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isCatTribution'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Pixel Pet',
            japanese: 'Pixel Pet',
          },
          isMatchedWithUserSelection: this.$store.getters['pledges/isPixelPet'],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Fellow Worldbuilder',
            japanese: 'Fellow Worldbuilder',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isFellowWorldbuilder'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: "Evil's Anvil",
            japanese: "Evil's Anvil",
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isEvilsAnvil'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Alter Ego',
            japanese: 'Alter Ego',
          },
          isMatchedWithUserSelection: this.$store.getters['pledges/isAlterEgo'],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Guildmaster',
            japanese: 'Guildmaster',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGuildmaster'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Revered Guildmaster',
            japanese: 'Revered Guildmaster',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isReveredGuildmaster'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: "Allaraan's Pantheon",
            japanese: "Allaraan's Pantheon",
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isAllaraansPantheron'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Monument',
            japanese: 'Monument',
          },
          isMatchedWithUserSelection: this.$store.getters['pledges/isMonument'],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Silver Monument',
            japanese: 'Silver Monument',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isSilverMonument'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Golden Monument',
            japanese: 'Golden Monument',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGoldenMonument'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Piece of History',
            japanese: 'Piece of History',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isPieceOfHistory'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Silver Piece of History',
            japanese: 'Silver Piece of History',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isSilverPieceOfHistory'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Golden Piece of History',
            japanese: 'Golden Piece of History',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGoldenPieceOfHistory'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Digital Copy & Digital CD',
            japanese: 'Digital Copy & Digital CD',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalCopyAndDigitalCd'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Digital Copy & Digital Artbook',
            japanese: 'Digital Copy & Digital Artbook',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalCopyAndDigitalArtbook'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
        {
          pledgeName: {
            english: 'Digital Deluxe',
            japanese: 'Digital Deluxe',
          },
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalDeluxe'
          ],
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              'betaAccess',
            ],
            japanese: [
              'あなたの名前がスタッフロールに',
              'Discordの称号: Knight, Ranger or Wizard',
              '2つのダウンロード版ゲーム',
              'ベータアクセス権',
            ],
          },
        },
      ]
    },
  },
}
</script>

<style>
.level-item {
  margin: 10px;
}

.move-button-to-right {
  justify-content: flex-end;
}

.pledges-list {
  cursor: pointer;
  cursor: hand;
}
</style>
