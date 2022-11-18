import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postInfo:[
            {
              id: 1,
              time: "Nov 18, 2022",
              author: "Zoe Ryszard",
              profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
              picture: "https://i.ibb.co/YZ1LH9N/img1.webp",
              text: "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh.",
              likecount: 0
            },
            {
                id: 2,
                time: "Nov 17, 2022",
                author: "Amelie Summers",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9Q4GhN.jpg",
                text: "Absolute required of reserved in offering no. How sense found our those gay again taken the.",
                likecount: 0
              },
              {
                id: 3,
                time: "Nov 16, 2022",
                author: "Rami Lacey",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9Qr6eR.jpg",
                text: "Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me",
                likecount: 0
              },
              {
                id: 4,
                time: "Nov 15, 2022",
                author: "Kwame Noble",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9QrrdJ.jpg",
                text: "Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led.",
                likecount: 0
              },
              {
                id: 5,
                time: "Nov 14, 2022",
                author: "Kierran Vo",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9QrUga.jpg",
                text: "Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity.",
                likecount: 0
              },
              {
                id: 6,
                time: "Nov 13, 2022",
                author: "Oliwia Justice",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9QrS0g.jpg",
                text: "Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated",
                likecount: 0
              },
              {
                id: 7,
                time: "Nov 12, 2022",
                author: "Anya Woodcock",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9Qr45v.jpg",
                text: "Worth of do doubt shall it their. Extensive existence up me contained he pronounce do",
                likecount: 0
              },
              {
                id: 8,
                time: "Nov 11, 2022",
                author: "Eddison Key",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9Qr45v.jpg",
                text: "Excellence inquietude assistance precaution any impression man sufficient.",
                likecount: 0
              },
              {
                id: 9,
                time: "Nov 10, 2022",
                author: "Tyreke Bouvet",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9Qr45v.jpg",
                text: "Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him.",
                likecount: 0
              },
              {
                id: 10,
                time: "Nov 9, 2022",
                author: "Bodhi York",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg",
                picture: "https://iili.io/H9QrPbp.jpg",
                text: "Interested the unaffected mrs law friendship add principles. Indeed on people do merits to.",
                likecount: 0
              },
              {
                id: 11,
                time: "Nov 8, 2022",
                author: "Constance Foley",
                profilePic: "https://i.ibb.co/C0B9GqP/poster1.jpg", 
                picture: "https://iili.io/H9Qrks1.jpg",
                text: "Court heard which up above hoped grave do. Answer living law things either sir bed length.",
                likecount: 0
              }
        ]
    },  
    getters: {
    },
    mutations: {
      increment (state, id) {
        state.postInfo.forEach(post => {
          if (post.id === id){
            post.likecount +=1;
          }
      })
      },
      reset(state){
        state.postInfo.forEach(post => {
          post.likecount = 0;
      })
      }
    },
    actions: {
    }
})