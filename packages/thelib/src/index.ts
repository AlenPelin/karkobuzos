import { weirdSum } from '@altola/zzzlerna-common';

export function weridPrint(name: string, price: number, count: number) {
    let sum = 0;
    for (let i = 0; i < count; ++i) {
        sum = weirdSum(sum, price);
    }

    console.log(`${count}x ${name} costs $${sum} (maybe)`);
}
