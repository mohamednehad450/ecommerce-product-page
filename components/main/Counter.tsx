import { FC } from "react";
import { IconMinus, IconPlus } from "../icons";

interface CounterProps {
    onChange: (n: number) => void
    value: number
    min?: number
    max?: number
}

const Counter: FC<CounterProps> = ({ value, onChange, min = 0, max = Infinity }) => {
    return (
        <span className='flex flex-row justify-between bg-light-grayish-blue w-full md:w-36 m-2 font-bold rounded-md'>
            <button onClick={() => onChange(Math.max(min, value - 1))} className='fill-primary-color-1 p-4 hover:opacity-70'>
                <IconMinus />
            </button>
            <p className='flex-1 text-center p-4 text-dark-blue'>
                {value}
            </p>
            <button onClick={() => onChange(Math.min(max, value + 1))} className='fill-primary-color-1 p-4 hover:opacity-70'>
                <IconPlus />
            </button>
        </span>
    )
}


export default Counter