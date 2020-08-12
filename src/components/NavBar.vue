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
                    <p class="is-size-6 has-text-weight-bold">
                      （支援額 {{ pledge['pledgeMinimumAmount']['japanese'] }}円
                      以上）
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalVersion'
          ],
          pledgeName: {
            english: 'Digital Version',
            japanese: 'デジタル版',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロール登場権',
              'Discord で Knight, Ranger, Wizard のいずれかの称号の取得権',
              'ダウンロード版ゲーム取得権',
              'ベータ版プレイ権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDoubleDigitalPack'
          ],
          pledgeName: {
            english: 'Double Digital Pack',
            japanese: 'ダブルデジタル版',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x digitalGame',
              '2x betaAccess',
            ],
            japanese: [
              'スタッフロール登場権',
              'Discord で Knight, Ranger, Wizard のいずれかの称号の取得権',
              '2つのダウンロード版ゲーム取得権',
              '2つのベータ版プレイ権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDoublePhysicalPack'
          ],
          pledgeName: {
            english: 'Double Physical Pack',
            japanese: 'ダブルパッケージ版',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              '2x physicalGame',
              '2x betaAccess',
            ],
            japanese: [
              'スタッフロール登場権',
              'Discord で Knight, Ranger, Wizard のいずれかの称号の取得権',
              '2つのパッケージ版ゲーム取得権',
              '2つのベータ版プレイ権',
            ],
          },
        },
        {
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalAndPhysical'
          ],
          pledgeName: {
            english: 'Digital & Physical',
            japanese: 'デジタル版＆パッケージ版',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
          rewards: {
            english: [
              'yourNameInTheStaffRoll',
              'discordRole: Knight, Ranger or Wizard',
              'digitalGame',
              'physicalGame',
              'betaAccess',
            ],
            japanese: [
              'スタッフロール登場権',
              'Discord で Knight, Ranger, Wizard のいずれかの称号の取得権',
              'ダウンロード版ゲーム取得権',
              'パッケージ版ゲーム取得権',
              'ベータ版プレイ権',
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '100,000',
          },
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
