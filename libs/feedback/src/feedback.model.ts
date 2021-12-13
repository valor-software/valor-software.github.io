export const feedBack = [
    {
        project: 'CareerBuilder',
        text: 'From the start of our relationship with Valor software we saw a fundamental shift in our development practices. The attitude of fully integrating with the team and behaving as a co-owner of the platform was a refreshing departure from classical off shore. I highly recommend Valor to everyone I talk to.',
        img: 'assets/img/feedback/careerBuilder.jpg',
        author: 'Zackary Chapple',
        position: 'Principal Architect'
    },
    {
        project: 'Dollar Street',
        text: 'Thanks "Valor Software" for awesome work! I especially liked your openness and desire to share experience. The best of Valor, is that they never say "It\'simpossible", they always find a good approaches to satisfy the customers.',
        img: 'assets/img/feedback/dollarStreet.jpg',
        author: 'Anna Rosling',
        position: 'Mother of Dollar Street'
    },
    {
        project: 'Souqalmal',
        text: 'I really enjoyed working with Dima! He\'s an excellent developer and he really helped us build our new product, using the latest technologies out there. Dima is very knowledgeable and passionate and he\'s also striving to be up to date with the latest developments in his field. He\'s a true JS ninja!',
        img: 'assets/img/feedback/soqualmal.jpg',
        author: 'Iraklis Alexopoulos',
        position: 'Tech Team Lead'
    },
    {
        project: 'Gapminder Offline',
        text: 'What we can tell you is that Valor Software is very, very knowledgeable and very helpful. We think what sticks out the most is their capacity to find solutions instead of just saying what cannot be done. They know how to develop any feature that we request, and they are very good at user experience. They also know how to communicate with non-tech people. I think that makes them quite special because any client can communicate with them.',
        img: 'assets/img/feedback/gapminder.jpg',
        author: 'Ola Rosling',
        position: 'CEO of Gapminder'
    },
    {
        project: 'TablesReady',
        text: 'Dima and team were fantastic to work with - smart, reliable, and familiar with a variety of web technologies. They were quick to pickup new concepts and extremely proactive in developing features.',
        img: 'assets/img/feedback/tablesReady.jpg',
        author: 'Robert Shaw',
        position: 'CEO at Table\'s Ready'
    }
];

export interface IFeedBack {
    project: string;
    text: string;
    img: string;
    author: string;
    position: string;
}