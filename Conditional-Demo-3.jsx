export default function Rainy(){
    return(
        <h1>Bring your umbrella!</h1>
    );
}
function Sunny(){
    return(
    <h1>Bring your sunglasses!</h1>
    )
}
function RainorShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
        <Rainy />
        );
    }
    return(
        <Sunny/>
    );
}
function Summer(){
    return(
        <div>
        <RainorShine
            isRainy={false}
        />
        </div>
    );
}