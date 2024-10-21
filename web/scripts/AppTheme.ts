//  import
import { ref } from "vue";
import type { Color } from "./types/themes/Color";
import type { Theme } from "./types/themes/Theme";

// export
// themes
const themeOptions = {
    // color
    colors: ref<Color[]> ([
        {
            name: "Iridium",
            color: "#9E71FF",
            selected: true
        },
        {
            name: "Coffee",
            color: "#A05737",
            selected: false
        },
    ]),
    
    // themes
    themes: ref<Theme[]>([
        {
            name: "Claro",
            palette: {
                main: "#fff",
                border: "#6b7280",
                text: {
                    primary: "#000",
                    secondary: "#6b7280",
                },
            },
            selected: true
        },
        {
            name: "Escuro",
            palette: {
                main: "#1d1d1d",
                border: "#323334",
                text: {
                    primary: "#fff",
                    secondary: "#3f4347",
                },
            },
            selected: false
        },
    ]),
};


// methods
export const appTheme = {
    // get themes
    get: {
        // themes
        async currentTheme(): Promise<Theme | undefined> {
            return themeOptions.themes.value.find(item => item.selected === true);
        },
        async allThemes(): Promise<Theme[]> {
            return themeOptions.themes.value;
        },
        async currentColor(): Promise<Color | undefined> {
            return themeOptions.colors.value.find(item => item.selected === true);
        },
        async allColors(): Promise<Color[]> {
            return themeOptions.colors.value;
        },
    },

    // set themes
    set: {
        // theme
        async theme(newTheme: string): Promise<void> {
            // disable old theme
            const findOldTheme = themeOptions.themes.value.find(item => item.selected === true);
            findOldTheme!.selected = false;

            // enable new theme
            const findNewTheme = themeOptions.themes.value.find(item => item.name === newTheme);
            findNewTheme!.selected = true;
        },

        // color
        async color(newColor: string): Promise<void> {
            // disable old color
            const findOldColor = themeOptions.themes.value.find(item => item.selected === true);
            findOldColor!.selected = false;

            // enable new color
            const findNewColor = themeOptions.themes.value.find(item => item.name === newColor);
            findNewColor!.selected = true;
        },
    }
}