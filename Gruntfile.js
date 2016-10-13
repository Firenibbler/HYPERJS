module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {

            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> - Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> - Author: <%= pkg.author %> */\n',
                    preserveComments: false,

                },
                files: {
                    "build/hyperjs.min.js": [
                        "src/boot.js",
                        "src/math.js",
                        "src/timer.js",
                        "src/input.js",
                        "src/preload/boot.js",
                        "src/preload/bitmap.js",
                        "src/preload/spritesheet.js",
                        "src/audio.js",
                        "src/physics/boot.js",
                        "src/Physics/collisionTesting.js",
                        "src/Physics/vector.js",
                        "src/Physics/box.js",
                        "src/particles.js",
                        "src/group.js",
                        "src/screen.js",
                        "src/state.js",
                        "src/layer.js",
                        "src/graphics/boot.js",
                        "src/graphics/style.js",
                        "src/graphics/draw.js",
                        "src/graphics/animation.js",
                        "src/sprite.js",
                        "src/end.js",
                    ]

                },

            },

            my_advanced_target: {
                options: {
                    banner: '/*! <%= pkg.name %> - Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> - Author: <%= pkg.author %> */\n',
                    preserveComments: true,
                    compress: false,
                    beautify: true,

                },
                files: {
                    "build/hyperjs.js": [
                        "src/boot.js",
                        "src/math.js",
                        "src/timer.js",
                        "src/input.js",
                        "src/preload/boot.js",
                        "src/preload/bitmap.js",
                        "src/preload/spritesheet.js",
                        "src/audio.js",
                        "src/physics/boot.js",
                        "src/Physics/collisionTesting.js",
                        "src/Physics/vector.js",
                        "src/Physics/box.js",
                        "src/particles.js",
                        "src/group.js",
                        "src/screen.js",
                        "src/state.js",
                        "src/layer.js",
                        "src/graphics/boot.js",
                        "src/graphics/style.js",
                        "src/graphics/draw.js",
                        "src/graphics/animation.js",
                        "src/sprite.js",
                        "src/end.js",
                    ]

                },

            },

        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};