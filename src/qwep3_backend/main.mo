// import Time "mo:base/Time";
import Debug "mo:base/Debug";

actor qwep {
  // just prepping the functions for now
  public query func retrieveJsonBlob(): async Int {
    return 0;
  };

  public func updateJsonBlob() {
    var b = 1;
  };

  public func removeJsonBlob() {
    var a = 1;
  };

  public func initializeJsonBlob() {
    var c = 1;
  };

  public query func testButton(): async Text {
    return "Scary stuff is happening but the button is working!"
  };

  public func testButton2() {
    Debug.print("Just in case I need this instead of a return to test the button");
  };
  // test
}

