export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
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
      type: 'url',
    },
    {
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    },
  ],
}
