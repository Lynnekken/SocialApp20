import "./submitbutton.css"

const Submitbutton = ({submitButtonText}) => {

    return(
        <button type="button" class="btn btn-primary" id="submitbutton">{submitButtonText}</button>
    )
}

export default Submitbutton;