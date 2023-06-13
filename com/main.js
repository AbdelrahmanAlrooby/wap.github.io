let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    function f(student)
    {
        console.log(this.title + ": " + student);


    }
    let f2=f.bind(this);
    this.students.forEach(elem=>f2(elem));
  }
};
group.showList();
