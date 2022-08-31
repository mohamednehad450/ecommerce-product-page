import { useEffect, useRef } from "react"


const { floor, round, max, fround } = Math
const toDecimal = (n: number, d: number) => {
    const decimal = round((fround(n) - floor(fround(n))) * (10 ** d)) + ''
    return `${floor(fround(n))}.${"0".repeat(max(0, d - decimal.length)) + decimal}`
}
const toPercent = (n: number) => round((n * 100)) + "%"



/**
 * Hook that alerts clicks outside of the passed ref
 * source: https://stackoverflow.com/a/42234988
 */
const useOutsideAlerter = (onClickOutside: () => void) => {
    const ref = useRef<any>(null)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside()
            }
        }
        // Bind the event listener
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [ref]);
    return ref
}



export {
    toDecimal,
    toPercent,
    useOutsideAlerter,

}