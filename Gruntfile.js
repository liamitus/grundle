module.exports = function (grunt) {

    var compression_root = 'image_compression/';
    var sprite_root = 'sprites/';

	grunt.initConfig({
        clean: [
            compression_root + 'min',
            sprite_root + 'out'
        ],
        copy: {
            demo: {
                files: [{
                    expand: true,
                    cwd: compression_root + 'raw',
                    src: '*',
                    dest: compression_root + 'min/smushit'
                },
                {
                    expand: true,
                    cwd: compression_root + 'raw',
                    src: '*',
                    dest: compression_root + 'min/imageoptim'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    keepalive: true
                }        
            }         
        },
		smushit: {
			demo: {
				src: compression_root + 'min/smushit/*'
			}
		},
        imageoptim: {
            demo: {
                src: compression_root + 'min/imageoptim'
            },
            main : {
                src: [compression_root + 'main/**']
            }
        },
        sprite: {
            demo: {
                src: sprite_root + 'raw/*.png',
                dest: sprite_root + 'out/spritesheet.png',
                destCss: sprite_root + 'out/sprites.css'
            }
        }
	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-smushit');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['clean', 'copy', 'sprite', 'connect']);
}
