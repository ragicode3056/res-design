import classes from './styles/jobsContainer.module.css';
import jobsId from './assests/JobId.png';
import JobTtile from './assests/JobTitle.png';
import designation from './assests/designation.png';
import location from './assests/location.png';
export const JobsContainer = () =>{
    return (
        <div className={classes.jobsContainer}>
            <div className={classes.innerRow}>
               <img src = {jobsId} alt="jobID"/>
                <div className={classes.innerImgDiv}>
                    <h5>JOB ID</h5>
                    <h3>UI/UX12456</h3>
                    
               </div>
              
            </div>
            {/* Second */}
            <div className={classes.innerRow}>
               <img src = {JobTtile} alt="jobID"/>
                <div className={classes.innerImgDiv}>
                    <h5>JOB Title</h5>
                    <h3>UI/UX Designer</h3>
                    
               </div>
              
            </div>
            {/* Third */}
            <div className={classes.innerRow}>
               <img src = {designation} alt="jobID"/>
                <div className={classes.innerImgDiv}>
                    <h5>JOB Designation</h5>
                    <h3>Senior UI/UX Designeer</h3>
                    
               </div>
              
            </div>
            {/* Fourth */}
            <div className={classes.innerRow}>
               <img src = {location} alt="jobID"/>
                <div className={classes.innerImgDiv}>
                    <h5>JOB Location</h5>
                    <h3>Chennai</h3>
                    
               </div>
              
            </div>
           
        </div>
    )
}