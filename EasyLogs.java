import java.lang.Math;

public class EasyLogs {

  public static double logs(double x, double a, double b) {
    return ((Math.log(a)/Math.log(x))+(Math.log(b)/Math.log(x)));
  }

  public static void main(String[] args) {

    System.out.println(logs(5,45,63));
  }

}
