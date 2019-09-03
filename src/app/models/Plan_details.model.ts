export class plan_details1 {
  public name: string;
  public percentage: number;

  public updateFrom(src: plan_details1): void {
    this.name = src.name;
    this.percentage = src.percentage;
  }
}
