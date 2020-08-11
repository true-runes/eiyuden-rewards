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
                  <div v-for="name in matchedPledgeNames" :key="name">
                    <p class="is-size-5 has-text-weight-bold">
                      {{ name }}
                    </p>
                    <ul>
                      <!-- FIXME: アイテム一覧を v-for で回す -->
                      <li>
                        アイテム
                      </li>
                      <li>
                        アイテム
                      </li>
                      <li>
                        アイテム
                      </li>
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
    matchedPledgeNames: function () {
      return Object.keys(this.matchedPledges()).filter(
        key => this.matchedPledges()[key] === true,
      )
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
    matchedPledges: function () {
      return {
        'Digital Version': this.$store.getters['pledges/isDigitalVersion'],
        'Physical Version': this.$store.getters['pledges/isPhysicalVersion'],
        'Double Digital Pack': this.$store.getters[
          'pledges/isDoubleDigitalPack'
        ],
        'Double Physical Pack': this.$store.getters[
          'pledges/isDoublePhysicalPack'
        ],
        'Digital & Physical': this.$store.getters[
          'pledges/isDigitalAndPhysical'
        ],
        'Badge of Honor': this.$store.getters['pledges/isBadgeOfHonor'],
        'Mark of the Bard': this.$store.getters['pledges/isMarkOfTheBard'],
        'Order of the Vermillion': this.$store.getters[
          'pledges/isOrderOfTheVermillion'
        ],
        'Order of the Harmonious': this.$store.getters[
          'pledges/isOrderOfTheHarmonious'
        ],
        'Order of the Archivists': this.$store.getters[
          'pledges/isOrderOfTheArchivists'
        ],
        'Trinity of Orders': this.$store.getters['pledges/isTrinityOfOrders'],
        'Vermillion Squire': this.$store.getters['pledges/isVermillionSquire'],
        'Harmonious Squire': this.$store.getters['pledges/isHarmoniousSquire'],
        'Archivist Squire': this.$store.getters['pledges/isArchivistSquire'],
        'Trinity Squire': this.$store.getters['pledges/isTrinitySquire'],
        'Vermillion Knight': this.$store.getters['pledges/isVermillionKnight'],
        'Hermonious Knight': this.$store.getters['pledges/isHarmoniousKnight'],
        'Archivist Knight': this.$store.getters['pledges/isArchivistKnight'],
        'Trinity Knight': this.$store.getters['pledges/isTrinityKnight'],
        'Vermillion Noble': this.$store.getters['pledges/isVermillionNoble'],
        'Harmonious Noble': this.$store.getters['pledges/isHarmoniousNoble'],
        'Archivist Noble': this.$store.getters['pledges/isArchivistNoble'],
        'Trinity Noble': this.$store.getters['pledges/isTrinityNoble'],
        'Name of the Steadfast': this.$store.getters[
          'pledges/isNameOfTheSteadfast'
        ],
        'Indelible Hand': this.$store.getters['pledges/isIndelibleHand'],
        'Edurling Requirlm': this.$store.getters['pledges/isEnduringRequiem'],
        'Cat-tribution': this.$store.getters['pledges/isCatTribution'],
        'Pixel Pet': this.$store.getters['pledges/isPixelPet'],
        'Fellow Worldbuilder': this.$store.getters[
          'pledges/isFellowWorldbuilder'
        ],
        "Evil's Anvil": this.$store.getters['pledges/isEvilsAnvil'],
        'Alter Ego': this.$store.getters['pledges/isAlterEgo'],
        Guildmaster: this.$store.getters['pledges/isGuildmaster'],
        'Revered Guildmaster': this.$store.getters[
          'pledges/isReveredGuildmaster'
        ],
        "Allaraan's Pantheon": this.$store.getters[
          'pledges/isAllaraansPantheron'
        ],
        Monument: this.$store.getters['pledges/isMonument'],
        'Silver Monument': this.$store.getters['pledges/isSilverMonument'],
        'Golden Monument': this.$store.getters['pledges/isGoldenMonument'],
        'Piece of History': this.$store.getters['pledges/isPieceOfHistory'],
        'Silver Piece of History': this.$store.getters[
          'pledges/isSilverPieceOfHistory'
        ],
        'Golden Piece of History': this.$store.getters[
          'pledges/isGoldenPieceOfHistory'
        ],
        'Digital Copy & Digital CD': this.$store.getters[
          'pledges/isDigitalCopyAndDigitalCd'
        ],
        'Digital Copy & Digital Artbook': this.$store.getters[
          'pledges/isDigitalCopyAndDigitalArtbook'
        ],
        'Digital Deluxe': this.$store.getters['pledges/isDigitalDeluxe'],
      }
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
