public class VictoryAffinity {
    public static double vectorAffinity(int[] xs, int[] ys) {
        int minLength = Math.min(xs.length, ys.length);
        int maxLength = Math.max(xs.length, ys.length);
        if(maxLength == 0) {
            return 1.0;
        }
        int matches = 0;

        for (int i = 0; i < minLength; i++) {
            if (xs[i] == ys[i]) {
                matches++;
            }
        }

        return (double) matches / maxLength;
    }
}
