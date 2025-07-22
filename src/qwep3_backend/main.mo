import Time "mo:base/Time"

actor mainActor {
  stable var time: Int = Time.now();
  var unusedVar: Int = 1;
  public query func checkTime(): async Int {
    return time;
  }
}