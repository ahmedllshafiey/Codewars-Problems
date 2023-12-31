import java.util.*;

public class Kata {

    public static int[] between(int a, int b) {
        List<Integer> numbers = new ArrayList<>();
        while (b >= a) {
            numbers.add(a);
            a++;
        }
        int[] result = numbers.stream().mapToInt(Integer::intValue).toArray();
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(between(1, 4)));
    }
}
