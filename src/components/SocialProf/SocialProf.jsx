import propTypes from 'prop-types'
import { Profile, Photo, UserName } from './SocialProf.styled';

export const User = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <Profile>
            <div className="description">
                <Photo
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                    width="100"
                />
                <UserName>{username}</UserName>
                <p className={tag}>🐶{tag}</p>
                <p className={location}>🌐{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className={followers}>Followers 👯‍♀️{followers}</span>
                    <span className="quantity"></span>
                </li>
                <li>
                    <span className={views}>Views 👁‍🗨 {views}</span>
                    <span className="quantity"></span>
                </li>
                <li>
                    <span className={likes}>Likes 🖤{likes}</span>
                    <span className="quantity"></span>
                </li>
            </ul>
        </Profile>
    );
};

User.propTypes = {
    username: propTypes.string,
    avatar: propTypes.string,
    location: propTypes.string,
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
}