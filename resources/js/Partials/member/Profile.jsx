const Profile = ({ info }) => {
    console.log(info);

    return (
        <div className='flex justify-between gap-3 w-full rounded'>
            <div className='w-1/6'>
                <img src={info.thumbnail} alt={`${info.name} cover`} className='rounded bg-cover' />
            </div>
            <div className='flex flex-col gap-5 w-5/6 py-3 bg-pink-200'>
                <span>
                    {info.name}
                </span>
                <span>
                    {info.position}
                </span>
            </div>
        </div>
    );
};

export default Profile;
