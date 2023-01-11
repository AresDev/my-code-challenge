import { useEffect, useState } from 'react';

function getValue(key: string, initialValue: string | Function){
    const result = JSON.parse(localStorage.getItem(key)!);

    if(result){
        return result;
    }

    if(initialValue instanceof Function) return initialValue()
    return initialValue;
}

export default function useLocalStorage(key:string, initialValue: string | Function){
    const [value, setValue] = useState(()=> getValue(key, initialValue));

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}