import CardInline from '../components/CardInline';
import Avatar from '../assets/3d_avatar.png';

function Profile() {
  const contacts = [
    {
      name: 'plirapli.vercel.app/',
      url: 'https://plirapli.vercel.app/',
      type: 'personal website',
      iconPath: 'mdi:web',
    },
    {
      name: 'Plirapli',
      url: 'https://github.com/plirapli/',
      type: 'github',
      iconPath: 'bxl:github',
    },
    {
      name: 'Muhammad Rafli',
      url: 'https://linkedin.com/in/mrafli/',
      type: 'linkedin',
      iconPath: 'bxl:linkedin-square',
    },
  ];

  return (
    <div className='h-full flex flex-col'>
      <div className='p-5'>
        <h1 className='text-heading text-black text-center'>Profile</h1>
      </div>
      <div className='flex-1 mt-34 p-5 bg-primary-gradient rounded-t-large shadow-container'>
        <div className='w-full flex justify-center -mt-40'>
          <img className='w-52' src={Avatar} alt='' />
        </div>
        <div className='text-white text-center'>
          <h1 className='text-heading'>Muhammad Rafli</h1>
          <p>mrafli.work@gmail.com</p>
        </div>
        <div className='mt-4 grid grid-cols-1 gap-4'>
          {contacts.map((contact, i) => (
            <CardInline
              key={i}
              title={contact.name}
              subtitle={contact.type}
              icon={contact.iconPath}
              url={contact.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
