const student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade() {
    return this.grades.reduce(
      (sum, current, index, array) => sum + current / array.length,
      0
    );
  },
};
const student1 = Object.create(student);
student1.firstName = "Abdelrahman";
student1.lastName = "Mohamed";
student1.inputNewGrade(92);
student1.inputNewGrade(90);
student1.inputNewGrade(85);
student1.inputNewGrade(98);
const student2 = Object.create(student);
student2.firstName = "Abdalla";
student2.lastName = "Mohamed";
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
