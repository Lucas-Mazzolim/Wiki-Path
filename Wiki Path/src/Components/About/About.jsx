import Header from "../Universal Components/Header"
import '../../Styles/About.css' 

export default function About(){
    return(
        <div className = "About">
                <Header PageURL = {"/"} PageName = {"Home"} />
                <div className = "About-SidesWraper">
                    <div className = "About-SidesWraper-Text">
                        <h1 className = "About-SidesWraper-Text-Title">What is Wiki Path?</h1>
                        <p className = "About-SidesWraper-Text-MainText">The game is inspired by the "six degrees of separation" rule, which suggests that any two people on Earth are connected by, at most, six handshakes. 
                           This concept can be applied to almost any network of interconnected objects - including websites. Here, it’s used to explore Wikipedia, finding the 
                           shortest path between any two articles you choose. Try it with your favorite topics and see how everything is connected. Have fun!</p>
                    </div>
                    <div className = "About-SideWraper-SocialMedias">
                        {/* Nodes com as redes sociais */}
                    </div>
                </div>
            </div>
    )
}