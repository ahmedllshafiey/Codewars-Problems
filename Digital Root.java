public class DRoot {
    public static int digital_root(int n) {
        int sum = 0;
        String s_num = String.valueOf(n);
        String[] res = s_num.split("");
        for(String str:res) {
            sum = sum + Integer.parseInt(str);
        }

        if(sum >= 10) {
            return  digital_root(sum);
        }else {
            return sum;
        }
    }
}