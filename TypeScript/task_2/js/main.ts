interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Baptiste Rousseau travaille à distance";
  }

  getCoffeeBreak(): string {
    return "Baptiste prend une pause café";
  }

  workDirectorTasks(): string {
    return "Baptiste s'occupe des tâches de direction";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Maxence Potier ne peut pas télétravailler";
  }

  getCoffeeBreak(): string {
    return "Maxence ne peut pas prendre de pause";
  }

  workTeacherTasks(): string {
    return "Maxence donne ses cours";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Tests
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
