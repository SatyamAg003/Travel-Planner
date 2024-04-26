const destinations = [
    {
        id: 1, 
        name: 'Taj Mahal', 
        description: 'A symbol of love...', 
        image: 
'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D', 
        rating: 4.5,
        bestTime: 'October to February',
        linkk : 'https://www.tajmahal.gov.in/',
    },
   
    {
        id: 2,
        name: 'Jaipur City Palace',
        description: 'A magnificent palace...',
        image: 
'https://images.unsplash.com/photo-1605601922734-a9c13b0ce8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphaXB1ciUyMGNpdHklMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D',
        rating: 4.5,
        bestTime: 'October to February',
        linkk : 'https://www.tourism.rajasthan.gov.in/city-palace.html',
    },
   
    {
        id: 3,
        name: 'Goa Beaches',
        description: 'Beautiful sandy beaches...',
        image: 
'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.6,
        bestTime: 'November to February',
        linkk : 'https://goa-tourism.com/beach/',
    },
    {
        id: 4,
        name: 'Kerala Backwaters',
        description: 'Scenic beauty of backwaters...',
        image: 
'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2VyYWxhJTIwQmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.7,
        bestTime: 'September to March',
        linkk : 'https://www.keralatourism.org/destination/backwater/',
    },
    {
        id: 5,
        name: 'Hampi Ruins',
        description: 'Ancient ruins and temples...',
        image: 
'https://plus.unsplash.com/premium_photo-1661915320026-84ca2c96faa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFtcGklMjBSdWluc3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.4,
        bestTime: 'October to March',
        linkk : 'https://www.explorationscompany.com/archaeological-tour-of-hampi/',
    },
    {
        id: 6,
        name: 'Rishikesh Yoga Retreats',
        description: 'Peaceful yoga retreats...',
        image: 
'https://images.unsplash.com/photo-1603867106100-0d2039fc8757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmlzaGlrZXNofGVufDB8fDB8fHww',
        rating: 4.9,
        bestTime: 'September to November',
        linkk : 'https://uttarakhandtourism.gov.in/destination/rishikesh',
    },
    {
        id: 7,
        name: 'Darjeeling Tea Gardens',
        description: 'Lush green tea gardens...',
        image: 
'https://images.unsplash.com/photo-1677858742608-dbb122c77c57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERhcmplZWxpbmclMjBUZWElMjBHYXJkZW5zfGVufDB8fDB8fHww',
        rating: 4.5,
        bestTime: 'March to November',
        linkk : 'https://darjeeling.gov.in/',
    },
    {
        id: 8,
        name: 'Mysore Palace',
        description: 'Historical royal palace...',
        image: 
'https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww',
        rating: 4.6,
        bestTime: 'October to February',
        linkk : 'https://mysore.nic.in/en/tourist-place/mysuru-palace/',
    },
    {
        id: 9,
        name: 'Rann of Kutch',
        description: 'Endless white salt desert...',
        image: 
'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFubiUyMG9mJTIwS3V0Y2h8ZW58MHx8MHx8fDA%3D',
        rating: 4.7,
        bestTime: 'October to March',
        linkk : 'https://www.gujarattourism.com/kutch-zone/kutch/great-rann-of-kutch.html',
    },
    {
        id: 10,
        name: 'Varanasi Ghats',
        description: 'Sacred river ghats...',
        image: 
'https://images.unsplash.com/photo-1646288744226-a2e3a06bfb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFuYXJhc2klMjBnaGF0fGVufDB8fDB8fHww',
        rating: 4.8,
        bestTime: 'October to March',
        linkk : 'https://varanasi.nic.in/tourist-place/ganga-ghat/',
    },
    {
        id: 11,
        name: 'Andaman Islands',
        description: 'Exotic islands and beaches...',
        image: 
'https://images.unsplash.com/photo-1533655897775-c12b8b0734fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5kbWFuJTIwYW5kJTIwbmljb2JhciUyMGlzbGFuZHN8ZW58MHx8MHx8fDA%3D',
        rating: 4.6,
        bestTime: 'October to April',
        linkk : 'https://www.andamantourism.gov.in/',
    },
    {
        id: 12,
        name: 'Udaipur Lakes',
        description: 'Picturesque lakes and palaces...',
        image: 
'https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1ciUyMGxha2VzfGVufDB8fDB8fHww',
        rating: 4.7,
        bestTime: 'September to March',
        linkk : 'https://www.tourism.rajasthan.gov.in/udaipur.html',
    },
    {
        id: 13,
        name: 'Ajanta and Ellora Caves',
        description: 'Ancient rock-cut caves...',
        image: 
'https://plus.unsplash.com/premium_photo-1697730367686-227c2b07d279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWphbnRhJTIwYW5kJTIwRWxsb3JhJTIwQ2F2ZXN8ZW58MHx8MHx8fDA%3D',
        rating: 4.8,
        bestTime: 'October to March',
        linkk : 'https://whc.unesco.org/en/list/242/',
    },
    
];
 
export default destinations;