function layeredDiscountedTotal (quantity){
    const protom100tardam = 100;
    const pore100bashi = 90;
    const pore200bashi = 70;

    if(quantity <= 100){
        const total = quantity * protom100tardam;
        return total;
    }
    else if (quantity <= 200){
        const protom100= 100 * first100Price;
        const bskikoitssache = quantity - 100;
        const bskikoitssachetardam = bskikoitssache * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const bakikoitaache = quantity - 200;
        const remainingTotal = bakikoitaache* above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}