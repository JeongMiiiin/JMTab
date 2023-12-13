/// <reference types="react" />
export type TabType = {
    title: string;
    contents: JSX.Element;
};
declare const Tab: ({ initIdx, TabList }: {
    initIdx: number;
    TabList: TabType[];
}) => import("react/jsx-runtime").JSX.Element;
export default Tab;
