import { FC, ReactNode } from "react"

interface IconProps {
    width?: number
    height?: number
}


const IconCart: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "22"} height={height || "20"} viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="inherit" fill-rule="nonzero" />
    </svg>
)


const IconPlus: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "12"} height={height || "12"} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use fill="inherit" fill-rule="nonzero" xlinkHref="#b" /></svg>
)

const IconMinus: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "12"} height={height || "4"} viewBox="0 0 12 4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs><use fill="inherit" fill-rule="nonzero" xlinkHref="#a" /></svg>
)

const IconClose: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "14"} height={height || "15"} viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="inherit" fill-rule="evenodd" /></svg>
)

const IconNext: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "13"} height={height || "18"} viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="inherit" strokeWidth="3" fill="none" fill-rule="evenodd" /></svg>
)

const IconPrevious: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "13"} height={height || "18"} viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="inherit" strokeWidth="3" fill="none" fill-rule="evenodd" /></svg>
)

const IconDelete: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "14"} height={height || "16"} viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" /></svg>
)


const IconMenu: FC<IconProps> = ({ width, height }) => (
    <svg width={width || "16"} height={height || "15"} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="inherit" fill-rule="evenodd" /></svg>
)



export {
    IconCart,
    IconPlus,
    IconMinus,
    IconClose,
    IconNext,
    IconPrevious,
    IconDelete,
    IconMenu,
}