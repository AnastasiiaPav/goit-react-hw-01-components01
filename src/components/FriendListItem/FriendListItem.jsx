import propTypes from 'prop-types' ;
import { Name, Img, Form, Online } from './FriendsListItem.styled';

export const FriendsItem =  ({ avatar, name, isOnline, id}) => {
    return(
    <Form >
  <Online>{isOnline}</Online>
  <Img src={avatar} alt="User avatar"/>
  <Name>{name}</Name>
</Form>
    )
};

FriendsItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
  };