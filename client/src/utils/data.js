export const searchQuery = async (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
         postedBy -> {
            _id,
            username,
            picture
         },
         save: []{
            _key,
            postedBy -> {
                _id,
                username,
                image
            },
         },
    }`;
  return query;
};

export const fetchMyPins = async (id) => {
  const query = `*[_type == "pin" && userId match '${id}*'] | order(_createdAt desc){
      image {
          asset -> {
              url
          }
      },
      _id,
      title,
      description,
      destination,
      userId,
      category,
      tags,
      postedBy -> {
          _id,
          username,
          picture
       },
    }`;

  return query;
};

export const fetchMySavedPins = async (id) => {
  const query = `*[_type == 'pin' && '${id}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        username,
        picture
      },
      save[]{
        postedBy->{
          _id,
          username,
          picture
        },
      },
    }`;
  return query;
};

export const feedQuery = `*[_type == 'pin'] | order(_createdAt, desc){
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
     postedBy -> {
        _id,
        username,
        picture,
     },
     save[]{
        _key,
        postedBy -> {
            _id,
            username,
            picture
        },
     },
}`;

export const fetchAllCategories = `*[_type == 'category']{
    _id,
    title,
}`;

export const fetchCategory = (slug) => {
  const query = `*[_type == 'category' && title match '${slug}*']{
    _id,
    title,
    description
  }`;

  return query;
};

export const fetchPinByCategory = (slug) => {
  const query = `*[_type == 'pin' && category match '${slug}*'] | order(_createdAt desc){
    image {
      asset -> {
          url
      }
  },
  _id,
  title,
  description,
  destination,
  userId,
  category,
  tags,
  postedBy -> {
      _id,
      username,
      picture
   },
  }`;

  return query;
};

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      description,
      category,
      tags,
      destination,
      postedBy->{
        _id,
        username,
        picture
      },
     save[]{
        _key,
        postedBy->{
          _id,
          username,
          picture
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          username,
          picture
        },
      }
    }`;
  return query;
};

export const pinDetailMorePinQuery = async (pin) => {
  const query = `*[_type == "pin" && category == '${pin?.category}' && _id != '${pin?._id}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    description,
    category,
    tags,
    destination,
    postedBy->{
      _id,
      username,
      picture
    },
   save[]{
      postedBy->{
        _id,
        username,
        picture
      },
    },
  }`;
  return query;
};
export const fetchPinsHero = `*[_type == 'pin'] | order(_createdAt, desc){
  image {
      asset -> {
          url
      }
  },
  _id,
  destination,
   postedBy -> {
      _id,
      username,
      picture,
   },
   save[]{
      _key,
      postedBy -> {
          _id,
          username,
          picture
      },
   },
}`;
