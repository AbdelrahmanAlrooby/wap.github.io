function Student(firstName, lastName, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};
Student.prototype.computeAverageGrade = function () {
  return this.grades.reduce(
    (sum, current, index, array) => sum + current / array.length,
    0
  );
};
const student1 = new Student("Abdelrahman", "Mohamed");
student1.inputNewGrade(92);
student1.inputNewGrade(90);
student1.inputNewGrade(85);
student1.inputNewGrade(98);
const student2 = new Student("Abdalla", "Mohamed");
student2.inputNewGrade(99);
student2.inputNewGrade(80);
student2.inputNewGrade(85);
student2.inputNewGrade(72);
const students = [student1, student2];
const result = students.reduce(
  (average, stu, index, array) =>
    average + stu.computeAverageGrade() / array.length,
  0
);
console.log(result);