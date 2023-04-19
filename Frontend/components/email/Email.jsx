import "./Email.css"

const Email = ({emailLabel, emailPlaceholder}) =>{
    return(
        <div class="col-auto">
                    <label for="exampleFormControlInput1" class="form-label">{emailLabel}</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder={emailPlaceholder}/>
                </div>
    )
}

export default Email;