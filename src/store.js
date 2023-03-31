import { reactive } from 'vue';

export const store = reactive(
    {
        FigurineList: [], 
        Archetype: [],
        selected: 'all',
    }
);