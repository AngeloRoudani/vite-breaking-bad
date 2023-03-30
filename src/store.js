import { reactive } from 'vue';

export const store = reactive(
    {
        FigurineList: [], 
        Archetype: [    
                    {   
                        value:"all",
                        text:"all"
                    },
                    {
                        value:"Blue-Eyes",
                        text:"Blue-Eyes"
                    },
                    {
                        value:"Apoqliphort",
                        text:"Apoqliphort"

                    },
                    {
                        value:"Chaos",
                        text:"Chaos"
                    },
                    {
                        value:"Cyber",
                        text:"Cyber"
                    },
                    {
                        value:"Dark Magician",
                        text:"Dark Magician"

                    }
                    ],
        selected: 'all',
    }
);