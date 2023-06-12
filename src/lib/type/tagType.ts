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
    new ColorObj("#9AC5F4", "#373538", "#f5f5f5", "#5172A5"), //
    new ColorObj("#99DBF5", "#373538", "", ""),
    new ColorObj("#A7ECEE", "#373538", "", ""),
    new ColorObj("#FFEEBB", "#373538", "", ""),
];
