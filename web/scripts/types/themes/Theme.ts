export type Theme = {
    name: string,
    palette: {
        main: string,
        border: string,
        text: {
            primary: string,
            secondary: string
        }
    },
    selected: boolean
}