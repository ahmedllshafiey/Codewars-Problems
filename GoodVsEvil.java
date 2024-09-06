public class GoodVsEvil {

    // The worth of each race on the side of good
    private static final int[] GOOD_WORTH = {1, 2, 3, 3, 4, 10}; // Hobbits, Men, Elves, Dwarves, Eagles, Wizards
    // The worth of each race on the side of evil
    private static final int[] EVIL_WORTH = {1, 2, 2, 2, 3, 5, 10}; // Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards

    public static String battle(String goodAmounts, String evilAmounts) {
        int sumGood = calculateTotalWorth(goodAmounts.split(" "), GOOD_WORTH);
        int sumEvil = calculateTotalWorth(evilAmounts.split(" "), EVIL_WORTH);

        if (sumGood > sumEvil) {
            return "Battle Result: Good triumphs over Evil";
        } else if (sumGood < sumEvil) {
            return "Battle Result: Evil eradicates all trace of Good";
        } else {
            return "Battle Result: No victor on this battle field";
        }
    }

    private static int calculateTotalWorth(String[] amounts, int[] worths) {
        int totalWorth = 0;
        for (int i = 0; i < amounts.length; i++) {
            totalWorth += Integer.parseInt(amounts[i]) * worths[i];
        }
        return totalWorth;
    }

    public static void main(String[] args) {
        // Example usage
        String good = "1 2 3 4 5 6"; // Counts for Hobbits, Men, Elves, Dwarves, Eagles, Wizards
        String evil = "1 2 3 4 5 6 7"; // Counts for Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards

        System.out.println(battle(good, evil));
    }
}
