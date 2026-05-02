import React from 'react';

const Profile = ({info}) => {
    return (
        <div className='flex justify-between h-48 w-full rounded bg-black'>
            <div className='w-48 h-48 bg-pink-800 rounded-full'>
                Image
            </div>
            <div className='w-2/3 bg-red-100'>
                Info
            </div>
        </div>
    );
};

export default Profile;
