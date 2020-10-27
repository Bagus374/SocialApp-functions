let db = {
    users: [
        {
            userId: 'vVsOpIXYcRgfXfoj78A3yvLxNib2',
            email: 'user5@gmail.com',
            handle: 'user5',
            createdAt: '2020-09-03T02:56:07.133Z',
            imageUrl: 'image.png',
            bio: 'Hello, my name is user,nice to meet you',
            website: 'https://user.com',
            location: 'Indonesia, ID'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-08-31T10:51:06.551Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
          userHandle: 'user',
          screamId: 'kdjsfgdksuufhgkdsufky',
          body: 'nice one mate!',
          createdAt: '2019-03-15T10:59:52.798Z'
        }
    ],
    notifications: [
      {
        recipient: 'user',
        sender: 'john',
        read: 'true | false',
        screamId: 'hdjhdhedjksissd',
        type: 'like | comment',
        createdAt: '2020-03-15T10:59:52.798Z'
      }
    ]
}

const userDetails = {
    // Redux data
    credentials: {
      userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'Lonodn, UK'
    },
    likes: [
      {
        userHandle: 'user',
        screamId: 'hh7O5oWfWucVzGbHH2pa'
      },
      {
        userHandle: 'user',
        screamId: '3IOnFoQexRcofs5OhBXO'
      }
    ]
  };