import { User } from './SocialProf/SocialProf';
import { Statistic } from './Statistic/Statistic';

import user from 'user.json';
import data from 'data.json';


export const App = () => {
  return (
    <>
    <User
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    /> 
    <Statistic title="Upload stats" stats={data} />
    </>
  );
};
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
