import "./firstName.css"

const FirstName = ({firstNameLabel, firstNamePlaceholder}) => {

    return(
        <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">{firstNameLabel}</label>
            <input type="text" class="form-control" id="validationTooltip01" placeholder={firstNamePlaceholder} required/>                     
        </div>
    )
}

export default FirstName;