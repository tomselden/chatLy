import { DoubleBounce } from "better-react-spinkit"

function Loading() {
    return (
        <center style={{display:"grid", placeItems:"center",height:"100vh"}}>
            <div>
                <img 
                src="/logo.png" 
                alt="logo"
                height="200px"
                style={{marginBottom:10}}
                />
                <DoubleBounce color="blue" size={100} /> 
            </div>
        </center>
    )
}

export default Loading
