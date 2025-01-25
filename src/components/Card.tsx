

export interface ICardProps {
    title:string,
    description:string
}
export const Card = ({
    title, 
    description
}:ICardProps) => {

    return (
        <div style={{backgroundColor:"lightblue", border:"2px solid gray", color:"black"}}>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
    )
}