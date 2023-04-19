import "./lastName.css"

const LastName = ({lastNameLabel, lastNamePlaceholder}) =>{
    return(
        <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">{lastNameLabel}</label>
            <input type="text" class="form-control" id="validationTooltip02" placeholder={lastNamePlaceholder} required/>
        </div>
    )
}

export default LastName;