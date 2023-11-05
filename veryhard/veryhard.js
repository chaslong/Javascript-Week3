class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    exercise() {
      console.log("Running is fun! - said no one ever");
    }
  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
  
    listLanguages() {
      console.log(`Languages known by ${this.name}: ${this.languages.join(", ")}`);
    }
  }
  
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("John", "Frontend Developer", 25, ["JavaScript", "CSS"]);
  
  person1.exercise(); // Running is fun! - said no one ever
  person1.fetchJob(); // Harold is a Backend Engineer
  
  c1.completeTask();
  c1.offerNewTask(); // Liana would love to take on a new responsibility.
  c1.learnLanguage("Python");
  c1.listLanguages(); // Languages known by Liana: HTML, C#, LUA, Python
  
  c2.acceptNewTask();
  c2.offerNewTask(); // Edwin can't accept any new tasks right now.
  c2.listLanguages(); // Languages known by Edwin: HTML, SASS, Ruby
  
  c3.offerNewTask(); // John would love to take on a new responsibility.