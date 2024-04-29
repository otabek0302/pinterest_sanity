export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'birthday',
      title: 'Birthday',
      type: 'datetime',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    },
  ],
}
