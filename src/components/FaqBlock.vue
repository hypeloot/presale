<script setup lang="ts">
import { ref } from "vue"

const activeFaqs = ref<number[]>([])

function toggleFaq(id: number) {
  if (activeFaqs.value.includes(id)) {
    activeFaqs.value = activeFaqs.value.filter((item) => item !== id)
  } else {
    activeFaqs.value.push(id)
  }
}
</script>

<template>
 <div class="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5">
    <div class="flex flex-col gap-3 md:gap-5">
      <div class="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer" @click="toggleFaq(0)">
        <div class="flex items-center justify-between">
          <span class="font-medium text-xl select-none">
            What is Hypeloot ($HPLT)?
          </span>
          <div class="flex flex-shrink-0 rotate-180" :class="{ '!rotate-0': activeFaqs.includes(0) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="max-h-[230px] transition-all duration-300 " :class="{ '!max-h-0 opacity-0 pointer-events-none': !activeFaqs.includes(0) }">
          <div class="text-sm text-white/50 mt-2.5">
            $HPLT is the official token of the Hypeloot ecosystem, our main Product Hypeloot.com was established in late 2022 and since then, we have over 100.000 registered users worldwide, $HPLT will have utilities in our Casino platform and more importantly, all holders will get dividends of Hypeloot.com in form of buyback and burn events of our token.
          </div>
        </div>
      </div>
      <div class="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer" @click="toggleFaq(1)">
        <div class="flex items-center justify-between">
          <span class="font-medium text-xl select-none">
            Why Hypeloot?
          </span>
          <div class="flex flex-shrink-0 rotate-180" :class="{ '!rotate-0': activeFaqs.includes(1) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="max-h-[230px] transition-all duration-300 " :class="{ '!max-h-0 opacity-0 pointer-events-none': !activeFaqs.includes(1) }">
          <div class="text-sm text-white/50 mt-2.5">
            Hypeloot.com has experienced massive growth over the last few months as online casinos are getting bigger and more popular by the day. Our main product Hypeloot.com is already established and we expect this trend to continue and accelerate after implementing more casino games, as well as starting aggressive marketing.
          </div>
        </div>
      </div>
      <div class="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer" @click="toggleFaq(2)">
        <div class="flex items-center justify-between">
          <span class="font-medium text-xl select-none">
            When will Hypeloot launch?
          </span>
          <div class="flex flex-shrink-0 rotate-180" :class="{ '!rotate-0': activeFaqs.includes(2) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="max-h-[230px] transition-all duration-300 " :class="{ '!max-h-0 opacity-0 pointer-events-none': !activeFaqs.includes(2) }">
          <div class="text-sm text-white/50 mt-2.5">
            Hypeloot.com has been live since over a year with new updates almost weekly. As for the $HPLT token, we will launch shortly after the presale ends and all tokens are sold out or the different presale stages end.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:gap-5">
      <div class="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer" @click="toggleFaq(3)">
        <div class="flex items-center justify-between">
          <span class="font-medium text-xl select-none">
            Where will I be able to exchange my $HPLT Tokens?
          </span>
          <div class="flex flex-shrink-0 rotate-180" :class="{ '!rotate-0': activeFaqs.includes(3) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="max-h-[230px] transition-all duration-300 " :class="{ '!max-h-0 opacity-0 pointer-events-none': !activeFaqs.includes(3) }">
          <div class="text-sm text-white/50 mt-2.5">
            $HPLT will be listed on centralized exchanges but also decentralized exchanges such as Uniswap, as well as on a own swap platform in which all generated fees go directly to all $HPLT staking pool contributors, for more information click here (here should redirect to whitepaper)
          </div>
        </div>
      </div>
      <div class="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer" @click="toggleFaq(4)">
        <div class="flex items-center justify-between">
          <span class="font-medium text-xl select-none">
            What is the $HPLT Launch price?
          </span>
          <div class="flex flex-shrink-0 rotate-180" :class="{ '!rotate-0': activeFaqs.includes(4) }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div class="max-h-[230px] transition-all duration-300 " :class="{ '!max-h-0 opacity-0 pointer-events-none': !activeFaqs.includes(4) }">
          <div class="text-sm text-white/50 mt-2.5">
            The $HPLT launch price will be $0.15, which means that all presale contributors will get the cheapest possible price before launch, Presale contributors may also be eligible to get a Hype NFT airdrop, click here to learn more (here should redirect to the NFT section of the page)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
