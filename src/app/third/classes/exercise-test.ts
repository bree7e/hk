class ExerciseTest {
  constructor (
    private exercises: Exercise[],
    private storage: ExerciseStorage
  ) {}

  public save(): void {
    this.storage.save(this.exercises);
  }

  public load(): void {
    this.exercises = this.storage.load();
  }

  get points(): number {
    const reducer = (sum: number, exercise: Exercise) => sum + exercise.calculate();
    return this.exercises.reduce(reducer, 0);
  }
}
