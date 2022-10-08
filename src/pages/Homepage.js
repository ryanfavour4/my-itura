import Bookatestsection from "../components/Bookatestsection";
import Costomhealthtest from "../components/Costomhealthtest";
import Downloadourapp from "../components/Downloadourapp";
import Herosection from "../components/Herosection";
import Howmyituraworks from "../components/Howmyituraworks";

const Homepage = () => {
    return (
        <>
            <header>
                 <Herosection/>
            </header>
            <main>
                <Howmyituraworks/>
                <Bookatestsection/>
                <Costomhealthtest/>
                <Downloadourapp/>
            </main>
        </>
    );
}

export default Homepage;