
interface GreetingProps{
    name:string
    age?:number
}


const username:string='Baburav';
// same for 

// number
// string
// arr[]
// boolean

// --------------------------------------------
interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface LinkProps {
  href: string;
  label: string;
}

type ActionProps = ButtonProps | LinkProps;// merging two diff Interface, its [OR]
// ---------------------------------------------------

interface Clickable {
  onClick: () => void;
}

interface Linkable {
  href: string;
}

type ClickableLink = Clickable & Linkable; // adding/merging 

// ----------------------------------------
// Assertion 
const myValue = "123";
const numericValue = myValue as unknown as number;
// TypeScript assumes `numericValue` is a number.
const InterfaceAndTypes:React.FC <GreetingProps>=({name,age})=>{
    
  return (
    <div>
      
    <h1>Hello, {name}!</h1>
    {age && <p>Age: {age}</p>}
    <h2>Namaste {username}</h2>
  </div>
  )
}

export default InterfaceAndTypes