import gulp from 'gulp';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function replaceTask() {
  return gulp.src(`index.html.tpl`)
    .pipe(replace('${urlRootPath}', process.env.url_root_path || '/'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(project.paths.root + '/../'));
}
