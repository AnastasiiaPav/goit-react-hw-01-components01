import propTypes from 'prop-types'
import { FriendsItem } from 'components/FriendListItem/FriendListItem'
import { FriendList } from './SetFriends.styled'


export const SetFriends = ({ friends }) => {
    return(
        <FriendList>
     { friends.map(({ avatar, name, isOnline, id }) => 
     <div key={id}>
     <FriendsItem 
     avatar={avatar} 
     name={name} 
     isOnline={isOnline} />
    </div> )}
        </FriendList>
    )
}

SetFriends.propTypes= {
    friends: propTypes.array
}