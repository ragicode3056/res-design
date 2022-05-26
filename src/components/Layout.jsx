import { Header } from "./Header"
import { Hiring } from "./Hiring"
import { JobIntroduction } from "./JobIntroduction"
import { JobsContainer } from "./JobsContainer"

export const Layout = () =>{
    return (
        <div>
            <Header/>
            <div className="layout-container">
                <Hiring/>
                <JobsContainer/>
                <JobIntroduction/>
            </div>
        </div>
    )
}