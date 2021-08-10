export const dashboardMock = {
  communities: {
    '-MLDOXs3p35DEHg0gdUU': {
      address: 'Recife',
      bicycles: {
        '-MS4H_DMFvAy-28kxYs8': {
          available: true,
          created_date: '27/01/2021',
          id: '-MS4H_DMFvAy-28kxYs8',
          inUse: true,
          name: 'Bike 12',
          order_number: 1,
          path: 'bike',
          photo_path:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_1611775228.jpg?alt=media&token=301671bd-2300-464a-8edf-6e568b999d59',
          photo_thumbnail_path:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_thumb_1611775228.jpg?alt=media&token=13a475ee-d034-419e-b65e-b35fcd1c1e39',
          serial_number: '12345',
        },
      },
      created_date: 1604411814596,
      description: 'Comunidade em Recife',
      id: '-MLDOXs3p35DEHg0gdUU',
      name: 'Comunidade x',
      org_email: 'joao@joao.com',
      org_name: 'Joao',
      users: {
        '-MO7tFtSLOeFZcCLndyf': {
          address: 'teste',
          available: true,
          created_date: '08/01/2021',
          doc_number: 1212122,
          doc_picture:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540720.jpg?alt=media&token=b76f7915-b4d7-4eef-9b6b-473d54487f6e',
          doc_picture_back:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540726.jpg?alt=media&token=9e0559bd-109e-474e-bf9a-cea2656782be',
          doc_type: 0,
          gender: 3,
          id: '-MO7tFtSLOeFZcCLndyf',
          name: 'felix',
          path: 'users',
          profile_picture:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540707.jpg?alt=media&token=e5e90912-8766-462b-855c-91c3f3b05754',
          profile_picture_thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540707.jpg?alt=media&token=e5e90912-8766-462b-855c-91c3f3b05754',
          residence_proof_picture:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540713.jpg?alt=media&token=98710c44-7a74-49b1-a5af-9ed030957140',
        },
      },
      withdrawals: {
        '-MQXyFObZn8-YjuqPgrh': {
          available: true,
          bicycle_id: '-MS4H_DMFvAy-28kxYs8',
          bicycle_image_path:
            'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607603833.jpg?alt=media&token=e1730c4e-6114-4925-b9bd-8836b8e788de',
          bicycle_name: 'zteste1234',
          bicycle_rating: 'Ótima',
          created_date: 1610125699002,
          destination: '',
          id: '-MQXyFObZn8-YjuqPgrh',
          modified_time: 1610126017503,
          path: 'withdrawals',
          rent: false,
          returned_date: 1610126017503,
          trip_reason: 'Fazer compras',
          user: {
            address: 'teste',
            available: true,
            created_date: '08/01/2021',
            doc_number: 1212121,
            doc_picture:
              'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540720.jpg?alt=media&token=b76f7915-b4d7-4eef-9b6b-473d54487f6e',
            doc_picture_back:
              'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540726.jpg?alt=media&token=9e0559bd-109e-474e-bf9a-cea2656782be',
            doc_type: 0,
            gender: 3,
            id: '-MO7tFtSLOeFZcCLndyf',
            name: 'felixx',
            path: 'users',
            profile_picture:
              'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540707.jpg?alt=media&token=e5e90912-8766-462b-855c-91c3f3b05754',
            profile_picture_thumbnail: '',
            residence_proof_picture:
              'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/1607540713.jpg?alt=media&token=98710c44-7a74-49b1-a5af-9ed030957140',
          },
          user_id: '-MO7tFtSLOeFZcCLndyf',
          user_image_path: '',
          user_name: 'felixx',
        },
      },
    },
  },

  bikes: {
    '-MS4H_DMFvAy-28kxYs8': {
      available: true,
      communityId: '-MLDOXs3p35DEHg0gdUU',
      createdDate: '09/08/2021',
      id: '-MS4H_DMFvAy-28kxYs8',
      inUse: false,
      name: 'Bike 12',
      orderNumber: 12345,
      path: 'bikes',
      photoPath:
        'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_1628523317.jpg?alt=media&token=03ebd3b4-723d-4c4e-8dca-7c647ef2cbf3',
      photoThumbnailPath:
        'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_thumb_1628523317.jpg?alt=media&token=fa5fa903-6c62-4d61-8378-62e624030a01',
      serialNumber: '12345',
      withdrawToUser: '',
    },
  },
};
