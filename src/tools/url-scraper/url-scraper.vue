<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import { extractUrls } from './url-scraper.service';

const text = ref('');
const unique = ref(false);

const urls = computed(() => extractUrls(text.value, unique.value));

const outputText = computed(() => urls.value.join('\n'));

const { copy } = useCopy({ source: outputText });
</script>


<template>
  <div>
    <c-input-text
      v-model:value="text"
      placeholder="Paste your text here..."
      label="Input text"
      multiline
      rows="10"
      raw-text
    />

    <div class="my-4 flex items-center gap-2">
      <n-switch v-model:value="unique" />
      <span>Unique URLs only</span>
    </div>

    <c-input-text
      :value="outputText"
      placeholder="Extracted URLs will appear here..."
      label="Extracted URLs"
      multiline
      rows="10"
      raw-text
      readonly
    />
  </div>
</template>