import axios from "axios";

const Functions = () => {

    //1. Basic Function with Typed Parameters and Return Type
    function add(a: number, b: number): number {
        return a + b;
    }
    const result = add(2, 3); // result is inferred as number
    console.log(result)

    //2. Anonymous Functions and Arrow Functions
    const multiply = (x: number, y: number): number => x * y;
    const res = multiply(3, 5);
    console.log("multiply", res)

    //3. Functions with Optional and Default Parameters
    function greet(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}!`;
    }

    console.log(greet("Alice")); // "Hello, Alice!"
    console.log(greet("Bob", "Hi")); // "Hi, Bob!"

    //4. Function Overloading
    function format(value: number): string;
    function format(value: Date): string;
    function format(value: number | Date): string {
        if (typeof value === "number") {
            return value.toFixed(2);
        } else {
            return value.toISOString();
        }
    }

    console.log(format(123.456)); // "123.46"
    console.log(format(new Date())); // e.g., "2023-01-01T00:00:00.000Z"

    //5. Asynchronous Functions with Promise Return Type

    // async function fetchData(url: string): Promise<string> {
    //     const response = await fetch(url);
    //     const data = await response.text();
    //     return data;
    // }

    // fetchData("https://jsonplaceholder.typicode.com/todos/1")
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
// OR 

interface User {
  id: number;
  name: string;
  email: string;
}
async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
  }
  
  // Using fetchData with different types

  fetchData<User[]>("https://jsonplaceholder.typicode.com/users")
    .then(users => console.log(users))
    .catch(error => console.error(error.message));
  

    //6. Void and Never Types in Functions
    function logMessage(message: string): void {
        console.log(message);
      }
      
      function throwError(message: string): never {
        throw new Error(message);
      }
      
      logMessage("This is a log message."); // Logs the message
      // throwError("This is an error."); // Throws an error and never returns
      

      //7. Rest Parameters with TypeScript
      function sum(...numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc + curr, 0);
      }
      
      const total = sum(1, 2, 3, 4, 5); // total is 15
      console.log("total ",total)
      
      //8. Generic Functions
      function identity<T>(value: T): T {
        return value;
      }
      
      const num = identity<number>(42); // TypeScript infers num as number
      const str = identity<string>("Hello"); // TypeScript infers str as string
      


      //8. Typed Callback Functions

      function applyOperation(
        a: number,
        b: number,
        operation: (x: number, y: number) => number
      ): number {
        return operation(a, b);
      }
      
      const result1 = applyOperation(5, 10, (x, y) => x - y); // result is 15
      console.log(result1)
      
    return (
        <>

        </>
    )
}
export default Functions;