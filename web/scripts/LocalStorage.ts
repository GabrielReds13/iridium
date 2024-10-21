import { appTheme } from "./AppTheme"
import type { Theme } from "./types/themes/Theme";


// ## theme ##
const selectedTheme = ref<string | null>(null);

export const saveTheme = (themeName: string) => {
    localStorage.setItem('selectedTheme', themeName);
};

const loadTheme = () => {
    return localStorage.getItem('selectedTheme');
};

const initializeTheme = () => {
    const savedTheme = loadTheme();
    selectedTheme.value = savedTheme || appTheme.get.allThemes.name; 

    appTheme.set.theme(selectedTheme.value);
};

onMounted(initializeTheme);