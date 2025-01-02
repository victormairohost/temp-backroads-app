import { pageLink } from "../data"
import PageLink from "./PageLink"
export const PageLinks = ({parentClass,itemClass}) => {
  return (
     <ul className={parentClass} id="nav-links">
              {pageLink.map((link)=>{
    return (
    <PageLink key={link.id} link={link} itemClass={itemClass} />
    )
              })}
            </ul>
  )
}