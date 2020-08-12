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
                      <span class="is-size-6">
                        ({{ pledge['pledgeName']['english'] }})
                      </span>
                    </p>

                    <p class="is-size-6 has-text-weight-bold">
                      ・支援額 {{ pledge['pledgeMinimumAmount']['japanese'] }}円
                      以上
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
            japanese: 'デジタルバージョン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '4,000',
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
            'pledges/isPhysicalVersion'
          ],
          isAvailable: false,
          pledgeName: {
            english: 'Physical Version',
            japanese: 'フィジカルバージョン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '6,000',
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
              'パッケージ版ゲーム取得権',
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
            japanese: 'ダブルデジタルパック',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
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
            japanese: 'ダブルフィジカルパック',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
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
            japanese: 'デジタル＆フィジカル',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '9,400',
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
            japanese: 'バッジオブオナー',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '7,500',
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
            japanese: 'マークオブザバード',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '10,000',
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
            japanese: 'オーダーオブザバーミリオン',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '15,000',
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
            japanese: 'オーダーオブザハーモニアス',
          },
          pledgeMinimumAmount: {
            english: '1,000',
            japanese: '15,000',
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
            japanese: 'オーダーオブザアーキビスト',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '15,000',
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
            japanese: 'トリニティオブオーダーズ',
          },
          pledgeMinimumAmount: {
            english: '???',
            japanese: '25,000',
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
            japanese: 'バーミリオンスクワイア',
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
            japanese: 'ハーモニアススクワイア',
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
            japanese: 'アーキビストスクワイア',
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
            japanese: 'トリニティスクワイア',
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
            japanese: 'バーミリオンナイト',
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
            japanese: 'ハーモニアスナイト',
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
            japanese: 'アーキビストナイト',
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
            japanese: 'トリニティナイト',
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
            japanese: 'バーミリオンノーブル',
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
            japanese: 'ハーモニアスノーブル',
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
            japanese: 'アーキビストノーブル',
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
            japanese: 'トリニティノーブル',
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
            japanese: 'ネームオブザステッドファスト',
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
            japanese: 'インデリブルハンド',
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
            japanese: 'エンデューイングレクイエム',
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
            japanese: 'キャットトリビューション',
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
            japanese: 'ピクセルペット',
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
            japanese: 'フェローワールドビルダー',
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
            japanese: 'イビルズアンビル',
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
            japanese: 'アルターエゴ',
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
            japanese: 'ギルドマスター',
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
            japanese: 'リビアドギルドマスター',
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
            japanese: 'オールラーンズパンテオン',
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
            japanese: 'モニュメント',
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
            japanese: 'シルバーモニュメント',
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
            japanese: 'ゴールデンモニュメント',
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
            japanese: 'ピースオブヒストリー',
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
            japanese: 'シルバーピースオブヒストリー',
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
            japanese: 'ゴールデンピースオブヒストリー',
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
            japanese: 'デジタルコピー＆デジタルCD',
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
            japanese: 'デジタルコピー＆デジタルアートブック',
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
            japanese: 'デジタルデラックス',
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
