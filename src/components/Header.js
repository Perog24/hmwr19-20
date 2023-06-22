import { navLinks } from "../constants"



export default function Header() {

   return (
      <header>
         <nav>
            <ul>
         {navLinks.map((link, index)=>(
            <li><a href={link.linkTo}>{link.name}</a></li>
         ))}
            </ul>
         </nav>
      </header>
   )
}