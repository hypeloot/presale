<script setup lang="ts">
import { onMounted } from 'vue'

type Dataset = {
  label: string
  data: number[]
  unit?: string
}

type TransformData = {
  label: string
  value: number
  unit: string
}

const datasets: Dataset[] = [
  {
    label: 'Users',
    data: [132, 4006, 12509, 23854, 45821, 61084, 73128, 86912, 102943, 122854]
  },
  {
    label: 'Revenue',
    data: [12566, 65023, 102893, 187822, 298933, 367882, 479829, 662993, 849202, 1142210],
    unit: '$'
  },
  {
    label: 'Boxes Opened',
    data: [3012, 16854, 87489, 286091, 683989, 983801, 1290012, 1483843, 1738911, 2218521]
  }
]

onMounted(() => {
  const chart = document.getElementById('chart')

  if (chart) {
    const svg = chart.querySelector('svg')

    if (!svg) {
      return
    }

    const circles = svg.querySelectorAll('circle')
    const transformData: TransformData[] = []

    datasets.forEach((dataset) => {
      dataset.data.forEach((value) => {
        transformData.push({
          label: dataset.label,
          value: value,
          unit: dataset.unit ? dataset.unit : ''
        })
      })
    })
    
    circles.forEach((circle, index) => {
      const hoverArea = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      hoverArea.setAttribute('cx', circle.getAttribute('cx') as string);
      hoverArea.setAttribute('cy', circle.getAttribute('cy') as string);
      hoverArea.setAttribute('r', '10');
      hoverArea.style.fill = 'transparent';

      hoverArea.addEventListener('mouseover', () => {
        const tooltip = document.getElementById('tooltip')
        const tooltipText = document.getElementById('tooltip-text')
        const tooltipLabel = document.getElementById('tooltip-label')

        if (tooltip && tooltipText && tooltipLabel) {
          tooltip.style.display = 'block'
          tooltip.style.left = `${circle.getBoundingClientRect().x}px`
          tooltip.style.top = `${circle.getBoundingClientRect().y}px`

          const value = `${transformData[index].value.toLocaleString()}`;
          const unit = transformData[index].unit

          tooltipText.innerHTML = `${unit}${value}`
          tooltipLabel.innerHTML = `${transformData[index].label}`
        }
      })

      hoverArea.addEventListener('mouseout', () => {
        const tooltip = document.getElementById('tooltip')

        if (tooltip) {
          tooltip.style.display = 'none'
        }
      })

      svg.appendChild(hoverArea);
    })
  }
})
</script>

<template>
  <div>
    <div id="chart" class="flex relative">
      <img src="./../assets/chart.svg" class="w-full h-auto" />
      <div class="absolute left-[10%] bottom-[6%] right-0.5 md:right-[0.5%] top-0 flex h-full">
        <svg viewBox="0 0 721 463" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="461" r="2" fill="white"/>
          <circle cx="83" cy="447" r="2" fill="white"/>
          <circle cx="162" cy="430" r="2" fill="white"/>
          <circle cx="242" cy="407" r="2" fill="white"/>
          <circle cx="320" cy="360" r="2" fill="white"/>
          <circle cx="405" cy="318" r="2" fill="white"/>
          <circle cx="484" cy="301" r="2" fill="white"/>
          <circle cx="562" cy="288" r="2" fill="white"/>
          <circle cx="643" cy="277" r="2" fill="white"/>
          <circle cx="719" cy="265" r="2" fill="white"/>

          <circle cx="2" cy="461" r="2" fill="white"/>
          <circle cx="83" cy="335" r="2" fill="white"/>
          <circle cx="162" cy="278" r="2" fill="white"/>
          <circle cx="242" cy="244" r="2" fill="white"/>
          <circle cx="320" cy="203" r="2" fill="white"/>
          <circle cx="405" cy="185" r="2" fill="white"/>
          <circle cx="484" cy="169" r="2" fill="white"/>
          <circle cx="562" cy="141" r="2" fill="white"/>
          <circle cx="643" cy="115" r="2" fill="white"/>
          <circle cx="719" cy="86" r="2" fill="white"/>

          <circle cx="2" cy="461" r="2" fill="white"/>
          <circle cx="83" cy="424" r="2" fill="white"/>
          <circle cx="162" cy="297" r="2" fill="white"/>
          <circle cx="242" cy="203" r="2" fill="white"/>
          <circle cx="321" cy="129" r="2" fill="white"/>
          <circle cx="405" cy="100" r="2" fill="white"/>
          <circle cx="484" cy="83" r="2" fill="white"/>
          <circle cx="562" cy="62" r="2" fill="white"/>
          <circle cx="643" cy="39" r="2" fill="white"/>
          <circle cx="719" cy="2" r="2" fill="white"/>
        </svg>
      </div>
    </div>
    <div id="tooltip" class="fixed p-2 pointer-events-none hidden -translate-x-1/2 -translate-y-full">
      <div class="bg-white/30 rounded-md backdrop-blur-sm shadow-md p-2 py-1 md:p-2.5 -ml-0.5">
        <p id="tooltip-text" class="text-white text-[10px] md:text-sm text-center"></p>
        <p id="tooltip-label" class="mt-0.6 text-white/50  text-[10px] md:text-sm text-center"></p>
      </div>
    </div>
  </div>
</template>