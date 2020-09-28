var studentHogwarts = (function () {
  var privateScore = 0;
  var name = null;
  var changeScoreby = function (points) {
    privateScore = privateScore + points
  };
  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreby(1);
    },
    penalizeStudent: function () {
      changeScoreby(-1);
    },
    getScore: function () {
      return name + ": " + privateScore;
    },
  }
}
    const harry = studentHogwarts();
    harry.setName("Harry");
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    console.log(harry.getScore());
    var draco = studentHogwarts();
    draco.setName("Draco");
    draco.rewardStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    console.log(draco.getScore());
  
