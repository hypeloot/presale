<script setup lang="ts">
import HeaderBlock from "../../components/HeaderBlock.vue"
import HeroBlock from "../../components/HeroBlock.vue"
import TokenDetails from "../../components/TokenDetails.vue"
import FooterBlock from "../../components/FooterBlock.vue"
import FaqBlock from "../../components/FaqBlock.vue"

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<template>
  <div class="relative flex flex-col gap-5 md:gap-12 p-3 md:p-7 max-w-[1300px] mx-auto !pb-28">
    <img src="../../assets/img/bg.svg" class="hidden md:block absolute left-0 -top-[600px] w-full z-0 pointer-events-none" />
    <HeaderBlock />
    <div class="relative flex flex-col gap-14 md:gap-28 z-10">
      <HeroBlock />
      <div class="flex flex-col gap-5 md:gap-10">
        <h2 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          100% SECURE
        </h2>
        <div class="flex flex-wrap gap-3 md:gap-5 md:flex-nowrap">
          <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <img src="../../assets/img/hypeloot.svg" class="mb-5 w-16 md:w-28" />
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Custom games & Physical delivery
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              All of our current games are developed fully by our team, we are also one of the only crypto-based casinos offering real item deliveries in over 50+ countries.
            </p>
          </div>

          <!-- <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <img src="../../assets/img/verified.png" class="mb-5 w-16 md:w-28" />
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Team is KYC Verified
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              The Hypeloot Team has been successfully verified by Assure DeFi the KYC Gold Standard.
            </p>
          </div> -->

          <a
            href="https://skynet.certik.com/projects/hypeloot"
            target="_blank"
            class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7"
          >
            <img src="../../assets/img/certik.png" class="mb-5 w-16 md:w-28" />
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Audited by Certik
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              Hypeloot Casino has been fully audited by Certik and shown to be 100% secure.
            </p>
          </a>
        </div>
        <div class="relative flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:items-start md:p-10 mt-10 md:mt-16">
          <div class="relative w-full -mt-20 md:absolute md:right-0 md:mt-0 bottom-0 md:w-[420px]">
            <img src="../../assets/img/incorporation-1.png" />
            <img src="../../assets/img/incorporation-2.png" class="absolute top-0 left-0 animate-bounce" />
          </div>
          <h3 class="mb-2.5 md:mb-5 text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            Incorporation
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left max-w-[640px]">
            HypeLoot is a brand name of Abacanes LTD, Reg No: HE443277, Having it's registered address at Strovolou, 77 STROVOLOS CENTER, 4th floor, Office 401 Strovolos, Nicosia, Cyprus
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row md:justify-between" id="casino">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/iphone.png" class="w-full max-w-40 md:max-w-[420px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:items-start md:gap-5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
            <span class="text-gold">$HPLT</span> IS THE FUTURE LEADING GAMBLING CRYPTOCURRENCY
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            The <span class="text-gold">$HPLT</span> token fuels the Hypeloot ecosystem, with more than 10,000,000 unique bets placed, <span class="text-gold">$HPLT</span> does not only remain a idea but is already backed by a established product and profitable with positive cash flow month over month which will be distributed amongst all <span class="text-gold">$HPLT</span> holders
          </p>
          <a href="https://hypeloot.com" target="_blank" class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto">
            CASINO IS LIVE NOW
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 md:gap-10">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-[55px]">
          BENEFITS OF BUYING <span class="text-gold">$HPLT</span> IN THE PRE-SALE
        </h3>
        <div class="flex flex-col gap-3 md:flex-row md:items-stretch">
          <div class="flex flex-col gap-3 md:w-full">
            <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:h-full">
              <img src="../../assets/img/big-coin.png" class="mb-5 w-16 md:w-28" />
              <h3 class="mb-2.5 text-xl text-center font-semibold">
                Lowest <span class="text-gold">$HPLT</span> Price
              </h3>
              <p class="text-sm text-center font-medium text-white/50">
                As the pre-sale is ongoing, you can buy <span class="text-gold">$HPLT</span> at the lowest possible price before it launches on centralized and decentralized exchanges.
              </p>
            </div>
            <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:h-full">
              <img src="../../assets/img/roulette.png" class="mb-5 w-16 md:w-28" />
              <h3 class="mb-2.5 text-xl text-center font-semibold">
                Receive up to 50% Casino Credits
              </h3>
              <p class="text-sm text-center font-medium text-white/50">
                Even before the launch, <span class="text-gold">$HPLT</span> token is backed by a real and profitable product, Hypeloot.com, presale buyers will receive free credits - no conditions or obligations attached!
              </p>
            </div>
          </div>
          <div class="hidden md:flex items-center flex-shrink-0 px-10">
            <img src="../../assets/img/big-coin.png" class="w-[150px]" />
          </div>
          <div class="flex flex-col gap-3 md:w-full">
            <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:h-full">
              <img src="../../assets/img/nfts.png" class="mb-5 w-h md:h-28" />
              <h3 class="mb-2.5 text-xl text-center font-semibold">
                Hype NFTs
              </h3>
              <p class="text-sm text-center font-medium text-white/50">
                All Presale participants are eligible for a Hype NFT, these can be sold, traded and used for on-site Hypeloot.com benefits.
              </p>
            </div>
            <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:h-full">
              <img src="../../assets/img/rewards.png" class="mb-5 w-16 md:w-28" />
              <h3 class="mb-2.5 text-xl text-center font-semibold">
                Daily Staking Rewards
              </h3>
              <p class="text-sm text-center font-medium text-white/50">
                As Hypeloot.com already generates income every day, we can distribute USDT rewards during the presale stage
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2.5" id="roadmap">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          road map
        </h3>
        <div class="relative flex flex-col gap-4">
          <div class="hidden md:block absolute left-1/2 top-[200px] bottom-[150px] border-r-2 border-primary border-dashed"></div>
          <div class="flex flex-col gap-4">
            <h4 class="relative text-xl text-center font-semibold z-10 md:-bottom-[110px]">
              2022 - 2023
            </h4>
            <div class="flex flex-col gap-4 md:gap-10">
              <div class="relative flex items-center justify-between flex-row-reverse">
                <div class="hidden md:flex w-[320px] justify-center items-center flex-col-reverse gap-5 flex-shrink-0">
                  <img src="../../assets/img/roadmap-1.png" class="mb-5 w-[186px]" />
                  <span class="text-white text-3xl font-extrabold italic uppercase">
                    Phase 1
                  </span>
                </div>
                <div class="hidden md:block w-full border-b-2 border-primary border-dashed mx-10"></div>
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <circle cx="24.5" cy="24.5" r="19.5" fill="#1F1A6D" stroke="#8554FB" stroke-width="10"/>
                  </svg>
                </div>
                <div class="relative flex flex-col items-center p-5 md:p-7 rounded-2xl bg-[#332A6A] md:max-w-[420px] md:flex-shrink-0">
                  <img src="../../assets/img/green-arrow.png" class="absolute -right-2 md:-right-4 md:-top-6 h-[60px]" />
                  <img src="../../assets/img/roadmap-1.png" class="mb-5 w-[186px] md:hidden" />
                  <span class="text-white/50 font-extrabold italic uppercase md:hidden">
                    Phase 1
                  </span>
                  <h3 class="w-full mb-2.5 text-xl text-center font-semibold md:text-left">
                    Hypeloot.com Product
                  </h3>
                  <div class="flex flex-col gap-2.5 text-sm text-center font-medium text-[#76D081] md:text-left">
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Launch of different game modes with over 200+ betting options
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      First-ever crypto friendly mystery box platform with physical worldwide shipping
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      100.000 registered users on Hypeloot.com
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Crypto and fiat deposit methods
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Company incorporation in Cyprus
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="relative text-xl text-center font-semibold z-10 md:-bottom-[136px]">
              2024
            </h4>
            <div class="flex flex-col gap-4 md:gap-10">
              <div class="relative flex items-center justify-between flex-row">
                <div class="hidden md:flex w-[320px] justify-center items-center flex-col-reverse gap-5 flex-shrink-0">
                  <img src="../../assets/img/roadmap-2.png" class="mb-5 w-[186px]" />
                  <span class="text-white text-3xl font-extrabold italic uppercase">
                    Phase 2
                  </span>
                </div>
                <div class="hidden md:block w-full border-b-2 border-primary border-dashed mx-10"></div>
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <circle cx="24.5" cy="24.5" r="19.5" fill="#1F1A6D" stroke="#8554FB" stroke-width="10"/>
                  </svg>
                </div>
                <div class="flex flex-col items-center p-5 md:p-7 rounded-2xl bg-[#332A6A] md:max-w-[420px] md:flex-shrink-0">
                  <img src="../../assets/img/roadmap-2.png" class="mb-5 w-[186px] md:hidden" />
                  <span class="text-white/50 font-extrabold italic uppercase md:hidden">
                    Phase 2
                  </span>
                  <h3 class="w-full mb-2.5 text-xl text-center font-semibold md:text-left">
                    Launch of <span class="text-gold">$HPLT</span> token
                  </h3>
                  <div class="flex flex-col gap-2.5 text-sm text-center font-medium text-white/50 md:text-left">
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      <span>
                        Presale launch of <span class="text-gold">$HPLT</span>
                      </span>
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Staking and USDT rewards integration
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      First buyback and burn event (using current Hypeloot profits)
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Listing on centralized exchanges
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Different trading pairs (USDT, BTC, etc.) for more volume and liquidity
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Gambling license by Curacao government (already ongoing)
                    </p>
                  </div>
                </div> 
              </div>

              <div class="relative flex items-center justify-between flex-row-reverse">
                <div class="hidden md:flex w-[320px] justify-center items-center flex-col-reverse gap-5 flex-shrink-0">
                  <img src="../../assets/img/roadmap-3.png" class="mb-5 w-[186px]" />
                  <span class="text-white text-3xl font-extrabold italic uppercase">
                    Phase 3
                  </span>
                </div>
                <div class="hidden md:block w-full border-b-2 border-primary border-dashed mx-10"></div>
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <circle cx="24.5" cy="24.5" r="19.5" fill="#1F1A6D" stroke="#8554FB" stroke-width="10"/>
                  </svg>
                </div>
                <div class="flex flex-col items-center p-5 md:p-7 rounded-2xl bg-[#332A6A] md:max-w-[420px] md:flex-shrink-0">
                  <img src="../../assets/img/roadmap-3.png" class="mb-5 w-[186px] md:hidden" />
                  <span class="text-white/50 font-extrabold italic uppercase md:hidden">
                    Phase 3
                  </span>
                  <h3 class="w-full mb-2.5 text-xl text-center font-semibold md:text-left">
                    Casino platform growth
                  </h3>
                  <div class="flex flex-col gap-2.5 text-sm text-center font-medium text-white/50 md:text-left">
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Softswiss integration (3000+ slot games and 200+ live casino games)
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Sportsbook integration (over 50 million yearly sporting betting options)
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      <span>
                        Real-life sporting events and teams partnerships promoting <span class="text-gold">$HPLT</span> and our platform
                      </span>
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      <span>
                        Bridges to major Blockchains of <span class="text-gold">$HPLT</span> in order to increase accessibilityBridges to major
                      </span>
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      <span>
                        Major influencer and streamer push of Hypeloot.com and <span class="text-gold">$HPLT</span>
                      </span>
                    </p>
                  </div>
                </div> 
              </div>

              <div class="relative flex items-center justify-between flex-row">
                <div class="hidden md:flex w-[320px] justify-center items-center flex-col-reverse gap-5 flex-shrink-0">
                  <img src="../../assets/img/roadmap-4.png" class="mb-5 w-[186px]" />
                  <span class="text-white text-3xl font-extrabold italic uppercase">
                    Phase 4
                  </span>
                </div>
                <div class="hidden md:block w-full border-b-2 border-primary border-dashed mx-10"></div>
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <circle cx="24.5" cy="24.5" r="19.5" fill="#1F1A6D" stroke="#8554FB" stroke-width="10"/>
                  </svg>
                </div>
                <div class="flex flex-col items-center p-5 md:p-7 rounded-2xl bg-[#332A6A] md:max-w-[420px] md:flex-shrink-0">
                  <img src="../../assets/img/roadmap-4.png" class="mb-5 w-[186px] md:hidden" />
                  <span class="text-white/50 font-extrabold italic uppercase md:hidden">
                    Phase 4
                  </span>
                  <h3 class="w-full mb-2.5 text-xl text-center font-semibold md:text-left">
                    Continued Development and Expansion
                  </h3>
                  <div class="flex flex-col gap-2.5 text-sm text-center font-medium text-white/50 md:text-left">
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Expansion into new markets and different audiences
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      Live affiliate events
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      World renowned athlete collaborations
                    </p>
                    <p class="flex justify-center text-center md:justify-start md:text-left">
                      <span class="hidden md:block w-1 h-1 m-2 bg-current rounded-full flex-shrink-0" />
                      More and unique in-house developed game modes
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/iphone-2.png" class="w-full md:max-w-[520px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
            DAILY STAKING REWARDS ARE LIVE NOW
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            Get paid every day even during the pre-sale based on the amount of <span class="text-gold">$HPLT</span> you hold. The faster you buy <span class="text-gold">$HPLT</span> tokens and the more you acquire, the higher your rewards (in USDT and <span class="text-gold">$HPLT</span>) will grow over time. You don’t need to take any action; once you’ve purchased the tokens, they will be automatically staked and can be managed through your personal dashboard (simply click on the wallet icon in the top right corner). Don’t miss this opportunity to be one of the first to enjoy truly passive staking income.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col items-center">
          <img src="../../assets/img/how-it-works-mobile.png" class="mb-5 w-full md:hidden" />
          <div class="flex flex-col gap-2.5 md:gap-5">
            <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
              HOW DOES IT WORK?
            </h3>
            <p class="text-sm text-center font-medium text-white/50 md:text-base max-w-[930px]">
              Curious about how the Hypeloot Casino ecosystem works? Here’s a simplified explanation.
              <br /><br />
              Hypeloot Casino is a global Crypto Casino and Sports Betting platform generating daily revenue. This income drives the growth of the <span class="text-gold">$HPLT</span> Token through an integrated daily Buy-Back, Burn and Reward System.
            </p>
          </div>
          <img src="../../assets/img/how-it-works-desktop.png" class="my-10 w-full hidden md:block pointer-events-none" />
        </div>
        <div class="flex flex-col gap-3 md:grid md:grid-cols-3">
          <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Buy-Back System
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              Hypeloot Casino uses a smart contract to purchase <span class="text-gold">$HPLT</span> tokens from public exchanges on a daily basis. These purchases are financed through a portion of the Casino and Betting revenue. During this buying process the <span class="text-gold">$HPLT</span> price goes automatically up
            </p>
          </div>
          <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Automatic Token Burn
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              The smart contract automatically burns half of the purchased <span class="text-gold">$HPLT</span> tokens each day. This process reduces the circulating <span class="text-gold">$HPLT</span> supply, which makes the remaining tokens more valuable
            </p>
          </div>
          <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Daily Profits
            </h3>
            <p class="text-sm text-center font-medium text-white/50">
              The other half of the tokens obtained through the buyback process will be automatically transferred to the Hypeloot Staking Pool. This staking pool then distributes rewards daily to <span class="text-gold">$HPLT</span> holders based on the number of tokens they hold, generating daily profits for them
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/iphone-3.png" class="w-full md:max-w-[520px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5 md:w-full">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
            Innovative Games
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            Hypeloot provides some of the most popular games and also adds an innovative touch by developing new game modes which are unseen within the crypto casino industry.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row-reverse md:justify-between">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/iphone-4.png" class="w-full md:max-w-[520px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5 md:w-full">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
            Provably Fair Technology
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            To ensure safety and customer satisfaction, all Hypeloot game modes are 100% provably fair, each game mode has a simple explanation on how to verify each game by using the EOS & Chainlink Blockchain to ensure 100% randomness and fairness
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 md:gap-5">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          DISRUPTING THE GAMBLING INDUSTRY
        </h3>
        <div class="flex overflow-auto no-scrollbar">
          <div class="flex flex-col gap-1 md:w-full">
            <div class="flex gap-1 md:w-full">
              <div class="w-52 md:w-1/2"></div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/hypeloot.png" class="h-8" />
                <span class="font-medium text-center whitespace-nowrap">
                  Hypeloot
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/bc-games.png" class="h-8" />
                <span class="font-medium text-center whitespace-nowrap">
                  Bc.Games
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/roobet.png" class="h-8" />
                <span class="font-medium text-center whitespace-nowrap">
                  Roobet
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/rollbit.png" class="h-8" />
                <span class="font-medium text-center whitespace-nowrap">
                  Rollbit
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/owl-games.png" class="h-8" />
                <span class="font-medium text-center whitespace-nowrap">
                  Owl Games
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="../../assets/img/gambling-logo/stake.png" class="h-8" />
                <span class="font-medium">
                  Stake
                </span>
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium rounded-tl-xl">
                Accepts Crypto
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] rounded-tr-xl">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Classic Casino Games
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Casino NFTs
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Community Token
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Passive Income
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium rounded-bl-xl">
                Fiat Deposit Gateway
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <img src="../../assets/img/checkmark.png" class="h-11" />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] rounded-br-xl">
                <!-- <img src="../../assets/img/checkmark.png" class="h-11" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 md:gap-5">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          Hypes NFT
        </h3>
        <div class="flex overflow-auto no-scrollbar">
          <div class="flex gap-1.5 md:gap-5 md:grid md:grid-cols-3 md:w-full">
            <div class="flex flex-col p-2.5 md:p-4 gap-3 rounded-xl bg-[#332A6A] flex-shrink-0">
              <div class="flex items-center justify-center rounded-xl bg-white/10">
                <img src="../../assets/img/nft/comp-1.gif" class="w-36 h-36 md:w-auto md:h-[300px]" />
              </div>
              <div class="flex flex-col gap-2.5">
                <h4 class="text-xl font-extrabold uppercase italic leading-none">
                  Gambler
                </h4>
                <div class="text-sm text-white/50 font-medium leading-none">
                  Supply: 10
                </div>
                <div class="text-sm text-[#DBB94B] font-medium leading-none">
                  Legendary
                </div>
              </div>
            </div>
            <div class="flex flex-col p-2.5 md:p-4 gap-3 rounded-xl bg-[#332A6A] flex-shrink-0">
              <div class="flex items-center justify-center rounded-xl bg-white/10">
                <img src="../../assets/img/nft/comp-2.gif" class="w-36 h-36 md:w-auto md:h-[300px]" />
              </div>
              <div class="flex flex-col gap-2.5">
                <h4 class="text-xl font-extrabold uppercase italic leading-none">
                  Degendog
                </h4>
                <div class="text-sm text-white/50 font-medium leading-none">
                  Supply: 50
                </div>
                <div class="text-sm text-[#AC52E8] font-medium leading-none">
                  Epic
                </div>
              </div>
            </div>
            <div class="flex flex-col p-2.5 md:p-4 gap-3 rounded-xl bg-[#332A6A] flex-shrink-0">
              <div class="flex items-center justify-center rounded-xl bg-white/10">
                <img src="../../assets/img/nft/comp-3.gif" class="w-36 h-36 md:w-auto md:h-[300px]" />
              </div>
              <div class="flex flex-col gap-2.5">
                <h4 class="text-xl font-extrabold uppercase italic leading-none">
                  Croupier
                </h4>
                <div class="text-sm text-white/50 font-medium leading-none">
                  Supply: 100
                </div>
                <div class="text-sm text-[#FD57F7] font-medium leading-none">
                  Rare
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-5 text-white/50 text-center text-xs font-medium">
          Hypes are our NFTs and form part of the Hypeloot Ecosystem.<br />
          NFTs can not only be traded, bought and sold but can also be used in our website Hypeloot.com<br />
          Each NFT will NOT be minted more than the given Supply. If you own a Hype, you get proof of ownership on to your wallet in form of the Erc721 standard.<br />
          <br />
          Check out our whole NFT collection here<br />
          <br />
          Rarities: <span class="text-[#DBB94B]">Legendary</span>, <span class="text-[#AC52E8]">Epic</span>, <span class="text-[#FD57F7]">Rare</span>, <span class="text-[#30FFFF]">Uncommon</span>, Common.
        </p>
      </div>

      <div class="flex flex-col items-center md:flex-row-reverse md:justify-between" id="whitepaper">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/iphone-5.png" class="w-full max-w-60 md:max-w-[420px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5 md:w-full md:items-start">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
            <span class="text-gold">$HPLT</span> WHITEPAPER
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            Reading the Hypeloot CASINO Whitepaper is a great way to learn more about the unique Hypeloot ecosystem and how the <span class="text-gold">$HPLT</span> token can benefit you. It highlights the groundbreaking innovations and explains in detail how it stands out from other crypto projects.
          </p>
          <a href="/whitepaper.pdf" target="_blank" class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto">
            ACCESS THE WHITEPAPER
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-2.5 md:flex-row md:gap-20">
        <div class="flex flex-col items-center gap-2.5 md:items-start md:w-[55%] md:justify-center">
          <img src="../../assets/img/robot.png" class="w-full max-w-28" />
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-[40px] md:text-left md:leading-snug">
            Hypeloot.com will integrate Artificial intelligence (AI) to offer the best possible user experience
          </h3>
        </div>
        <div class="flex md:w-[45%] pointer-events-none">
          <img src="../../assets/img/chat-mobile.png" class="md:hidden w-full" />
          <img src="../../assets/img/chat-desktop.png" class="hidden md:block w-full" />
        </div>
      </div>

      <div class="flex flex-col gap-5 md:gap-10">
        <div class="flex flex-col gap-2.5 md:gap-5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            TOKEN DETAILS
          </h3>
          <p class="font-medium text-white/50 text-center text-sm md:text-base">
            Use the contract information below to add the <span class="text-gold">$HPLT</span> token to your wallet.
          </p>
        </div>
        <TokenDetails />
      </div>

      <div class="flex flex-col gap-5" id="tokenomics">
        <div class="flex flex-col gap-2.5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            HypeLoot Tokenomics
          </h3>
          <p class="text-white/50 text-xl font-medium text-center">
            Total supply to <span class="whitespace-nowrap">100 000 000</span>
          </p>
        </div>
        <div class="flex md:mt-10 pointer-events-none">
          <img src="../../assets/img/chart-mobile.svg" class="md:hidden w-full" />
          <img src="../../assets/img/chart-desktop.svg" class="hidden md:block w-full" />
        </div>
        <div class="flex mt-10 overflow-hidden pointer-events-none">
          <img src="../../assets/img/payment-mobile.png" class="md:hidden w-full" />
          <img src="../../assets/img/payment-desktop.svg" class="hidden md:block w-full" />
        </div>
      </div>

      <div class="flex flex-col gap-5 md:gap-10">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          Meet some of our advisors
        </h3>
        <div class="flex flex-col justify-center gap-7 md:gap-10 md:grid md:grid-cols-3">
          <div class="flex flex-col items-center">
            <img src="../../assets/img/team/2.png" class="w-[200px] mb-5" />
            <h4 class="text-center text-2xl font-extrabold uppercase italic">
              Dr. Sviatoslav Bykhovski
            </h4>
            <p class="text-center text-white/50 mt-2.5">
              Dr. Sviatoslav Bykhovski has over 20 years experience in finance and fundraising, Sviatoslav has gathered a substantial amount of experience in funding and growing companies to $10m+ yearly revenue and will help us with his expertise
            </p>
            <div class="flex items-center gap-5 mt-5">
              <a href="https://t.me/slavadykh" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/telegram.svg" />
              </a>
              <a href="mailto:sviatoslav@hypeloot.com" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/mail.svg" />
              </a>
              <a href="https://www.linkedin.com/in/sviatoslav-bykhovski/" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/linkedin.svg" />
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="../../assets/img/team/1.png" class="w-[200px] mb-5" />
            <h4 class="text-center text-2xl font-extrabold uppercase italic">
              Pedro Ferreira
            </h4>
            <p class="text-center text-white/50 mt-2.5">
              Pedro Ferreira is an expert in data analysis and has been into project coordination for many years. Pedro will help us with analyzing the industry and competitors in order to have the best possible launch
            </p>
            <div class="flex items-center gap-5 mt-5">
              <a href="https://t.me/PedroFer007" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/telegram.svg" />
              </a>
              <a href="mailto:altt@hypeloot.com" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/mail.svg" />
              </a>
              <a href="https://linkedin.com/in/pedro-ferreira/" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/linkedin.svg" />
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="../../assets/img/team/3.png" class="w-[200px] mb-5" />
            <h4 class="text-center text-2xl font-extrabold uppercase italic">
              Heather Dryden
            </h4>
            <p class="text-center text-white/50 mt-2.5">
              Heather Dryden has over 20 years of experience in Innovation and Economic Development, being on the former Advisory Committee for the ICANN, Heather can provide us with valuable expertise when it comes to the regulatory and privacy policy aspect.
            </p>
            <div class="flex items-center gap-5 mt-5">
              <!-- <a href="#" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/telegram.svg" />
              </a> -->
              <a href="mailto:contact@hypeloot.com" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/mail.svg" />
              </a>
              <a href="https://www.linkedin.com/in/heather-dryden-29914212/" target="_blank" class="flex items-center justify-center">
                <img src="../../assets/img/social/linkedin.svg" />
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-col justify-center gap-7 md:gap-10 md:grid md:grid-cols-1">
          <div class="flex flex-col items-center md:flex-row md:gap-10 md:max-w-[800px] md:mx-auto">
            <img src="../../assets/img/team/2.png" class="w-[200px] mb-5" />
            <div class="flex flex-col items-center">
              <h4 class="text-center text-2xl font-extrabold uppercase italic">
                Dr. Sviatoslav Bykhovski
              </h4>
              <p class="text-center text-white/50 mt-2.5">
                Dr. Sviatoslav Bykhovski has over 20 years experience in finance and fundraising, Sviatoslav has gathered a substantial amount of experience in funding and growing companies to $10m+ yearly revenue and will help us with his expertise
              </p>
              <div class="flex items-center gap-5 mt-5">
                <a href="https://t.me/slavadykh" target="_blank" class="flex items-center justify-center">
                  <img src="../../assets/img/social/telegram.svg" />
                </a>
                <a href="mailto:sviatoslav@hypeloot.com" class="flex items-center justify-center">
                  <img src="../../assets/img/social/mail.svg" />
                </a>
                <a href="https://www.linkedin.com/in/sviatoslav-bykhovski/" target="_blank" class="flex items-center justify-center">
                  <img src="../../assets/img/social/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <div class="relative flex flex-col md:pb-60">
        <img src="../../assets/img/our-games-mobile.png" class="mb-5 w-full md:hidden" />
        <img src="../../assets/img/our-games-desktop.png" class="hidden md:block w-full absolute left-0 bottom-0 pointer-events-none" />
        <div class="flex flex-col gap-2.5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            <span class="text-gold">$HPLT</span> Delivers Exclusive Insider Access to the world of Online Gambling.
          </h3>
          <p class="text-sm text-center text-white/50 font-medium md:max-w-[790px] md:mx-auto md:text-base">
            Launching an online casino typically takes 6-18 months of intense preparation, a $2 million investment, legal connections, and years of experience in the gambling industry. These high barriers have excluded many individuals from entering this sector. But now, with <span class="text-gold">$HPLT</span>, the first social online gambling cryptocurrency, anyone can participate in this lucrative field without massive capital or experience and potentially earn substantial profits.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row md:justify-between" id="how-to-buy">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/dice-and-pool.png" class="w-full md:max-w-[560px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5 md:w-full md:items-start">
          <h3 class="text-center text-2xl font-extrabold italic uppercase md:text-[40px] md:leading-tight md:text-left">
            Gambling is one of the oldest and most lucrative industries in the history of mankind and digitization is just the next logical step.
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            People have been gambling for the last 3,000 years, regardless of location, time, or market conditions. Gambling is hard-wired in human psychology. This makes an online gambling platform one of the most interesting opportunities to generate cash flow with passive staking income, and build long-term wealth.
          </p>
          <button class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto" @click="scrollTo('presale-form')">
            Buy $HPLT now
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center md:flex-row-reverse md:justify-between">
        <div class="flex items-center justify-center w-full">
          <img src="../../assets/img/slots.png" class="w-full md:max-w-[500px]" />
        </div>
        <div class="flex flex-col gap-2.5 md:gap-5 md:w-full md:items-start">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:leading-tight md:text-left">
            More than a simple Casino Token
          </h3>
          <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
            The <span class="text-gold">$HPLT</span> token is the one-stop token that will facilitate all forms of gambling with a licensed, transparent, and provably fair crypto platform. It comes with different advantages and use cases. Crypto casinos are booming, and it’s your turn to benefit.
          </p>
          <ul class="flex flex-col gap-1 mb-2 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-6">
            <li class="flex items-center gap-2.5 text-center text-xs font-medium md:text-left">
              <img src="../../assets/img/checkmark.png" class="h-6" />
              Payment method for Hypeloot Casino
            </li>
            <li class="flex items-center gap-2.5 text-center text-xs font-medium md:text-left">
              <img src="../../assets/img/checkmark.png" class="h-6" />
              <span>
                Passive income for holding <span class="text-gold">$HPLT</span>
              </span>
            </li>
            <li class="flex items-center gap-2.5 text-center text-xs font-medium md:text-left">
              <img src="../../assets/img/checkmark.png" class="h-6" />
              Weekly Bonus and Free Games
            </li>
            <li class="flex items-center gap-2.5 text-center text-xs font-medium md:text-left">
              <img src="../../assets/img/checkmark.png" class="h-6" />
              Affiliate Reward System
            </li>
            <li class="mt-2 text-center text-xs font-medium md:text-left text-white/60">
              And Much More….
            </li>
          </ul>
          <button class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto" @click="scrollTo('presale-form')">
            Buy $HPLT now
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-5 md:gap-10">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          PRESS & MEDIA
        </h3>
        <div class="flex flex-col gap-3 md:gap-5 md:flex-row md:items-start">
          <div class="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 md:mt-20 w-full">
            <img src="../../assets/img/press-and-media/1.png" class="h-[98px]" />
            <p class="text-center text-sm font-medium">
              This gaming-related project’s inviting atmosphere and excellent rewards make it a success. As such, many analysts think it could be the next billion-dollar crypto.
            </p>
          </div>
          <div class="flex flex-col items-center gap-10 w-full">
            <img src="../../assets/img/big-coin.png" class="w-[150px] hidden md:block" />
            <div class="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 w-full">
              <img src="../../assets/img/press-and-media/2.png" class="h-[98px]" />
              <p class="text-center text-sm font-medium">
                Overall, Hypeloot Casino is one of the only projects that can provide a sustainable passive income to holders - regardless of the overall market conditions.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 md:mt-20 w-full">
            <img src="../../assets/img/press-and-media/3.png" class="h-[98px]" />
            <p class="text-center text-sm font-medium">
              Hypeloot Casino is on a mission to create the world’s leading crypto-based online casino, where holders of its token can earn a daily yield based on the casino’s performance.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5 md:gap-10">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          POWERED BY
        </h3>
        <div class="grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-4">
          <a
            href="https://www.evolution.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/1.png" class="h-[25px] md:h-[50px]" />
          </a>
          <!-- <a
            href="https://www.novomatic.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/2.png" class="h-[25px] md:h-[50px]" />
          </a> -->
          <a
            href="https://flooz.xyz"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/2.svg" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.netent.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/3.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.amatic.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/4.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.betradar.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/5.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://wazdan.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/6.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://macawgaming.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/7.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.hacksawgaming.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/8.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://goldenrace.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/9.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.microgaming.co.uk/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/10.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://spribe.co/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/11.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://habanerosystems.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/12.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.egt.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/13.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://evenbetgaming.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/14.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.playngo.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/15.png" class="h-[25px] md:h-[50px]" />
          </a>
          <a
            href="https://www.globalbet.com/"
            target="_blank"
            class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
          >
            <img src="../../assets/img/providers/16.png" class="h-[25px] md:h-[50px]" />
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-5 md:gap-10" id="faq">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <FaqBlock />
      </div>

      <div class="flex flex-col gap-5 md:gap-10">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          FEATURED IN
        </h3>
        <div class="grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-4">
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/1.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/2.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/3.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/4.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/5.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/6.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/7.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/8.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/9.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/10.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/11.png" class="h-[25px] md:h-[50px]" />
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]">
            <img src="../../assets/img/features/12.png" class="h-[25px] md:h-[50px]" />
          </div>
        </div>
      </div>

      <FooterBlock />

      <div class="flex fixed left-3 bottom-3 right-3 md:left-auto md:w-[320px]">
        <a href="https://hypeloot.com" target="_blank" class="relative flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-gradient-to-r from-[#FFC122] to-[#FF7A00] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden">
          <span class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="194" height="14" viewBox="0 0 194 14" fill="none">
              <path d="M54.393 0.665771L53.887 3.48508H50.5074L48.7544 13.4069H45.1941L46.9472 3.48508H43.5857L44.0917 0.665771H54.393Z" fill="white"/>
              <path d="M40.9722 0.665771L38.7312 13.4069H35.1709L37.43 0.665771H40.9722Z" fill="white"/>
              <path d="M27.2221 13.5332C25.7522 13.5332 24.5654 13.232 23.6618 12.6296C22.7703 12.0151 22.3245 11.1235 22.3245 9.95484C22.3245 9.85845 22.3365 9.68978 22.3606 9.44881H26.1016C26.0655 9.85845 26.1498 10.1777 26.3546 10.4067C26.5594 10.6356 26.8727 10.75 27.2944 10.75C27.6438 10.75 27.9209 10.6717 28.1257 10.5151C28.3426 10.3585 28.451 10.1356 28.451 9.84641C28.451 9.50905 28.2944 9.23194 27.9811 9.01507C27.6799 8.7982 27.186 8.54519 26.4992 8.25603C25.8124 7.96687 25.2462 7.69578 24.8004 7.44277C24.3546 7.17771 23.9691 6.82228 23.6438 6.37649C23.3184 5.91866 23.1558 5.35239 23.1558 4.67768C23.1558 3.79815 23.3727 3.04513 23.8064 2.41862C24.2401 1.78006 24.8426 1.29813 25.6136 0.972826C26.3968 0.635473 27.2884 0.466797 28.2884 0.466797C29.192 0.466797 29.9932 0.611376 30.692 0.900536C31.3908 1.17765 31.933 1.58127 32.3185 2.11139C32.7161 2.64152 32.9149 3.26803 32.9149 3.99093C32.9149 4.1837 32.9089 4.32828 32.8969 4.42467H29.0836C29.0956 4.36442 29.1016 4.28009 29.1016 4.17165C29.1016 3.88249 29.0113 3.6596 28.8305 3.50297C28.6498 3.33429 28.4028 3.24996 28.0896 3.24996C27.7643 3.24996 27.4992 3.33429 27.2944 3.50297C27.1016 3.6596 27.0052 3.88249 27.0052 4.17165C27.0052 4.48491 27.1558 4.75599 27.457 4.98491C27.7703 5.20178 28.2522 5.46082 28.9028 5.76203C29.6016 6.08733 30.1739 6.39457 30.6197 6.68372C31.0776 6.96084 31.4691 7.33433 31.7944 7.80422C32.1197 8.2741 32.2824 8.85242 32.2824 9.53917C32.2824 10.2982 32.0776 10.985 31.6679 11.5994C31.2583 12.2018 30.6739 12.6778 29.9149 13.0272C29.1559 13.3645 28.2583 13.5332 27.2221 13.5332Z" fill="white"/>
              <path d="M20.3794 0.665771L18.1384 13.4069H14.5781L16.8372 0.665771H20.3794Z" fill="white"/>
              <path d="M4.38408 0.665771L5.64915 9.84658L10.1492 0.665771H13.9263L7.27567 13.4069H2.75756L0.606934 0.665771H4.38408Z" fill="white"/>
              <path d="M76.1986 0.231087L73.8259 13.8652H69.612L70.5421 8.55021H66.537L65.607 13.8652H61.3931L63.7657 0.231087H67.9796L67.1255 5.14168H71.1306L71.9847 0.231087H76.1986Z" fill="white"/>
              <path d="M94.7982 0.231087L88.3255 9.7249L87.6042 13.8652H83.3904L84.1117 9.7249L80.9418 0.231087H85.763L87.0728 5.06465L90.0529 0.231087H94.7982Z" fill="white"/>
              <path d="M119.301 3.62036L119.016 5.31499H123.192L122.623 8.53095H118.447L118.105 10.4567H122.851L122.262 13.8652H113.303L115.676 0.231087H124.635L124.046 3.62036H119.301Z" fill="white"/>
              <path d="M134.341 10.63H138.403L137.834 13.8652H129.558L131.93 0.231087H136.144L134.341 10.63Z" fill="white"/>
              <path d="M149.543 14C148.404 14 147.404 13.7625 146.544 13.2875C145.683 12.8125 145.019 12.1449 144.55 11.2847C144.082 10.4117 143.848 9.41678 143.848 8.29986C143.848 6.66942 144.177 5.23155 144.835 3.98624C145.506 2.72811 146.436 1.75241 147.625 1.05915C148.828 0.353049 150.207 0 151.763 0C152.928 0 153.94 0.237506 154.8 0.712517C155.674 1.17469 156.344 1.83586 156.813 2.69601C157.281 3.54333 157.515 4.52545 157.515 5.64237C157.515 7.25997 157.179 8.70426 156.509 9.97524C155.851 11.2462 154.914 12.2348 153.7 12.9409C152.497 13.647 151.112 14 149.543 14ZM150.188 10.0138C150.846 10.0138 151.415 9.84044 151.896 9.49381C152.39 9.13434 152.763 8.66575 153.016 8.08803C153.269 7.49748 153.396 6.86199 153.396 6.18157C153.396 5.47547 153.206 4.92985 152.826 4.5447C152.459 4.14672 151.928 3.94773 151.232 3.94773C150.574 3.94773 149.998 4.12105 149.505 4.46768C149.011 4.81431 148.632 5.2829 148.366 5.87345C148.113 6.45117 147.986 7.08024 147.986 7.76066C147.986 8.46676 148.17 9.0188 148.537 9.41678C148.916 9.81476 149.467 10.0138 150.188 10.0138Z" fill="white"/>
              <path d="M168.298 14C167.159 14 166.159 13.7625 165.299 13.2875C164.438 12.8125 163.774 12.1449 163.306 11.2847C162.838 10.4117 162.603 9.41678 162.603 8.29986C162.603 6.66942 162.933 5.23155 163.591 3.98624C164.261 2.72811 165.191 1.75241 166.381 1.05915C167.583 0.353049 168.962 0 170.519 0C171.683 0 172.695 0.237506 173.556 0.712517C174.429 1.17469 175.1 1.83586 175.568 2.69601C176.036 3.54333 176.27 4.52545 176.27 5.64237C176.27 7.25997 175.935 8.70426 175.264 9.97524C174.606 11.2462 173.67 12.2348 172.455 12.9409C171.253 13.647 169.867 14 168.298 14ZM168.943 10.0138C169.601 10.0138 170.171 9.84044 170.652 9.49381C171.145 9.13434 171.518 8.66575 171.772 8.08803C172.025 7.49748 172.151 6.86199 172.151 6.18157C172.151 5.47547 171.961 4.92985 171.582 4.5447C171.215 4.14672 170.683 3.94773 169.987 3.94773C169.329 3.94773 168.753 4.12105 168.26 4.46768C167.766 4.81431 167.387 5.2829 167.121 5.87345C166.868 6.45117 166.741 7.08024 166.741 7.76066C166.741 8.46676 166.925 9.0188 167.292 9.41678C167.672 9.81476 168.222 10.0138 168.943 10.0138Z" fill="white"/>
              <path d="M193.393 0.231087L192.805 3.62036H189.236L187.452 13.8652H183.238L185.022 3.62036H181.492L182.08 0.231087H193.393Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M108.74 7.25997C109.246 6.55387 109.575 5.77075 109.727 4.91059C109.79 4.52545 109.821 4.19166 109.821 3.90922C109.821 2.76662 109.448 1.86795 108.702 1.21321C107.955 0.55846 106.867 0.231087 105.437 0.231087H99.5525L98.956 3.65887H103.178H104.374C105.12 3.65887 105.494 3.96699 105.494 4.58322C105.494 4.64741 105.481 4.75653 105.456 4.91059C105.304 5.74507 104.798 6.16231 103.937 6.16231H102.741H98.5203L97.1798 13.8652H101.394L102.153 9.53232H103.823C104.912 9.53232 105.873 9.32691 106.708 8.91609C107.556 8.50527 108.233 7.95323 108.74 7.25997Z" fill="white"/>
            </svg>
          </span>
          <!-- <img src="../../assets/img/logo.svg" /> -->
          <span class="absolute bottom-0 right-0 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="48" viewBox="0 0 52 48" fill="none">
              <g opacity="0.45">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.4365 42.875L33.3715 56.75V29L39.3878 41.3333L57.4365 29.7708V42.875Z" fill="white"/>
                <path d="M27.3552 41.3333L33.3715 29L9.30646 15.125L1.78613 25.9167L9.30646 30.5417L27.3552 41.3333Z" fill="white"/>
                <path d="M33.3715 56.75L9.30646 42.875V30.5417M33.3715 56.75L57.4365 42.875V29.7708M33.3715 56.75V29M57.4365 15.125L33.3715 1.25L9.30646 15.125M57.4365 15.125L33.3715 29M57.4365 15.125L63.4528 25.9167L57.4365 29.7708M9.30646 15.125L1.78613 25.9167L9.30646 30.5417M9.30646 15.125L33.3715 29M33.3715 29L39.3878 41.3333L57.4365 29.7708M33.3715 29L27.3552 41.3333L9.30646 30.5417" stroke="white" stroke-width="2"/>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
