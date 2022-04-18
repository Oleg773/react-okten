import './User.css';

export const User = ({ user }) => {
    return (
        <div className={user.id % 2 ? 'brown' : 'orchid'}>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.name}</span>
            <hr/>
        </div>
    );
}