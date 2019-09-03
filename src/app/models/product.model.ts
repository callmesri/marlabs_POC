import { plan_details1 } from "app/models/Plan_details.model";

export class Product {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public plan_details: plan_details1[];

  

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.plan_details = src.plan_details.map((i) => {
      let plan_detail = new plan_details1();
      //console.log(this.plan_details);
      plan_detail.updateFrom(i);
      
      
      return plan_detail;
    });
  //console.log(plan_details);

  }
}
