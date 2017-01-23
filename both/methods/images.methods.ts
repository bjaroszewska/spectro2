import { UploadFS } from 'meteor/jalik:ufs';
import { ImagesStore } from '../collections/images.collection';

export function upload(data: File): Promise<any> {
    return new Promise((resolve, reject) => {

        // pick from an object only: name, type and size
        const file = {
            name: data.name,
            type: data.type,
            size: data.size,
        };

        const upload = new UploadFS.Uploader({
            data,
            file,
            store: ImagesStore,
            onError: reject,
            onComplete: resolve
        });

        upload.start();

    });
}/**
 * Created by air on 16/01/2017.
 */

export function upload2(file: File) {
    console.log("done");
    UploadFS.selectFiles(function(file){

            let photo = {
                name: file.name,
                size: file.size,
                type: file.type
            };
            let worker = new UploadFS.Uploader({
                file,
                photo,
                store: ImagesStore,
            });
            worker.start();

    });

}
