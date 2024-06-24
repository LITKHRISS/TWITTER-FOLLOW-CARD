import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className="App">
        <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
            Miguel Angel Duran
        </TwitterFollowCard>    

        <TwitterFollowCard userName="pheralb">
            Pablo Hernandez
        </TwitterFollowCard>
 
        </section>
        
    ) 
}