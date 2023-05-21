import { useEffect, useState } from 'react';
import './MainPage.css';
function MainPage({ children }) {

    const [className, setClassName] = useState("background-page");
    useEffect(() => {    // Update the document title using the browser API    
        if (document.getElementById("home_page") != null) {
            setClassName("home_page");
        }
        else {
            setClassName("background-page");
        }
    }, [children]); // des que la page est modifiee, on change le fond
    return (
        <>
            <div class={className == "home_page" ? "particle-container" : ""}>
                {className == "home_page" &&
                    <div class="particles"><span class="circle"></span><span class="circle 1"></span><span class="circle 2"></span><span class="circle 3"></span><span class="circle 4"></span><span class="circle 5"></span><span class="circle 6"></span><span class="circle 7"></span><span class="circle 8"></span><span class="circle 9"></span><span class="circle 10"></span><span class="circle 11"></span><span class="circle 12"></span><span class="circle 13"></span><span class="circle 14"></span><span class="circle 15"></span><span class="circle 16"></span><span class="circle 17"></span><span class="circle 18"></span><span class="circle 19"></span><span class="circle 20"></span><span class="circle 21"></span><span class="circle 22"></span><span class="circle 23"></span><span class="circle 24"></span><span class="circle 25"></span><span class="circle 26"></span><span class="circle 27"></span><span class="circle 28"></span><span class="circle 29"></span></div>

                }
            </div>
            <div id="main_page" className={className}>




                {children}
            </div>
        </>

    );

}
export default MainPage;