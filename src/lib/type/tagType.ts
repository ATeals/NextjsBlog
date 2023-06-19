export type tagObj = {
    tag: string;
    color: {
        text: string;
        bg: string;
        darkText: string;
        darkBg: string;
    };
};

class ColorObj {
    constructor(public bg: string, public text: string, public hoverBg: string, public hoverText: string) {}
}

export const getColor = [
    new ColorObj("#FCB9AA", "#373538", "", ""),
    new ColorObj("#FFDBCC", "#373538", "", ""),
    new ColorObj("#FFEEBB", "#373538", "", ""),
    new ColorObj("#A2E1DB", "#373538", "", ""),
    new ColorObj("#55CBCD", "#373538", "", ""),
];
