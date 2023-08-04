import ResumeFile from '../assets/jennsresume2023.pdf'
import Page1 from '../assets/resumepg1.png'
import Page2 from '../assets/resumepg2.png'

function Resume() {
    return (
        <main>
            <h1>Jennifer's Resume</h1>
            <img className='resumeImage' src={Page1} alt='resume-screenshot-1' />
            <img className='resumeImage' src={Page2} alt='resume-screenshot-2' />
            
               <p>Click the link to download <a href={ResumeFile}>my resume here!</a></p>
        </main>
    )
}

export default Resume;