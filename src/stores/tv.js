import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useTVStore = defineStore('tv', () => {
  const state = reactive({
    currentTV: {},
  });

  const currentTV = computed(() => state.currentTV);

  const getTVDetail = async (tvId) => {
    const response = await api.get(`tv/${tvId}`);
    state.currentTV = response.data;
  };

  return { currentTV, getTVDetail };
});