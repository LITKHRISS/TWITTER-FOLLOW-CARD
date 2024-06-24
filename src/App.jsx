import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
   {
    userName: 'litkhriss', 
    name: 'Christopher Mordan',
    isFollowing: true
   },
   {
    userName: 'midudev', 
    name: 'Miguel Angel Duran',
    isFollowing: true
   },
   {
    userName: 'pheralb', 
    name: 'Pablo H.',
    isFollowing: false
   },
   {
    userName: 'PacoHdezs', 
    name: 'Paco Hdez',
    isFollowing: true
   },
   {
    userName: 'TMChein', 
    name: 'Tomas',
    isFollowing: false
   },
   {
    userName: 'cammy.sanchez', 
    name: '𝐂𝐚𝐦𝐢𝐥𝐚 𝐒á𝐧𝐜𝐡𝐞𝐳',
    isFollowing: false
   }


]

export function App () {
  return (
    <section className="App">
      {
      
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
            )
          })
        }
    </section>     
    ) 
}