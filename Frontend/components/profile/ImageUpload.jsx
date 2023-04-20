
const ImageUpload = ({label}) => {
  
  return(
    <div>
    <label for="formFile" class="form-label">{label}</label>
    <input class="form-control" type="file" id="formFile" />
  </div>
  )
}

export default ImageUpload;
