import { create } from 'zustand';

import { type CounterStore, counterStoreCreator } from './counter-store';

export const useCounterStore = create<CounterStore>()(counterStoreCreator);
