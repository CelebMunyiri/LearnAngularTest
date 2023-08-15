import { FirstTestComponent } from "./first-test.component"

describe("First test",()=>{
  let component:FirstTestComponent;

  beforeEach(async ()=>{
    component=new FirstTestComponent()
  })
  it("Explains Matchers",()=>{
    expect(component).toBeTruthy();
  })
  it('Should check if title exists',()=>{
expect(component.title).toEqual('This is a title')
  })
  it("adds two numbers",()=>{
    let a:number=5
    let b:number=8
    let sum=a+b
    expect(component.sum(a,b)).toEqual(sum)
  })
  /**
   * 
   * It explains more on using comments
   */
  
})