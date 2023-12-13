declare const TabBtn: ({ idx, title, activeFlag, changeTab }: {
    idx: number;
    title: string;
    activeFlag: boolean;
    changeTab: (idx: number) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default TabBtn;
