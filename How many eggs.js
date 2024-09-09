function egged(year, lifespan) {
    if (year === 0) {
        return "No chickens yet!";
    }

    let chickens = [];
    let totalEggs = 0;
    let initialEggs = 300;

    chickens.push(...Array(3).fill([initialEggs, lifespan]));

    for (let currentYear = 1; currentYear <= year; currentYear++) {
        totalEggs = 0;
        let newChickens = [];

        for (const [eggs, remainingLifespan] of chickens) {
            if (remainingLifespan > 0) {
                totalEggs += Math.floor(eggs);
                newChickens.push([Math.floor(eggs * 0.8), remainingLifespan - 1]);
            }
        }

        newChickens.push(...Array(3).fill([initialEggs, lifespan]));

        chickens = newChickens;
    }

    return totalEggs;
}