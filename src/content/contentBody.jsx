import React from 'react';
import './contentBody.css'
import { useSelector } from 'react-redux';
import { allProjectsList } from '@/store/selectors';
import { Link } from 'react-router-dom';
import Clock from '@/icons/clock';
import Monitor from '@/icons/monitor';
import Wrench from '@/icons/wrench';
const projectIcons = [
    {
        icon: Clock,
        key: 'developmentPeriod'
    },
    {
        icon: Monitor,
        key: 'displayResolution'
    },
    {
        icon: Wrench,
        key: 'instruments'
    },
]

const Content = () => {
    const allProjects = useSelector(allProjectsList)
    return (
        <section className='content_section'>
            {
                allProjects.map(
                    project => {
                        return (
                            <Link target="_blank" className='project' to={project.projectLink} key={project.projectId}>
                                <img className='project_photo' width='400' height='250' src={`/contentPhotos/${project.projectPhotoPath}`} alt={project.projectName} />
                                <div className='project_text_container'>
                                    <h2 className='project_title'>{project.projectName}</h2>
                                    <p className='project_goal'>{project.personalFeedback}</p>
                                    <div className='project_icons'>{projectIcons.map(icon => {
                                        return (
                                            <div key={icon.key} className='project_icon'>
                                                <icon.icon />
                                                <p className='project_icon_text'>{project[icon.key]}</p>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                )
            }
            {/* <div>

                {
                    allProjects.map(currentProject => {
                        return (
                            <div key={currentProject.projectId} className='current_project'>
                                <h2 className='project_name'>{currentProject.projectName}</h2>
                                <table className='project_table'>

                                    {
                                        tableInfo.map(tableItem => {
                                            if (tableItem.header) {
                                                return (
                                                    <thead key={`${tableItem.key}_${currentProject.projectKey}`}>
                                                        <tr >
                                                            <th className='project_table_header' ></th>
                                                            <th className='project_table_item' ></th>
                                                        </tr>
                                                    </thead>

                                                )
                                            }
                                            else {
                                                return (
                                                    <tbody key={`${tableItem.key}_${currentProject.projectKey}`}>
                                                        <tr >
                                                            <td><p className='project_item_first'>{tableItem.text}</p></td>
                                                            <td className='project_item_second'>{currentProject[tableItem.key]}</td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            }
                                        })
                                    }
                                    <tbody key={`${currentProject.projectKey}`}>
                                        <tr >
                                            <td><p className='project_item_first'>Project links</p></td>
                                            <td className='project_item_second'>
                                                <p><Link className='project_link' to={currentProject.projectLink}>Link </Link>to the finalized project</p>
                                                <p><Link className='project_link' to={currentProject.gitProjectLink}>Link</Link> to the project's github</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    )
                }
            </div> */}
        </section>
    )
}

export default Content