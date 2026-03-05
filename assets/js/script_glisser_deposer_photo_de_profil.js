Dropzone.options.photoDropzone = {
    paramName: "photo",
    maxFiles: 1,
    maxFilesize: 2, // MB
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    autoProcessQueue: false,
    dictDefaultMessage: "Glisser votre photo ici ou cliquer pour sélectionner",
    dictFileTooBig: "Le fichier ne doit pas dépasser 2MB",
    dictRemoveFile: "Supprimer",
    dictInvalidFileType: "Seuls les fichiers images sont acceptés",
    
    init: function() {
        this.on("maxfilesexceeded", function(file) {
            this.removeAllFiles();
            this.addFile(file);
        });
    }
};