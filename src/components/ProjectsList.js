const ProjectsList = () => {
    return(
        <ul>
            <li key={projects.title}>
                <p>{projects.description}</p>
                <p>{projects.image}</p>
                <p>Repository Link: {projects.repositoryLink}</p>
                <p>Deployment Link: {projects.deploymentLink}</p>
            </li>
        </ul>
    )

}

export default ProjectsList;