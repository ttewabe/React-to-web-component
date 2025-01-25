import { createElement } from "react"
import { Card } from "./Card"
import { createRoot } from "react-dom/client"


export class CardWebComponent extends HTMLElement{
constructor(){
    super()
}
connectedCallback(){
    createRoot(this).render(createElement(
        Card, 
        {title:this.getAttribute("title")!,
            description:this.getAttribute("description")!
        }
    ))
}
}