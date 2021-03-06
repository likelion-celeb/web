Dropzone.autoDiscover=false;
const myDropzone= new Dropzone('#my-dropzone',{
    url:'upload/',
    maxFiles: 1,
    maxFilesize: 100,
    acceptedFiles:'.jpg',
    dictDefaultMessage: "Drop files here to upload",
    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    dictFileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
    dictInvalidFileType: "You can't upload files of this type.",
    dictResponseError: "Server responded with {{statusCode}} code.",
    dictCancelUpload: "Cancel upload",
    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    dictRemoveFile: "Remove file",
    dictRemoveFileConfirmation: null,
    dictMaxFilesExceeded: "You can not upload any more files.",
})