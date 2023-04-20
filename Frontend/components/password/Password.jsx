import "./password.css"

const Password = ({passwordLabel, passwordPlaceholder}) => {

    return(
        <div class="col-auto">
            <label for="exampleFormControlInput1" class="form-label">{passwordLabel}</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder={passwordPlaceholder}/>
        </div>

    )
}

export default Password;