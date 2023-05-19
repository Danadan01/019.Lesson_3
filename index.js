class Student {
  constructor(firstName, secondName, yearOfBirth, marks) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks;
    this.attendance = new Array(25);
  }

  getAge() {
    let date = new Date();
    let age = date.getFullYear() - this.yearOfBirth;
    return age;
  }

  getAverageMark() {
    let sum = 0;
    this.marks.forEach(elem => {
      sum += elem;
    });
    return sum / this.marks.length
  }

  present() {
    if (typeof this.attendance[this.attendance.length-1] !== "boolean"){
      this.attendance.unshift(true);
      this.attendance.pop();
    }
  }

  absent() {
    if (typeof this.attendance[this.attendance.length-1] !== "boolean"){
      this.attendance.unshift(false);
      this.attendance.pop();
    }
  }

  summary() {
    let attendedClasses = 0;
    this.attendance.forEach(elem => {
      if (elem === true) {
        attendedClasses++;
      }
    });

    let attendanceIndex = attendedClasses / 25;

    if (attendanceIndex >= 0.9 && this.getAverageMark() >= 90) {
      return "Молодець!"
    } else if (attendanceIndex >= 0.9 || this.getAverageMark() >= 90) {
      return "Добре, але можна краще"
    } else {
      return "Редиска!"
    }
  }
}


let student1 = new Student("Dan", "Petrenko", 2001, [53, 89, 100, 34, 27, 10, 78, 55, 87]);
console.log(student1.getAverageMark());
console.log(student1.getAge());

student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();

console.log(student1.attendance);
console.log(student1.summary());