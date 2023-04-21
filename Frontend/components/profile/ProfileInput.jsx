import ImageUpload from '../../components/profile/ImageUpload';
import FirstName from '../names/FirstName';
import LastName from '../names/FirstName';
import Email from '../email/Email';
import Password from '../password/Password';

const ProfileInput =({}) => {
    return(
        <form>
            <div class="mb-3"> 
                <ImageUpload />
            </div>
            <div class="mb-3"> 
                <FirstName />
            </div>
            <div class="mb-3"> 
                <LastName />
            </div>
            <div class="mb-3"> 
                <Email />
            </div>
            <div class="mb-3"> 
                <Password />
            </div>

            <div class="mb-3"> 
                <input type="text" class="form-control" placeholder="Nickname" />
            </div>

            <div class="mb-3"> 
                <input type="text" class="form-control" placeholder="Beruf" />
            </div>

            <div class="mb-3"> 
                <input type="text" class="form-control" placeholder="Fähigkeiten" />
            </div>

            <div class="mb-3 form-check"> 
            <p>Equipment</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">checkbox</label>
            </div>
            <div class="mb-3 form-check"> 
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">checkbox</label>
            </div> 

            <div class="mb-3"> 
                <label for="umkreis" class="form-label">Einsatzbereich / Umkreis</label>
                <input type="range" class="form-range" id="umkreis" min="0" max="500" />
            </div>

            <div class="mb-3"> 
                <input type="text" class="form-control" placeholder="zeitliche Verfügbarkeit" />
            </div>           
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
 
}

export default ProfileInput;