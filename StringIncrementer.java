import java.math.BigInteger;

public class StringIncrementer {
    public static String incrementString(String str) {

        String numberPart = "";
        String textPart = "";

        int i = str.length() - 1;
        while (i >= 0 && Character.isDigit(str.charAt(i))) {
            numberPart = str.charAt(i) + numberPart;
            i--;
        }

        textPart = str.substring(0, i + 1);

        if (numberPart.isEmpty()) {
            return str + "1";
        }

        int numberLength = numberPart.length();
        BigInteger incrementedNumber = new BigInteger(numberPart).add(BigInteger.ONE);

        String incrementedString = String.format("%0" + numberLength + "d", incrementedNumber);

        return textPart + incrementedString;
    }
}
