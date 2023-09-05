const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: `mongodb+srv://Blog-Breeze:3ukxg80NaPaXrwUM@cluster0.dtgjvar.mongodb.net/BlogBreeze?retryWrites=true&w=majority`
    },
    server: {
        host: 'localhost',
        port: 1337
    }
};

export default config;
