function exerciseOfTheDay() {
    let exercise = "";
  
    return function(name) {
      exercise = name;
      console.log(`Today's exercise: ${exercise}`);
    };
  }
  
  const exercise = exerciseOfTheDay();
  
  console.log(exercise("Running")); // Today's exercise: Running
  console.log(exercise("Swimming")); // Today's exercise: Swimming
  console.log(exercise("Dancing")); // Today's exercise: Dancing
  console.log(exercise("Fencing")); // Today's exercise: Fencing