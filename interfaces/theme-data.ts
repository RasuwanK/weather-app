export interface ThemeData {
    day: string;
    night: string;
}

export interface Theme {
    bgLeft: ThemeData;
    bgRight: ThemeData;
    fgRight: ThemeData;
}