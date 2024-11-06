export const scrollDetails = {
    // return if scroll has or not padding
    scrollPadding: async (element: HTMLElement): Promise<boolean> => {
        if(element) return element.scrollHeight > element.clientHeight;
        else return false;
    }
}