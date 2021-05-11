/*import { ref, onMounted, watch } from 'vue';
import { Plugins, Capacitor, FilesystemDirectory } from "@capacitor/core";
//import { Media, MediaObject } from '@ionic-native/media/ngx';
import { isPlatform } from '@ionic/vue';

    export interface Audio {
        filepath: string;
        webviewPath?: string;
    }
    export function useAudio(){
       const audio = ref<Audio[]>([]);

        const { Filesystem, Storage } = Plugins;
        const PHOTO_STORAGE = "audio";

               const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
          });

          const saveLecutre= async (audio: CameAudio, fileName: string): Promise<Audio> => {
            let base64Data: string;
          
             // "hybrid" will detect mobile - iOS or Android
            if (isPlatform('hybrid')) {
                const file = await Filesystem.readFile({
                path: audio.path!
                });
                base64Data = file.data;
            } else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = await fetch(audio.webPath!);
                const blob = await response.blob();
                base64Data = await convertBlobToBase64(blob) as string;
            }
             const savedFile = await Filesystem.writeFile({
              path: fileName,
              data: base64Data,
              directory: FilesystemDirectory.Data
            });
            if (isPlatform('hybrid')){
                     // Display the new image by rewriting the 'file://' path to HTTP
                    // Details: https://ionicframework.com/docs/building/webview#file-protocol
                    return {
                        filepath: savedFile.uri,
                        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
                    };
            }
            else{
                // Use webPath to display the new image instead of base64 since it's 
            // already loaded into memory
            return {
                filepath: fileName,
                webviewPath: audio.webPath
              };
            }
          };
          const takeAudio = async() => {
            const CameAudio = await Filesystem.getUri({
            path:filepath,
            directory:FilesystemDirectory.document,
            });
            const fileName = new Date().getTime() + '.mp3';
            const savedFileImage = await saveLecutre(CameAudio, fileName);

            audio.value = [savedFileImage, ...audio.value];
                
        };

        const cacheAudios = () => {
            Storage.set({
              key: PHOTO_STORAGE,
              value: JSON.stringify(audio.value)
            });
          }    
        watch(photos, cacheAudios);


        const loadSaved = async () => {
            const audioList = await Storage.get({ key: PHOTO_STORAGE });
            const audiosInStorage = audioList.value ? JSON.parse(audioList.value) : [];
          
            if (isPlatform('hybrid'))
            {
                for (const audio of audiosInStorage) {
                    const file = await Filesystem.readFile({
                        path: audio.filepath,
                        directory: FilesystemDirectory.Data
                    });
                    photo.webviewPath = `data:audio/mp3;base64,${file.data}`;
                  }
            }
          
            audio.value = audiosInStorage;
          }
        onMounted(loadSaved);
        return {
          audio,
          takeAudio
        }
        
    }*/
    