var config = require("./webpack.dev")
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var myserver = function(port){
    var PORT = port || 89981
    config.entry.main.unshift("webpack-dev-server/client?http://0.0.0.0:" + PORT, "webpack/hot/dev-server");
    var compiler = webpack(config)
    var server = new WebpackDevServer(compiler, {
        hot: true,
        stats: {
            colors: true
        },
        historyApiFallback : true,
        publicPath: '/static/'
    })
    server.listen(PORT, function(err) {
        if (err) {
            console.log(err)
            return
        }
        console.log('Listening at http://localhost:' + PORT + '\n')
        // nightmare.goto('http://localhost:8080')
    })
}
module.exports = myserver 
