import '../../Styles/SearchSide.css'

export default function SearchSide(){
    return(
        <div className = "SearchSide">
                <h1 className = "SearchSide-Title">Choose Your Path</h1>

                <form className = "SearchSide-Form">
                    <input type = "text" className='SearchSide-Form-StartPage' placeholder = "Start..."/>
                    <input  type = "text" className='SearchSide-Form-EndPage' placeholder = "End..."/>
                    <button className='SearchSide-Form-Button'>Start</button>            
                </form> 
        </div>
    )
}
    