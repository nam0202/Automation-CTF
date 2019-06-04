exports.config = {
    specs:[
        './test_scipts/openPage.js'
    ],
    host:'localhost',
    port:9515,
    path:'/',
    capabilities:[
        {
            browserName: 'chrome'
        }
    ],
    framework: 'mocha',
    mochaOpts:{
        ui:'bdd',
        timeout: 100000*6
    }
    // logLevel: 'verbose'
}