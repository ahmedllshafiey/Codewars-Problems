public class MaxRotate {

    public static long maxRot(long n) {
        String s = Long.toString(n);
        String maxNum = s;
        
        for (int i = 0; i < s.length(); i++) {
            String rotated = s.substring(0, i) + s.substring(i + 1) + s.charAt(i);
            if (Long.parseLong(rotated) > Long.parseLong(maxNum)) {
                maxNum = rotated;
            }
            s = rotated;
        }
        
        return Long.parseLong(maxNum);
    }

    public static void main(String[] args) {
        System.out.println(maxRot(56789L));  
        System.out.println(maxRot(38458215L));  
    }
}