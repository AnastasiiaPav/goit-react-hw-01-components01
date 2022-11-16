import propTypes from 'prop-types'

export const User = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <p class={username}></p>
                <p class={tag}></p>
                <p class={location}></p>
            </div>

            <ul class="stats">
                <li>
                    <span class={followers}>Followers 👯‍♀️</span>
                    <span class="quantity"></span>
                </li>
                <li>
                    <span class={views}>Views 👁‍🗨</span>
                    <span class="quantity"></span>
                </li>
                <li>
                    <span class={likes}>Likes 🖤</span>
                    <span class="quantity"></span>
                </li>
            </ul>
        </div>
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