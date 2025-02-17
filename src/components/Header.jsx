import chefClaugeLogo from "../assets/chef.png"
export default function Header(){
    return(
        <>
            <header>
                <img src={chefClaugeLogo} alt="" />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}