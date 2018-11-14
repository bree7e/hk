abstract class ExerciseStorage {
  abstract save(exerciseList: Exercise[]): void;
  abstract load(); // :Exercise[]
}

class LocalStorage extends ExerciseStorage {
  save(exerciseList: Exercise[]): void {}
  load() {}
}

class APIStorage extends ExerciseStorage {
  save(exerciseList: Exercise[]): void {}
  load() {}
}

class InMemoryStorage extends ExerciseStorage {
  save(exerciseList: Exercise[]): void {}
  load() {}
}
