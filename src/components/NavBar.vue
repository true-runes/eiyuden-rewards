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
          isAvailable: false,
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
          isAvailable: false,
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
          isAvailable: false,
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
          isAvailable: false,
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isBadgeOfHonor'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Badge of Honor',
            japanese: 'Badge of Honor',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isMarkOfTheBard'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Mark of the Bard',
            japanese: 'Mark of the Bard',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheVermillion'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Order of the Vermillion',
            japanese: 'Order of the Vermillion',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheHarmonious'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Order of the Harmonious',
            japanese: 'Order of the Harmonious',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isOrderOfTheArchivists'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Order of the Archivists',
            japanese: 'Order of the Archivists',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityOfOrders'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity of Orders',
            japanese: 'Trinity of Orders',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionSquire'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Vermillion Squire',
            japanese: 'isVermillionSquire',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousSquire'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Harmonious Squire',
            japanese: 'Harmonious Squire',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistSquire'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Squire',
            japanese: 'Archivist Squire',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinitySquire'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Squire',
            japanese: 'Trinity Squire',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionKnight'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Vermillion Knight',
            japanese: 'Vermillion Knight',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousKnight'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Harmonious Knight',
            japanese: 'Harmonious Knight',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistKnight'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Knight',
            japanese: 'Archivist Knight',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityKnight'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Knight',
            japanese: 'Trinity Knight',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isVermillionNoble'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Vermillion Noble',
            japanese: 'Vermillion Noble',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isHarmoniousNoble'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Harmonious Noble',
            japanese: 'Harmonious Noble',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isArchivistNoble'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Archivist Noble',
            japanese: 'Archivist Noble',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isTrinityNoble'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Trinity Noble',
            japanese: 'Trinity Noble',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isNameOfTheSteadfast'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Name of the Steadfast',
            japanese: 'Name of the Steadfast',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isIndelibleHand'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Indelible Hand',
            japanese: 'Indelible Hand',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isEnduringRequiem'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Enduring Requiem',
            japanese: 'isEnduringRequiem',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isCatTribution'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Cat-tribution',
            japanese: 'Cat-tribution',
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
          isMatchedWithUserSelection: this.$store.getters['pledges/isPixelPet'],
          isAvailable: false,
          pledgeName: {
            english: 'Pixel Pet',
            japanese: 'Pixel Pet',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isFellowWorldbuilder'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Fellow Worldbuilder',
            japanese: 'Fellow Worldbuilder',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isEvilsAnvil'
          ],
          isAvailable: false,
          pledgeName: {
            english: "Evil's Anvil",
            japanese: "Evil's Anvil",
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
          isMatchedWithUserSelection: this.$store.getters['pledges/isAlterEgo'],
          isAvailable: false,
          pledgeName: {
            english: 'Alter Ego',
            japanese: 'Alter Ego',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGuildmaster'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Guildmaster',
            japanese: 'Guildmaster',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isReveredGuildmaster'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Revered Guildmaster',
            japanese: 'Revered Guildmaster',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isAllaraansPantheron'
          ],
          isAvailable: false,
          pledgeName: {
            english: "Allaraan's Pantheon",
            japanese: "Allaraan's Pantheon",
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
          isMatchedWithUserSelection: this.$store.getters['pledges/isMonument'],
          isAvailable: false,
          pledgeName: {
            english: 'Monument',
            japanese: 'Monument',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isSilverMonument'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Monument',
            japanese: 'Silver Monument',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGoldenMonument'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Monument',
            japanese: 'Golden Monument',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isPieceOfHistory'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Piece of History',
            japanese: 'Piece of History',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isSilverPieceOfHistory'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Silver Piece of History',
            japanese: 'Silver Piece of History',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isGoldenPieceOfHistory'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Golden Piece of History',
            japanese: 'Golden Piece of History',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalCopyAndDigitalCd'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Digital Copy & Digital CD',
            japanese: 'Digital Copy & Digital CD',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalCopyAndDigitalArtbook'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Digital Copy & Digital Artbook',
            japanese: 'Digital Copy & Digital Artbook',
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
          isMatchedWithUserSelection: this.$store.getters[
            'pledges/isDigitalDeluxe'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Digital Deluxe',
            japanese: 'Digital Deluxe',
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
