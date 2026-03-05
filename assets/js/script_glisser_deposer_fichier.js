Dropzone.options.fichierDropzone = {
    paramName: "fichier",
    maxFiles: 1,
    maxFilesize: 2, // MB
    acceptedFiles: ".pdf",
    addRemoveLinks: true,
    autoProcessQueue: false,
    dictDefaultMessage: "Glisser votre pièce d'identité (PDF) ici ou cliquer pour sélectionner",
    dictFileTooBig: "Le fichier ne doit pas dépasser 2MB",
    dictRemoveFile: "Supprimer",
    dictInvalidFileType: "Seuls les fichiers PDF sont acceptés",
    
    init: function() {
        this.on("maxfilesexceeded", function(file) {
            this.removeAllFiles();
            this.addFile(file);
        });
    }
};