var projects = [
    {
        id: "waltti",
        thumbnail: "./assets/waltti_thumbnail.png",
        image: "./assets/waltti.png",
        name: "Waltti Public GTFS Realtime API",
        description: "Waltti Public GTFS Realtime API is a proxy service that I made in spring/summer 2019. It was project that our customer ordered in order to reduce service costs from the the original service provider.",
        fullDescription: "Waltti Public GTFS Realtime API is a proxy service that I made in spring/summer 2019. It was project that our customer ordered in order to reduce service costs from the the original service provider.\n\nThe proxy data from REST API (if user makes  request for that) and saved that data in Redis database. If same request is made again, the proxy will return data from the local database instead of proxying the request to the original API. This will reduce the number of requests made to  the orignal API. I also made an analytics tool and documentation page for the service.\n\nThe documenation can be found <a href=\"https://opendata.waltti.fi\">here</a>\n\n<strong>Used technologies:</strong>\n– Node.js\n– Redis database\n– PostgreSQL (analytics)\n– React (analytics & docs)",
    },
    {
        id: "forenseek",
        thumbnail: "./assets/forenseek_thumbnail.png",
        image: "./assets/forenseek.png",
        name: "ForenSeek",
        description: "ForenSeek is a location-based storytelling mobile app that has been released for both iOS and Android. I developed the whole frontend within a tight 2 week long sprint.",
        fullDescription: "ForenSeek is a location-based storytelling mobile app that has been released for both iOS and Android. I developed the whole frontend within a tight 2 week long sprint.\n\nThe app uses REST API that was developed by one of my colleagues.\n\nApp can be downloaded from App Store and Play Store\n\n<strong>Used technologies:</strong>\n– React Native",
    }
]