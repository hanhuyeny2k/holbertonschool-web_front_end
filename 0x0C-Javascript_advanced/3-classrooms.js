function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  var students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i+1));
  }
  return students;
}

var classRoom = createClassRoom(10);