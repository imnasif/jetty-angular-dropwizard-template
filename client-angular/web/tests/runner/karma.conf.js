// Karma configuration
// Generated on Tue Sep 15 2015 21:20:50 GMT+0600 (Bangladesh Standard Time)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'jasmine-matchers'],
        // list of files / patterns to load in the browser
        files: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular-mocks.js',
            'app/app.js',
            'app/services/*.js',
            'tests/scripts/unit/**/*.js'
        ],
        // list of files to exclude
        exclude: [
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/app.js': 'coverage',
            'app/services/*.js': 'coverage'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html', 'junit'],
        coverageReporter: {
            type: 'html',
            dir: 'tests/runner/coverage/'
        },
        htmlReporter: {
            outputFile: 'tests/runner/reports/unit_tests_report.html'
        },
        junitReporter: {
            outputDir: 'tests/runner/reports'
        },
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};
