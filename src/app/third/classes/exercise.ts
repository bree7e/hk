abstract class Exercise {
  constructor(protected definition: string, protected maxPoints: number) {}
  abstract calculate(): number;
}

class InputExercise extends Exercise {
  constructor(
    definition,
    maxPoints = 5,
    private rightAnswer: string,
    public answer: string
  ) {
    super(definition, maxPoints);
  }
  calculate(): number {
    return this.answer === this.rightAnswer ? this.maxPoints : 0;
  }
}

class SelectExercise extends Exercise {
  constructor(
    definition,
    maxPoints = 5,
    private rightAnswer: string[],
    public answer: string[]
  ) {
    super(definition, maxPoints);
  }
  calculate(): number {
    const reducer = (sum: number, attempt) => this.rightAnswer.includes(attempt) ? ++sum : sum;
    const a = this.answer.reduce(reducer, 0);
    const b = this.rightAnswer.length;
    return (a / b) * this.maxPoints;
  }
}

