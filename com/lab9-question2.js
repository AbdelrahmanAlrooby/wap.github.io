class Question {
    constructor(qid, answer) {
      this.qid = qid;
      this.answer = answer;
    }
  
    checkAnswer(answer) {
      return this.answer === answer;
    }
  }
  
  class Student {
    constructor(studentId) {
      this.studentId = studentId;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push(question);
    }
  }
  
  class Quiz {
    constructor(questions, students) {
      this.questions = new Map();
      questions.forEach((q) => this.questions.set(q.qid, q.answer));
      this.students = students;
    }
  
    scoreStudentBySid(studentId) {
      const student = this.students.find((s) => s.studentId === studentId);
      return student.answers.reduce((sum, currentQuestion) => {
        if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
          sum += 1;
        }
        return sum;
      }, 0);
    }
  
    getAverageScore() {
      const totalStudents = this.students.length;
      const totalScores = this.students.reduce((accumulator, student) => {
        return accumulator + this.scoreStudentBySid(student.studentId);
      }, 0);
      return totalScores / totalStudents;
    }
  }
  
  const questions = [
    new Question(1, "b"),
    new Question(2, "a"),
    new Question(3, "b"),
  ];
  
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, "a"));
  student1.addAnswer(new Question(3, "b"));
  student1.addAnswer(new Question(1, "b"));
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, "b"));
  student2.addAnswer(new Question(2, "a"));
  student2.addAnswer(new Question(1, "d"));
  
  const students = [student1, student2];
  const quiz = new Quiz(questions, students);
  
  let scoreForStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreForStudent10);
  
  let scoreForStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreForStudent11);
  
  let average = quiz.getAverageScore();
  console.log(average);
  