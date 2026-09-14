import {
    Bell,
    BriefcaseBusiness,
    Grid3x3,
    House,
    Layers,
    MessagesSquare,
    UserRound,
    Users
} from "lucide-react";

import SearchBar from "./Searchbar/SearchBar";
import TopBarElement from "./TopBarElement/TopBarElement";
import TopBarElementWithDropDown from "./TopBarElementWithDropDown/TopBarElementWithDropDown";

import "./TopBar.css";

const TopBar = () => {

    return (
        <div className="top-bar">

            <div className="top-bar-content">

                {/* LEFT */}
                <div className="top-bar-left">

                    <img
                        className="linkedin-logo"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAbFBMVEX///8AZsgAWcUAYccAXcUAVsTn8PlpkNa8yuoAY8cAVMP1+P2Oqt4paMkAX8bA0+2YtuJiitPI0+3h6vbc5vXu9PuRseF6m9lIfc8tcszU3vLL2vCrxOijv+ZAeM4tbMoATsJVhtJtl9h+otvDELitAAAEbUlEQVR4nO2bYZeqIBCGFdBCzWpNEy2t/P//8VZbK4hawlice3j3yz16jz4xzjAzgONYWVlZWVlZWVlZWVlZWVlZfUihvyvKn5vKYueH38YRFJbZfpszlyDv+kdclm/3WWkGY1pkDBGCKaXuU9d/Y0IQy4r0y3RllAeoBRNFUZBH5ffgwkPukiG4ByJx88N3DO1vmDcO90D02Mb/PN6xGrSrbOfq+GG6Hxa8S3cnDNjPJ/EuGE+guwnjy8fo1jWZSHcTqdefwdu88NkhUbL5AF16URm8xxBeZo/XCUPKeK6LWDIzXhVr4LluXM0KuAum+m1XONjNiMfUPIMXZbMB7mrd0buPYD0TYFqpey4vUs3ixaEQWGhMYtXRJJc5MprI4+hQvo+aBVV0Zi+CxysDDg8fbiYKi7M3DDGmADxr9TnXxezPPplatKYMOiNs2o+P1kV7XXG2Iw0sHm/dOONuFLUSH7CFw4oLzLTgby3UvJhWkD585K24Em41ij5MAFN+X5jXRL5IMWhDushRCCMrIfyrjp/rwQ2gGETwkruV5sopA4LCO3T4+EpnqZ4yoAMMXrjtDBFqLeO76hkX3cK4cCE9OXhaeKeXThej731XPXMYOa+vvz1p9BJClL1++Ruqe0xIvYCgk2Y+SGsIvOSkRzGiE0SxpJiivCMQA581PJS+6A6e9fF8uWajpNXDQeK/Cw+HpjFe1YyxusbD7RCIOW4tP7WKWv2mL3Hzd6G5J1zI3R+K28vT3aGph78Q/ZbRQXLSeMHF1eX93V47Dv41FSM44wfG36CBOET0pxA5P8Gv+FDTLSCTRX8oItqFUriXZohXfKinjRZGvVEq3utOcelZMs04XzLQhsz6RhCfdUv1VHbfF3zLnqc4tyyj5xukTJfPl4PDON+gkkB60hVQN8AkcgWuyNdbinq6M1zPr1blK3tyscAgvvAif4Ff41sfs2M3/dyYwuc3BJGYoFqcHkrZ1/T5FPwjqR4TLj0JCVQq8yFdPoX4Em5bR0VCNFxJz9KOL5Pj8zWj4BuZbJRPPz5Pnt8cR/hFJ74ZLvHpz2+T8wMnFTIBoYsh8ennB5PzK6FVeP0A+WRG4tPPr3ry0xd8a5GP92CZTz8/lfN7QD6A/F6uj+D4QHqAUn05jW/s+4OoL+X6HI4PpD6X+htwfCD9Dak/BMYH0x+SDAzGB9Rf6/Yn4ewL05/s9neh+KD6u1J/HIgPqj8urS9A8UHhddZngPgA12fEOQ6GD3QJWFgfhOGDXB8U11dB+GDXV4WkE4QPegcCt74PwQe9vs+7CAAf/P4IzsJ4wV1+8HFlWIevtz6C31/C7c8Z799HF6Hgw1vuPz8vzrE/h9vfROOR9Q/SqZe5xZIn+Dz7m0zfH2b8/jrj9ycav7/T+P2xxu8vNn5/tmP6/nbH+PMBjunnKxyF8yn1R8+nOKaf73GMPx/lmH6+7C6jz+fdZfb5xl9x50M9086HPmXy+VorKysrKysrKysrKysrK6v/Wv8AfN1RyQxiXgEAAAAASUVORK5CYII="
                        alt="LinkedIn"
                    />

                    <SearchBar placeholder="" />

                </div>


                {/* RIGHT */}
                <div className="top-bar-right">

                    <TopBarElement
                        title="Home"
                        icon={<House />}
                    />

                    <TopBarElement
                        title="My Network"
                        icon={<Users />}
                    />

                    <TopBarElement
                        title="Jobs"
                        icon={<BriefcaseBusiness />}
                    />

                    <TopBarElement
                        title="Messaging"
                        icon={<MessagesSquare />}
                    />

                    <TopBarElement
                        title="Notifications"
                        icon={<Bell />}
                    />

                    <TopBarElementWithDropDown
                        title="Sevanth"
                        icon={<UserRound />}
                    />

                    <TopBarElementWithDropDown
                        title="For Business"
                        icon={<Grid3x3 />}
                    />

                    <TopBarElement
                        title="Try Premium for $0"
                        icon={<Layers />}
                    />

                </div>

            </div>

        </div>
    );
};

export default TopBar;