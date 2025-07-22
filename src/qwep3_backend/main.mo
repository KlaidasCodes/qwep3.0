import Time "mo:base/Time"

actor mainActor {
  stable var time = Time.now();

  public query func checkTime(): async Int {
    return time;
  }
}