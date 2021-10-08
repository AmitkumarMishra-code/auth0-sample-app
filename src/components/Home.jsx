import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
    const { logout, user } = useAuth0()
    return (
        <div className='profile'>
            <img src={user.picture} alt={user.name} />
            <h3>Hello, {user.name}</h3>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
    )
}