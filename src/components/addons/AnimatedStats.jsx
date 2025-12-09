'use client'

import { useEffect, useRef } from "react";

function useCountUp(end, duration = 2) {
    const ref = useRef();
    useEffect(() => {
        let start = 0;
        const step = Math.ceil(end / (duration * 60));
        let current = start;
        const interval = setInterval(() => {
            current += step;
            if (current >= end) {
                current = end;
                clearInterval(interval);
            }
            if (ref.current) ref.current.textContent = current;
        }, 1000 / 60);
        return () => clearInterval(interval);
    }, [end, duration]);
    return ref;
}

export default function AnimatedStats({ stats }) {
    return (
        <div className="flex gap-10 justify-center items-center py-8">
            {stats.map(({ label, value }, i) => {
                const ref = useCountUp(value);
                return (
                    <div key={i} className="flex flex-col items-center">
                        <span ref={ref} className="text-4xl font-bold text-blue-600">0</span>
                        <span className="text-gray-500 text-sm mt-2">{label}</span>
                    </div>
                );
            })}
        </div>
    );
}
