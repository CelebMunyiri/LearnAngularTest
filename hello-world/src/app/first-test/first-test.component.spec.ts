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
   * It explains more on useing strict equality
   * using toBe is more strict compared to toEqual as it checks even on data types
   */
  it("checks for exact equality",()=>{
    let data={
      name:"cohort 17"
    }

    expect(2+2).toBe(4)
    expect(data).toEqual({name:"cohort 17"})
  })
  it('checks for truthfulness',()=>{
    const x=null 
    let y
    expect(x).toBeFalsy();
    expect(y).toBeUndefined()
    expect(x).not.toBeUndefined()
  })
  it("explains matchers for numbers",()=>{
    let j=1+3
    expect(j).toBeGreaterThan(1)
    expect(j).toBeGreaterThanOrEqual(3)
    expect(j).toBeLessThanOrEqual(4)
    
  })
  /**
   * 
   * Matchers for strings
   */
  it("checks for a string",()=>{
    let cohort="cohort 17"

    expect(cohort).toMatch(/17/)
    expect(cohort).not.toMatch(/16/)
  })
  /**
   * Checks if a certain value exist in an Array
   */
  it("checks for a value in an array",()=>{
let carBrands=['BMW','Benz','Audi','Mazda']

expect(carBrands).toContain('Benz')
expect(new Set(carBrands)).toContain('BMW')

  })
  /**
   * Expections and Errors
   */
  it("Throws an error as expected in sleep method",()=>{
    
    expect(()=>component.sleep()).toThrowError()
    expect(()=>component.sleep()).toThrow()
    expect(()=>component.sleep()).toThrow(Error)
    expect(()=>component.sleep()).toThrow('You are still poor')
  })
})